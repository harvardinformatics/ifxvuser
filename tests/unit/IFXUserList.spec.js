import { mount, createLocalVue } from '@vue/test-utils'
import IFXUserList from '@/components/user/IFXUserList.vue'
import { UserAPI } from '@/user'
import axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'
import flushPromises from 'flush-promises'

jest.mock('axios')

class MockAuth {
  getAuthHeaderValue() {
    'Token 12345'
  }
}

describe('Test IFXUserList rendering', function () {
  let localVue
  let auth = new MockAuth()
  let userApi = new UserAPI('/api', auth)

  beforeEach(function () {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    localVue.use(Vuetify)
  })

  it('Ensure single user row is rendered', async () => {
    let response = {
      data: [
        {
          id: 1,
          first_name: 'Derpy',
          last_name: 'Derpiston',
          full_name: 'Derpy K. Derpiston',
          email: 'dderpiston@gmail.com',
          ifxid: 'IFXIDX000000009'
        }
      ]
    }
    axios.get.mockResolvedValue(response)

    let props = {
      userApi: userApi,
      auth: auth,
      storagePrefix: 'ifxvuser',
      actions: {
        all: [],
        selected: []
      }
    }

    const wrapper = mount(IFXUserList, {
      localVue,
      vuetify: new Vuetify(),
      propsData: props
    })
    await flushPromises()
    expect(wrapper.find('.full-name').text()).toEqual(data[0].full_name)
  })

  it('Ensure empty list is rendered', function () {

    let response = {
      data: []
    }
    axios.get.mockResolvedValue(response)

    let props = {
      userApi: userApi,
      auth: auth,
      storagePrefix: 'ifxvuser',
      actions: {
        all: [],
        selected: []
      }
    }

    const wrapper = mount(IFXUserList, {
      localVue,
      vuetify: new Vuetify(),
      propsData: props
    })
    expect(wrapper.find('.no-data').text()).toEqual('No users returned')
  })
})