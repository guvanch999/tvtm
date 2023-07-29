export default {
    SET_AUTH_TOKEN(state, token) {
        state.token = token;
        if (token) {
            localStorage["token"] = token;
        } else {
            localStorage.removeItem("token");
        }
    },
    SET_MY_DETAIL(state, detail) {
        state.my_detail = detail;
    },
    TOKEN_RESET(state) {
        if (!state.token && localStorage["token"]) {
            state.token = localStorage["token"];
        }
    },
    DELETE_TOKEN(state) {
        (state.token = null), localStorage.removeItem("token");
    },
    SET_NEW_BALANS(state, count) {
        let detail = Object.assign({}, state.my_detail)
        detail.balans.summ = count
        state.my_detail = detail
    },

};
