export const state = () => ({
  packets: []
})

export const getters = {
  get_packets(state) {
    return state.packets
  }
}

export const mutations = {
  SET_TOTAL_COUNT_PACKETS(state, list) {
    state.packets = list
  }
}

export const actions = {
  async loadPackets({commit, rootGetters}) {
    let token = rootGetters.get_auth_token
    let data = await this.$axios.$get('v1/admin/packets/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    commit("SET_TOTAL_COUNT_PACKETS", data.data)
  },
  async syncPackets({commit,rootGetters}){
    let token = rootGetters.get_auth_token
    let data = await this.$axios.$get('v1/admin/packets/sync',{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    commit("SET_TOTAL_COUNT_PACKETS",data.data)
  }
}
