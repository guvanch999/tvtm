import axios from "../../../utils/axios";

export default {
  async userRegister(_, registerData) {
    await axios
      .post("v1/diller/register", registerData)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  },

  async userLogin({ commit }, loginData) {
    const { data } = await axios.post("v1/diller/login", loginData);
    commit("SET_AUTH_TOKEN", data.token.token);
  },
  async loadMyDetail({ commit, rootGetters }) {
    let token = rootGetters["auth/get_auth_token"];
    const { data } = await axios.get("v1/diller/my-detail", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    commit("SET_MY_DETAIL", data.data);
  },
  async updateMyDetail({ commit, rootGetters }, body) {
    let token = rootGetters["auth/get_auth_token"];
    let { data } = await axios.post("v1/diller/update-my-detail", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    commit("SET_MY_DETAIL", data.data);
  },
  async deleteToken({ commit }) {
    commit("DELETE_TOKEN");
  },
};
