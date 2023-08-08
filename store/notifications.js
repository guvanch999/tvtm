export const state = () => ({
  notifications: [],
  total: 0
})

export const getters = {
  get_notifications(state) {
    return state.notifications
  },
  get_total(state) {
    return state.total
  }
}

export const mutations = {
  SET_NOTIFICATIONS(state, list) {
    state.notifications = list
  },
  SET_TOTAL_COUNT(state, count) {
    state.total = count
  },
  UPDATE_NOTIFICATION(state, data) {
    state.notifications = state.notifications.map(x => x.id === data.id ? data : x)
  }
}

export const actions = {
  async loadNotifications({commit, rootGetters}, payload) {
    let token = rootGetters.get_auth_token
    let res = await this.$axios.$get('v1/admin/change-card-not/all', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: payload
    })
    commit("SET_NOTIFICATIONS", res.data)
    commit('SET_TOTAL_COUNT', res.total)
  },
  async updateNotStatus({commit, rootGetters}, {not_id, status}) {
    let token = rootGetters.get_auth_token
    let {data} = await this.$axios.$post('v1/admin/change-card-not/change-status/' + not_id, {
      status
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(data)
    commit('UPDATE_NOTIFICATION', data)
  },
  async makeIsShown({commit, rootGetters}, {not_id}) {
    let token = rootGetters.get_auth_token
    await this.$axios.$get('v1/admin/change-card-not/make-is-shown/' + not_id)
  }
}
