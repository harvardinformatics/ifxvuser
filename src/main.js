import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#C62828',
    secondary: '#90A4AE',
    accent: '#5C6BC0',
    error: '#db564c',
    warning: '#fcf3a1',
    info: '#2196f3',
    success: '#4caf50'
  },
  options: {
    customProperties: true
  }
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')

export default function install(Vue, options ={}) {
  Object.keys(ifxcomponents).forEach(name => {
    Vue.component(name, ifxcomponents[name]);
  })
})