import { createStore } from "vuex";
import dashboardModule from "./modules/dashboard/index.js";
import cardsModule from "./modules/cards/index.js";
import authModule from "./modules/auth/index.js";
import balanceModule from "./modules/balance/index";
import packetsModule from "./modules/packets/index.js";

const store = createStore({
  state() {
    return {
      phone_regex: /^[+]?[(]?993[)]?6[1-5][0-9]{6}$/,
      error: false,
    };
  },
  getters: {
    get_phone_regex(state) {
      return state.phone_regex;
    },
    get_error(state) {
      return state.error;
    },
  },
  mutations: {
    set_error(state, error) {
      state.error = error;
    },
  },
  modules: {
    dashboard: dashboardModule,
    cards: cardsModule,
    auth: authModule,
    balance: balanceModule,
    packets: packetsModule,
  },
});
store.commit("auth/TOKEN_RESET");
export default store;
