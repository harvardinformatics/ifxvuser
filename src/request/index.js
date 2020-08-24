/*
  Request API
*/
import axios from 'axios'
import store from '@/store/index'

class Request {
  constructor (request) {
    if (request) {
      this.request = request
    } else {
      this.request = {}
    }
    if (!this.request.data) {
      this.request.data = {}
    }
  }

  get id () {
    return this.request.id
  }

  get processor () {
    return this.request.processor
  }

  get currentState () {
    return this.request.current_state
  }

  set currentState (state) {
    this.request.current_state = state
  }

  get result () {
    return this.request.result
  }

  set result (result) {
    this.request.result = result
  }

  get requestStates () {
    return this.request.request_states
  }

  set requestStates (requestStates) {
    this.request.request_states = requestStates
  }

  get requestComments () {
    return this.request.request_comments
  }

  set requestComments (requestComments) {
    this.request.request_comments = requestComments
  }
}

class AccountRequest extends Request {
  constructor (request) {
    super(request)
    if (!this.request.data.data) {
      this.request.data.data = {}
    }
    if (!this.request.data.data.person) {
      this.request.data.data.person = {}
    }
    if (!this.request.data.data.tracks) {
      this.request.data.data.tracks = {}
    }
  }

  get onBoardRequest () {
    return this.request.data
  }

  set onBoardRequest (onBoardRequest) {
    this.request.data = onBoardRequest
  }

  get continuationKey () {
    return this.onBoardRequest.continuation_key
  }

  get continuationKeyExpiration () {
    return this.onBoardRequest.continuation_key_expiration
  }

  set continuationKeyExpiration (continuationKeyExpiration) {
    this.onBoardRequest.continuation_key_expiration = continuationKeyExpiration
  }

  get onBoardRequestData () {
    return this.onBoardRequest.data
  }

  set onBoardRequestData (onBoardRequestData) {
    this.onBoardRequest.data = onBoardRequestData
  }

  get tracks () {
    return this.onBoardRequestData.tracks
  }

  set tracks (tracks) {
    this.onBoardRequestData.tracks = tracks
  }

  setTrackStepStatus (trackName, stepName, status) {
    if (this.tracks && this.tracks[trackName]) {
      this.tracks[trackName][stepName].value = status
    } else {
      throw new Error('Track ' + trackName + ' is not valid on this request.')
    }
  }

  getTrackStepStatus (trackName, stepName) {
    let result = null
    if (this.tracks && this.tracks[trackName] && this.tracks[trackName][stepName]) {
      result = this.tracks[trackName][stepName].value
    }
    return result
  }

  setTrackStepComplete (trackName, stepName) {
    this.setTrackStepStatus(trackName, stepName, 'complete')
  }

  setTrackStepPending (trackName, stepName) {
    this.setTrackStepStatus(trackName, stepName, 'pending')
  }

  setTrackStepIncomplete (trackName, stepName) {
    this.setTrackStepStatus(trackName, stepName, 'incomplete')
  }

  isTrackStepComplete (trackName, stepName) {
    return this.getTrackStepStatus(trackName, stepName) === 'complete'
  }

  get person () {
    return this.onBoardRequestData.person
  }

  set person (person) {
    this.onBoardRequestData.person = person
  }

  get primaryEmail () {
    return this.person.primary_email
  }

  set primaryEmail (primaryEmail) {
    this.person.primary_email = primaryEmail
  }

  get contacts () {
    return this.person.contacts
  }

  set contacts (contacts) {
    this.person.contacts = contacts
  }

  get fullName () {
    return this.person.full_name
  }

  set fullName (fullName) {
    this.person.full_name = fullName
  }
}


class RequestAPI {
  constructor (defaultApprover, apiRoot) {
    this.defaultApprover = defaultApprover
    this.apiRoot = apiRoot
  }
  setState (id, nextState, comment) {
    const url = `${this.apiRoot}/requests/set-request-state/`
    const data = { 'request_id': id, 'state': nextState, 'comment': comment }
    return axios.post(
      url, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${store.getters.authHeaderValue}` }
      })
  }
  getRequestTypeDetailComponent (requestType) {
    if (requestType === 'account_request') {
      return 'AccountRequestDetail'
    }
  }
  getEmptyRequestComment () {
    return {
      id: null,
      text: '',
      author: null
    }
  }
  async getRequest (id) {
    const url = `${this.apiRoot}/requests/${id}/`
    let result = null
    let data = await axios.get(
      url, {
        headers: {
          Authorization: `${store.getters.authHeaderValue}`
        }
      }).then((res) => res.data).catch((err) => { throw new Error(err) })
    if (data && data.request_type === 'account_request') {
      result = new AccountRequest(data)
    } else {
      result = new Request(data)
    }
    return result
  }
  getDefaultApprover () {
    return this.defaultApprover
  }
  getRequestList (dataFields, search, includeCompleted, currentState, requestType) {
    let params = {}
    if (dataFields) {
      params['data_fields'] = dataFields
    }
    if (search) {
      params['search'] = search
    }
    if (currentState) {
      params['current_state'] = currentState
    }
    if (includeCompleted) {
      params['include_completed'] = 'true'
    }
    if (requestType) {
      params['request_type'] = requestType
    }
    const url = `${this.apiRoot}/requests/get-request-list/`
    return axios.get(url, {
      headers: {
        Authorization: `${store.getters.authHeaderValue}`
      },
      params: params
    })
  }
  updateAccountRequest (accountRequest) {
    // Update both the account request and the onboard request data
    const headers = {
      'Content-Type': 'application/json', Authorization: `${store.getters.authHeaderValue}`
    }
    const id = accountRequest.id
    const url = `${this.apiRoot}/requests/${id}/`
    const onboardRequest = accountRequest.onBoardRequest
    const onboardRequestId = onboardRequest.id
    const onboardRequestUrl = `${this.apiRoot}/onboard-requests/${onboardRequestId}/`
    return axios.put(
      url,
      accountRequest.request,
      { headers: headers }
    )
      .then((res) => {
        axios.put(
          onboardRequestUrl,
          onboardRequest,
          { headers: headers }
        )
          .catch((err) => {
            console.log(err)
          })
      })
  }
  isUserApprover (request) {
    if (!request.requestStates || !request.requestStates[0] || !request.requestStates[0].approvers) return false
    return request.requestStates[0].approvers.includes(this.auth.getUsername()) || this.auth.isAdmin()
  }
  isAwaitingApproval (request) {
    if (!request.currentState) return false
    return request.currentState.includes('APPROVAL_PENDING')
  }
  canBeApproved (request) {
    return this.isUserApprover(request) && this.isAwaitingApproval(request)
  }
  getValidProcessorStates (processor) {
    // For the processor class name, get the valid states
    const url = `${this.apiRoot}/requests/get-valid-processor-states/`
    const params = {
      'processor': processor
    }
    return axios.get(url, {
      params: params,
      headers: { Authorization: `${store.getters.authHeaderValue}` }
    })
  }
}

export { Request, AccountRequest, RequestAPI }
