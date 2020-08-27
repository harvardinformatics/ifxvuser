// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import App from './App.vue'
// import { Request, AccountRequest, RequestAPI } from './request'
// import { UserAPI, User } from './user'
import IFXUserList from './components/user/IFXUserList.vue'

// Vue.config.productionTip = false
// Vue.use(Vuetify, {
//   iconfont: 'md',
//   theme: {
//     primary: '#C62828',
//     secondary: '#90A4AE',
//     accent: '#5C6BC0',
//     error: '#db564c',
//     warning: '#fcf3a1',
//     info: '#2196f3',
//     success: '#4caf50'
//   },
//   options: {
//     customProperties: true
//   },
// })

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app')

function install(_Vue) {
  _Vue.component('IFXUserList', IFXUserList)
}

export default {
  install,
  // Request,
  // RequestAPI,
  // AccountRequest,
  // User,
  // UserAPI
}

export {
  install,
  // Request,
  // RequestAPI,
  // AccountRequest,
  // User,
  // UserAPI
}
