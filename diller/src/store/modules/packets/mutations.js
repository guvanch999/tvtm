export default {
    SET_PACKETS(state, list) {
        state.packets =[ ...list];
        console.log(state.packets)
    },
};
