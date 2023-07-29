import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      token: null,
      my_detail:null
    };
  },
  mutations,
  actions,
  getters,
};
