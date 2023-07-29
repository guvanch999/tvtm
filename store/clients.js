export const state = () => ({
  clients: [],
  total: 0,
  clientDetail: null
})

export const getters = {
  get_clients_list(state) {
    return state.clients
  },
  get_total_count(state) {
    return state.total
  },
  get_client_detail(state) {
    return state.clientDetail
  }
}

export const mutations = {
  SET_CLIENTS_LIST(state, list) {
    state.clients = list
  },
  UPDATE_CLIENT_DETAIL(state, data) {
    state.clients = state.clients.map(x => x.id === data ? data : x)
  },
  SET_TOTAL_COUNT(state, total) {
    state.total = total
  },
  SET_CLIENT_DETAIL(state, data) {
    state.clientDetail = data
  }
}

export const actions = {
  async loadAllClients({commit, rootGetters}, {page, diller_id = 0}) {
    let token = rootGetters.get_auth_token

    await this.$axios.$get('v1/admin/clients/all', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        page,
        diller_id
      }
    }).then(res => {
      commit("SET_CLIENTS_LIST", res.data)
      commit("SET_TOTAL_COUNT", res.total)
    }).catch(err => {
      console.log(err)
      commit("SET_CLIENTS_LIST", [])
      commit("SET_TOTAL_COUNT", 0)
    })
  },
  async creteClient({commit, rootGetters}, data) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$post('v1/admin/clients/create', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      return true
    }).catch(err => {
      return false
    })
  },
  async updateClientDetail({commit, rootGetters}, {client_id, data}) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$put('v1/admin/clients/update' + client_id, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      commit("SET_CLIENTS_LIST", res.data)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  async deleteClient({commit, rootGetters}, client_id) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$delete('v1/admin/clients/delete/' + client_id, {
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
  async getClientDetail({commit, rootGetters}, client_id) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$get('v1/admin/clients/client-detail/' + client_id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      commit("SET_CLIENT_DETAIL", res.data)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  }
}
