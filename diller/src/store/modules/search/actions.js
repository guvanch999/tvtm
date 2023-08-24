import axios from "@/utils/axios";

export default {
  async getInfo({ commit, rootGetters }, { card_id }) {
    let token = rootGetters["auth/get_auth_token"];
    let data = await axios.get("v1/diller/cards/search/" + card_id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("SET_INFO", data.data);
  },

  async buyPacket({ commit, rootGetters }, { body }) {
    let token = rootGetters["auth/get_auth_token"];
    let data = await axios.post("v1/diller/cards/buy-packet/", body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("BUY_PACKET", data.data);
  },
};
