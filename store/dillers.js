export const state = () => ({
  dillers: [],
  total: 0
})

export const getters = {
  get_dillers_list(state) {
    return state.dillers
  },
  get_total_count(state) {
    return state.total
  }
}

export const mutations = {
  SET_DILLERS_LIST(state, list) {
    state.dillers = list
  },
  UPDATE_DILLER_DATA(state, data) {
    state.dillers = state.dillers.map(x => x.id === data.id ? data : x)
  },
  SET_TOTAL_COUNT(state, count) {
    state.total = count
  }
}

export const actions = {
  async loadAllDillers({commit, rootGetters}, {page}) {
    let token = rootGetters.get_auth_token
    await this.$axios.$get('v1/admin/dillers/all', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        page
      }
    }).then(res => {
      console.log(res)
      commit("SET_DILLERS_LIST", res.data)
      commit("SET_TOTAL_COUNT", res.total)
    }).catch(err => {
      console.log(err)
    })
  },
  async createDiller({commit, rootGetters}, data) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$post('v1/admin/dillers/create', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  async updateDiller({commit, rootGetters}, {diller_id, data}) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$put('v1/admin/dillers/update/' + diller_id, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      commit("UPDATE_DILLER_DATA", res.data)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  async removeDiller({commit, rootGetters}, diller_id) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$delete('v1/admin/dillers/delete/' + diller_id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      return true
    }).catch(err => {
      return false
    })
  },
  async updateBalance({commit, rootGetters}, {diller_id, summ}) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$post('v1/admin/dillers/update-balance/' + diller_id, {summ}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      commit('UPDATE_DILLER_DATA', res.data)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  }
}
