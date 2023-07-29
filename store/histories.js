export const state = () => ({
  activity_histories: [],
  subscription_histories: [],
  total: 0
})

export const getters = {
  get_activity_history(state) {
    return state.activity_histories
  },
  get_subscription_history(state) {
    return state.subscription_histories
  },
  get_total_count(state) {
    return state.total
  }
}

export const mutations = {
  SET_ACTIVITY_HISTORY(state, list) {
    state.activity_histories = list
  },
  SET_SUBSCRIPTION_HISTORY(state, list) {
    state.subscription_histories = list
  },
  SET_TOTAL_COUNT(state, count) {
    state.total = count
  }
}

export const actions = {
  async loadActivityHistory({commit, rootGetters}, {page, client_id}) {
    let token = rootGetters.get_auth_token
    await this.$axios.$get('v1/admin/clients/activity-history/' + client_id, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        page
      }
    }).then(res => {
      commit('SET_ACTIVITY_HISTORY', res.data)
      commit("SET_TOTAL_COUNT", res.total)
    }).catch(err => {
      console.log(err)
      commit('SET_ACTIVITY_HISTORY', [])
      commit("SET_TOTAL_COUNT", [])
    })
  },
  async loadSubscriptionHistory({commit, rootGetters}, {page, client_id}) {
    let token = rootGetters.get_auth_token
    await this.$axios.$get('v1/admin/clients/subscription-history/' + client_id, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        page
      }
    }).then(res => {
      commit("SET_SUBSCRIPTION_HISTORY", res.data)
      commit("SET_TOTAL_COUNT", res.total)
    }).catch(err => {
      console.log(err)
      commit("SET_SUBSCRIPTION_HISTORY", [])
      commit("SET_TOTAL_COUNT", [])
    })
  }
}
