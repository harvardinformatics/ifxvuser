
const getDefaultState = () => {
  return {
    isDialogOpen: false
  }
}

const state = getDefaultState()

const getters = {
  isDialogOpen: state => {
    return state.isDialogOpen
  }
}

const actions = {
  async openDialog(context, data) {
    if (data) await context.dispatch('loadRequest', data)
    await context.commit('openDialog')
  },
  closeDialog(context) {
    context.commit('close')
  }
}

const mutations = {
  openDialog(state) {
    state.isDialogOpen = true
  },
  close(state) {
    Object.assign(state, getDefaultState())
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}