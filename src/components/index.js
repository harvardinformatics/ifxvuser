import IFXUserList from "./IFXUserList.vue";

const Components = {
  IFXUserList
};


function install(Vue, options ={}) {
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
  });
}

export default {
  install
}
