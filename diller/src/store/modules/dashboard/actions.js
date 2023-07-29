import axios from "@/utils/axios";

export default {
  async loadNews({ commit, rootGetters }, { page, limit }) {
    let token = rootGetters["auth/get_auth_token"];
    let { data } = await axios.get("v1/diller/news/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        limit,
      },
    });
    commit("SET_NEWS", data.data);
    commit("SET_TOTAL_COUNT", data.total);
  },
};
