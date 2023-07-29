export default {
  get_auth_token(state) {
    return state.token || localStorage["token"];
  },
  get_my_detail(state) {
    return state.my_detail;
  },
  isAuthorized(state) {
    return state.token;
  },
};
