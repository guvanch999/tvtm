export const state = () => ({
  history_list: [],
  total: 0
})

export const getters = {
  get_history_list(state) {
    return state.history_list
  },
  get_total_count(state) {
    return state.total
  }
}

export const mutations = {
  SET_HISTORY_LIST(state, list) {
    state.history_list = list
  },
  SET_TOTAL_COUNT(state, count) {
    state.total = count
  }
}

export const actions = {
  async loadHistory({commit, rootGetters}, {diller_id, page}) {
    let token = rootGetters.get_auth_token
    await this.$axios.$get('v1/admin/dillers/balance-history/' + diller_id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      commit("SET_HISTORY_LIST", res.data)
      commit("SET_TOTAL_COUNT", res.total)
    }).catch(err => {
      commit("SET_HISTORY_LIST", 0)
      commit("SET_TOTAL_COUNT", 0)
    })
  }
}
