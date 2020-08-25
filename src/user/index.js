/*
  User API
  User class may be subclassable
*/
import axios from 'axios'
import forEach from 'lodash/forEach'
import indexOf from 'lodash/indexOf'

class User {
  constructor(user) {
    if (user) {
      this.user = user
    } else {
      this.user = {}
    }
    if (!this.user.groups) {
      this.user.groups = []
    }
  }

  get id() {
    return this.user.id
  }

  get ifxid() {
    return this.user.ifxid
  }

  get username() {
    return this.user.username
  }

  get fullName() {
    return this.user.full_name
  }

  set fullName(fullName) {
    this.user.full_name = fullName
  }

  get firstName() {
    return this.user.first_name
  }

  set firstName(firstName) {
    this.user.first_name = firstName
  }

  get lastName() {
    return this.user.last_name
  }

  set lastName(lastName) {
    this.user.last_name = lastName
  }

  get email() {
    return this.user.email
  }

  set email(email) {
    this.user.email = email
  }

  get lastUpdate() {
    return this.user.last_update
  }

  get dateJoined() {
    return this.user.date_joined
  }

  get groups() {
    return this.user.groups
  }

  set groups(groups) {
    this.user.groups = groups
  }

  addToGroup(group) {
    if (indexOf(this.user.groups, group) == -1) {
      this.user.groups.push(group)
    }
  }

  hasGroup(group) {
    return group in this.user.groups
  }

  isActive() {
    return this.user.is_active
  }

  isDjangoStaff() {
    return this.user.is_staff
  }
}

class UserAPI {
  constructor(apiRoot, auth) {
    this.apiRoot = apiRoot
    this.auth = auth
  }

  async getUsers(params) {
    const users = []
    const url = `${this.apiRoot}/users/`
    const usersData = await axios.get(
      url, {
        params,
        headers: {
          Authorization: `${this.auth.getAuthHeaderValue()}`,
        },
      },
    ).then((res) => res.data).catch((err) => { throw new Error(err); })

    forEach(usersData, (userData) => {
      users.push(new User(userData))
    })
    return users
  }

  updateUser(user) {
    // For use by administrators
    const userData = user.user
    const url = `${this.apiRoot}/users/${userData.id}/`
    return axios.put(url, userData, { headers: { Authorization: `${this.auth.getAuthHeaderValue()}` } })
  }

  updateUserAddress(data) {
    const url = `${this.apiRoot}/update-nanites-address/`
    return axios.post(url, data, { headers: { Authorization: `${this.auth.getAuthHeaderValue()}` } })
  }

  getGroups() {
    const url = `${this.apiRoot}/groups/`
    return axios.get(url, { headers: { Authorization: `${this.auth.getAuthHeaderValue()}` } })
  }

  userStyle(user) {
    let style = 'user'
    if (user) {
      style = 'user'
    }
    return style
  }
  // This should not be needed if we do the user object correctly
  // updateUserGroups(username, groups) {
  //   let url = `${this.apiRoot}/update-groups/`
  //   let data = {
  //     username,
  //     groups
  //   }
  //   return axios.post(url, data, {headers: {Authorization: `${this.auth.getAuthHeaderValue()}`}})
  // }
}

export { User, UserAPI }
