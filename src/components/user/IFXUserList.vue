<script>
// import { mapActions } from 'vuex'

export default {
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
  data() {
    return {
      // search: localStorage.getItem(`${this.storagePrefix}UserListSearch`) || '',
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
    }
  }
  // methods: {
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
}
</script>
<template>
  <div></div>
  <!-- <v-container grid-list-md>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Confirm User Action</v-card-title>
        <v-card-text>
          <div>
            <strong>Action:</strong>
            {{this.actions.selected}}
          </div>
          <div>
            <strong>Users:</strong>
            {{electedFormattedUsers}}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="closeDialog">Cancel</v-btn>
          <v-btn color="primary" text @click="completeAction">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout row>
      <v-flex xs12>
        <v-card class="test">
          <v-card-title>
            <v-layout row align-center justify-start>
              <v-flex xs2>
                <span class="headline">Users</span>
              </v-flex>
              <v-flex xs5>
                <v-text-field
                  v-model="search"
                  label="Search"
                  single-line
                  hide-details
                  clearable
                >
                </v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex grow>
                <v-layout column justify-end>
                  <v-flex>
                    <v-select
                      :items="availableActions"
                      item-text="name"
                      item-value="method"
                      v-model="actions.selected"
                      @change="openDialog"
                      label="Actions"
                      hint="Select"
                      :disabled="isActionSelectActive"
                    ></v-select>
                  </v-flex>
                  <v-flex>
                    <v-checkbox label="Include disabled" v-model="include_disabled"></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-data-table
            :headers="computedHeaders"
            :items="users"
            item-key="username"
            :loading="loading"
            v-model="selectedUsers"
            show-select
            class="elevation-1"
            :footer-props="{
              itemsPerPageOptions: usersPerPageItems
            }"
          >
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="no-data">
              <span class="no-data">No users returned</span>
            </template>
            <template slot="items" slot-scope="props">
              <tr :class="userStyle(props.item)">
                <td>
                  <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
                </td>
                <td>
                  <router-link
                    :to="{name: 'UserEdit', params: {username: props.item.username}}"
                  >
                    {{props.item.first_name}}
                  </router-link>
                </td>
                <td>
                    {{props.item.last_name}}
                </td>
                <td class="full-name">
                  {{props.item.full_name}}
                </td>
                <td>
                  <a :href="`mailto:${props.item.primary_email}`">
                    {{props.item.primary_email}}
                  </a>
                </td>
                <td>
                  <v-icon color="green" v-if="props.item.is_active">vpn_key</v-icon>
                  <v-icon color="green" v-else>close</v-icon>
               </td>
              </tr>
            </template>
            <v-alert id="no-results"
              slot="no-results"
              :value="true"
              color="error"
              icon="warning"
            >Your search found no results.</v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>

<style lang="css" scoped>
  /* .v-text-field__details {
    display: none !important;
  }

  .v-select-list > .v-list {
    padding: 0;
  }

  .v-select-list > .v-list__tile {
    border-bottom: 1px red solid;
  }

  .v-select-list {
    padding: 0;
  }

  td {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */
</style>
