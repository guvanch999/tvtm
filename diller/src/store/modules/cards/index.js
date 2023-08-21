import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      cards: [],
      total: 0,
      card_information: null,
      history: [],
      change: null,
      status: [],
    };
  },
  mutations,
  actions,
  getters,
};
