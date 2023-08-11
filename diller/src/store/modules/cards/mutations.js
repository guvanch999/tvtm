export default {
  SET_CARD_LIST(state, list) {
    state.cards = list;
  },
  SET_TOTAL_COUNT(state, count) {
    state.total = count;
  },
  SET_CARD_INFORMATION(state, card) {
    state.card_information = card;
  },
  SET_HISTORY_LIST(state, list) {
    state.history = list;
  },
  SET_PACKET_INFORMATION(state, data) {
    let detail = Object.assign({}, state.card_information);
    detail.packet = data.packet;
    detail.srok = data.srok;
    state.card_information = detail;
  },
  SET_CHANGE_INFORMATION(state, data) {
    state.change = data;
  },
};
