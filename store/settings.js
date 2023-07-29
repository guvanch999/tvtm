export const state = () => ({
  remoteAuthDetail: null
})

export const getters = {
  get_remote_auth_detail(state) {
    return state.remoteAuthDetail
  }
}

export const mutations = {
  SET_REMOTE_DETAIL(state, data) {
    state.remoteAuthDetail = data
  }
}

export const actions = {
  async load_remote_auth_detail({commit, rootGetters}) {
    let token = rootGetters.get_auth_token
    let data = await this.$axios.$get('v1/admin/settings/remote-access-detail', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    commit("SET_REMOTE_DETAIL", data.data)
  },
  async update_remote_detail({commit, rootGetters}, body) {
    let token = rootGetters.get_auth_token
    let data = await this.$axios.$post('v1/admin/settings/update-access-detail', body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    commit("SET_REMOTE_DETAIL",data.data)
  }
}
