module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "53bb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "b2c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_dist_index_js_ref_0_1_IFXUserList_vue_vue_type_style_index_0_id_69feb9dd_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53bb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_dist_index_js_ref_0_1_IFXUserList_vue_vue_type_style_index_0_id_69feb9dd_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_dist_index_js_ref_0_1_IFXUserList_vue_vue_type_style_index_0_id_69feb9dd_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/dist??ref--0-1!./src/components/user/IFXUserList.vue?vue&type=template&id=69feb9dd&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-69feb9dd");

var IFXUserListvue_type_template_id_69feb9dd_scoped_true_render = /*#__PURE__*/_withId(function render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div");
});
// CONCATENATED MODULE: ./src/components/user/IFXUserList.vue?vue&type=template&id=69feb9dd&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/dist??ref--0-1!./src/components/user/IFXUserList.vue?vue&type=script&lang=js
// import { mapActions } from 'vuex'
/* harmony default export */ var IFXUserListvue_type_script_lang_js = ({
  name: 'IFXUserList',
  // props: {
  //   userApi: Object,
  //   auth: Object,
  //   storagePrefix: { /* prefix for localStorage items for the application, e.g. 'p3' */
  //     type: String,
  //     default: ''
  //   },
  //   actions: Object
  // },
  data: function data() {
    return {// search: localStorage.getItem(`${this.storagePrefix}UserListSearch`) || '',
      // loading: false,
      // dialog: false,
      // include_disabled: false,
      // // actions: {
      // //   all: [
      // //     {
      // //       name: 'Activate User Login',
      // //       method: 'enableLogin',
      // //       condition: user => !user.is_active
      // //     },
      // //     {
      // //       name: 'Deactivate User Login',
      // //       method: 'disableLogin',
      // //       condition: user => user.is_active
      // //     },
      // //     {
      // //       name: 'Make Staff',
      // //       method: 'makeStaff',
      // //       condition: user => true
      // //     },
      // //     {
      // //       name: 'Make Admin',
      // //       method: 'makeAdmin',
      // //       condition: user => true
      // //     }
      // //   ],
      // //   selected: {}
      // // },
      // users: [],
      // selectedUsers: [],
      // pagination: {
      //   sortBy: 'last_name',
      //   descending: false,
      //   totalItems: 0
      // },
      // usersPerPageItems: [10, 20, 50, { text: 'All', value: -1 }]
    };
  } // methods: {
  //   async getUsers(sort) {
  //     this.loading = true
  //     this.users = await this.userApi.getUsers({ include_disabled: this.include_disabled })
  //       .then((res) => res)
  //       .catch((error) => {
  //         this.showMessage(error)
  //       })
  //     if (sort) {
  //       this.sortUsers()
  //     }
  //     this.pagination.totalItems = this.users.length
  //   },
  //   userStyle(user) {
  //     return this.userApi.userStyle(user)
  //   },
  //   sortUsers() {
  //     const { sortBy, descending, page, rowsPerPage } = this.pagination
  //     // On first page load, do not sort new response from Django
  //     if (this.pagination.sortBy) {
  //       this.users = this.users.sort((a, b) => {
  //         const sortA = a[sortBy]
  //         const sortB = b[sortBy]
  //         if (descending) {
  //           if (sortA < sortB) return 1
  //           if (sortA > sortB) return -1
  //           return 0
  //         }
  //         if (sortA < sortB) return -1
  //         if (sortA > sortB) return 1
  //         return 0
  //       })
  //     }
  //     // Filter reqs by search term
  //     if (this.search) {
  //       this.filterUsers()
  //     }
  //     if (rowsPerPage > 0) {
  //       this.users = this.users.slice((page - 1) * rowsPerPage, page * rowsPerPage)
  //     }
  //   },
  //   filterUsers() {
  //     // Deep search of each request object
  //     return this.users.filter((obj) => (
  //       Object.values(obj)
  //         // Removes nulls and arrays and checks if each type is string
  //         .filter((v) => !!v && !Array.isArray(v) && typeof v === 'string')
  //         // Checks each remaining string in search is substring
  //         .some((e) => e.toLowerCase().includes(this.search.toLowerCase()))
  //     ))
  //   },
  //   getRowsPerPage() {
  //     let rowsPref = parseInt(localStorage.getItem(`${this.storagePrefix}userListRowsPerPage`))
  //     if (!rowsPref) {
  //       localStorage.setItem(`${this.storagePrefix}userListRowsPerPage`, '10')
  //       rowsPref = 10
  //     }
  //     this.pagination.rowsPerPage = rowsPref
  //   },
  //   updateRowsPerPage() {
  //     localStorage.setItem(`${this.storagePrefix}userListRowsPerPage`, this.pagination.rowsPerPage.toString())
  //   },
  //   completeAction() {
  //     this.updatePerson()
  //     this.selectedUsers = []
  //     this.actions.selected = ''
  //     this.closeDialog()
  //   },
  //   openDialog() {
  //     this.dialog = true
  //   },
  //   closeDialog() {
  //     this.dialog = false
  //     this.actions.selected = ''
  //   },
  //   updatePerson() {
  //     // const me = this
  //     // const promises = []
  //     // let promise
  //     // this.users.selected.forEach(u => {
  //     //   u = this.actOnUserData(u, this.actions.selected)
  //     //   promise = new Promise(function(resolve, reject) {
  //     //     return userApi.update(u)
  //     //       .catch((err) => {
  //     //         reject(err)
  //     //       })
  //     //   })
  //     //   promises.push(promise)
  //     // })
  //     // Promise.all(promises)
  //     //   .catch((error) => {
  //     //     me.showMessage(error)
  //     //   })
  //   },
  //   actOnUserData(user, action) {
  //     // action must be a method on the UserAPI
  //     this.userApi.user[action](user)
  //     user.change_comment = `${action} for ${user}`
  //     return user
  //   },
  //   isActionAvailableForAllUsers(action) {
  //     let flag = true
  //     this.users.selected.forEach((user) => {
  //       if (!action.condition(user)) {
  //         flag = false
  //       }
  //     })
  //     return flag
  //   },
  //   formatStateName(state, bool) {
  //     let name
  //     if (state === 'login') {
  //       name = bool ? 'Active' : 'Deactivated'
  //     } else if (state === 'account') {
  //       name = bool ? 'Enabled' : 'Disabled'
  //     }
  //     return name
  //   },
  //   ...mapActions(['showMessage'])
  // },
  // computed: {
  //   selectedFormattedUsers: () => Array.from(this.selectedUsers, (u) => u.full_name).toString().replace(/,/g, ', '),
  //   availableActions: () => {
  //     const availableActions = []
  //     this.actions.all.forEach((action) => {
  //       if (this.isActionAvailableForAllUsers(action)) {
  //         availableActions.push(action)
  //       }
  //     })
  //     return availableActions.length ? [...new Set(availableActions)] : ['There are no available actions for selected users.']
  //   },
  //   is_admin: () => this.auth.isAdmin(),
  //   username: () => this.auth.getUsername(),
  //   headers: () => {
  //     const h = [
  //       {
  //         text: 'First Name',
  //         align: 'left',
  //         value: 'first_name',
  //         sortable: true
  //       },
  //       {
  //         text: 'Last Name',
  //         align: 'left',
  //         value: 'last_name',
  //         sortable: true
  //       },
  //       {
  //         text: 'Full Name',
  //         align: 'left',
  //         value: 'full_name',
  //         sortable: true
  //       },
  //       { text: 'Primary email', value: 'primary_email', sortable: true },
  //       { text: 'NICE login', value: 'is_active', sortable: true }
  //     ]
  //     return h
  //   },
  //   computedHeaders() {
  //     return this.headers.filter(
  //       (h) => !h.hide || !this.$vuetify.breakpoint[h.hide]
  //     )
  //   },
  //   isActionSelectActive() {
  //     return this.selectedUsers.length === 0
  //   }
  // },
  // mounted() {
  //   this.getRowsPerPage()
  //   this.getUsers()
  //     .finally((this.loading = false))
  // },
  // watch: {
  //   pagination: {
  //     handler() {
  //       this.sortUsers()
  //       this.updateRowsPerPage()
  //     },
  //     deep: true
  //   },
  //   search: {
  //     handler() {
  //       this.sortUsers()
  //       localStorage.setItem(`${this.storagePrefix}UserListSearch`, this.search ? this.search : '')
  //     },
  //     deep: true
  //   },
  //   include_disabled: () => {
  //     this.getUsers(true)
  //       .finally((this.loading = false))
  //   }
  // }

});
// CONCATENATED MODULE: ./src/components/user/IFXUserList.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/user/IFXUserList.vue?vue&type=style&index=0&id=69feb9dd&lang=css&scoped=true
var IFXUserListvue_type_style_index_0_id_69feb9dd_lang_css_scoped_true = __webpack_require__("b2c0");

// CONCATENATED MODULE: ./src/components/user/IFXUserList.vue





IFXUserListvue_type_script_lang_js.render = IFXUserListvue_type_template_id_69feb9dd_scoped_true_render
IFXUserListvue_type_script_lang_js.__scopeId = "data-v-69feb9dd"

/* harmony default export */ var IFXUserList = (IFXUserListvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/main.js
// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import App from './App.vue'
// import { Request, AccountRequest, RequestAPI } from './request'
// import { UserAPI, User } from './user'
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

function install(Vue) {
  Vue.component('IFXUserList', IFXUserList);
} // export {
//   install,
//   // Request,
//   // RequestAPI,
//   // AccountRequest,
//   // User,
//   // UserAPI
// }
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (install);



/***/ })

/******/ });
//# sourceMappingURL=ifxvuser.common.js.map