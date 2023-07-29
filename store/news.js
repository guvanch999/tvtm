export const state = () => ({
  news: [],
  total: 0
})

export const getters = {
  get_news_list(state) {
    return state.news
  },
  get_total_count(state) {
    return state.total
  }
}

export const mutations = {
  SET_NEWS_LIST(state, list) {
    state.news = list
  },
  UPDATE_NEWS_DATA(state, data) {
    state.news = state.news.map(x => x.id === data.id ? data : x)
  },
  SET_TOTAL_COUNT(state, count) {
    state.total = count
  }
}

export const actions = {
  async loadAllNews({commit, rootGetters}, {page}) {
    let token = rootGetters.get_auth_token
    await this.$axios.$get('v1/admin/news/all', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        page
      }
    }).then(res => {
      commit("SET_TOTAL_COUNT", res.total)
      commit("SET_NEWS_LIST", res.data)
    }).catch(err => {
      console.log(err)
      commit("SET_TOTAL_COUNT", 0)
      commit("SET_NEWS_LIST", [])
    })
  },
  async createNews({commit, rootGetters}, data) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$post('v1/admin/news/create', data, {
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
  async updateNews({commit, rootGetters}, {news_id, data}) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$put('v1/admin/news/update/' + news_id, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      commit("UPDATE_NEWS_DATA", res.data)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  async removeNews({commit, rootGetters}, news_id) {
    let token = rootGetters.get_auth_token
    return await this.$axios.$delete('v1/admin/news/delete/' + news_id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  }
}
