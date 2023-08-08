export const state = () => ({
  auth_token: null,
  phone_regex: /^[\+]?[(]?993[)]?6[1-5]{1}[0-9]{6}$/,
  error: null,
  statusSettings:{
    PENDING:{
      label:'Garashylyar',
      color:'#054bcb',
      bg_color:'#c2d6fc'
    },
    ACCEPTED:{
      label:'Yerine yetirildi',
      color:'#00921b',
      bg_color:'#d2f8bc'
    },
    DECLINED:{
      label:'Yatyryldy',
      color:'#cb0505',
      bg_color:'#ffcfcf'
    },
  }
})

export const getters = {
  get_auth_token(state) {
    return state.auth_token || localStorage['atn']
  },
  get_phone_regex(state) {
    return state.phone_regex
  },
  get_error(state) {
    return state.error
  },
  get_status_colors(state){
    return state.statusSettings
  }
}

export const mutations = {
  SET_AUTH_TOKEN(state, token) {
    state.auth_token = token
    if (token) {
      localStorage.setItem("atn", token)
    } else {
      localStorage.removeItem('atn')
    }
  },
  set_error(state, message) {
    state.error = message
  }
}

export const actions = {
  async login({commit}, data) {
    return await this.$axios.$post('v1/admin/login', data)
      .then(res => {
        commit("SET_AUTH_TOKEN", res.token.token)
        return true
      }).catch(err => {
        console.log(err)
        return false
      })
  }
}
