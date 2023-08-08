export const state = () => ({
  logs: [],
  total: 0
})

export const getters = {
  get_logs(state) {
    return state.logs
  },
  get_total(state) {
    return state.logs
  }
}

export const mutations = {
  SET_LOGS_LIST(state, list) {
    state.logs = list.map(log => {
      let logTemp = Object.assign({}, log)
      if (logTemp.diller) {
        logTemp.diller = JSON.parse(logTemp.diller)
        logTemp.client = JSON.parse(logTemp.client)
      }
      return logTemp
    })
  },
  SET_TOTAL_COUNT(state, count) {
    state.total = count
  }
}

export const actions = {
  async loadLogs({commit, rootGetters}, payload) {
    let token = rootGetters.get_auth_token
    let data = await this.$axios.$get('v1/admin/logs/all', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: payload
    })
    commit("SET_LOGS_LIST", data.data)
    commit('SET_TOTAL_COUNT', data.total)
  }
}
