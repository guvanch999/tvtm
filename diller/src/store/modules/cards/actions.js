import axios from "@/utils/axios";

export default {
    async loadCards({commit, rootGetters}, {page, limit, query}) {
        let token = rootGetters["auth/get_auth_token"];
        let {data} = await axios.get("v1/diller/cards/all", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                page,
                limit,
                query,
            },
        });
        commit("SET_CARD_LIST", data.data);
        commit("SET_TOTAL_COUNT", data.total);
    },
    async createCard({commit, rootGetters}, form) {
        let token = rootGetters['auth/get_auth_token']
        let {data} = await axios.post('v1/diller/cards/create', form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        commit('auth/SET_NEW_BALANS', data.balans, {root: true})

    },
    async loadCardInformation({commit, rootGetters}, {card_number}) {
        let token = rootGetters["auth/get_auth_token"];
        let {data} = await axios.get(
            "v1/diller/cards/card-information/" + card_number,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        commit("SET_CARD_INFORMATION", data.data);
    },
    async updateCardDetail({commit, rootGetters}, {card_id, card}) {
        let token = rootGetters["auth/get_auth_token"];
        let {data} = await axios.put("v1/diller/cards/update/" + card_id, card, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        commit("SET_CARD_INFORMATION", data.data);
    },
    async reactivateCard({rootGetters}, {card_id}) {
        let token = rootGetters["auth/get_auth_token"];
        await axios.get("v1/diller/cards/reactivate-card/" + card_id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    async loadCardSubscriptionHistory(
        {commit, rootGetters},
        {card_id, page, limit}
    ) {
        let token = rootGetters["auth/get_auth_token"];
        let {data} = await axios.get(
            "v1/diller/histories/subscription-history/" + card_id,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    page,
                    limit,
                },
            }
        );
        commit("SET_HISTORY_LIST", data.data);
        commit("SET_TOTAL_COUNT", data.total);
    },
    async loadCardActivityHistory(
        {commit, rootGetters},
        {card_id, page, limit}
    ) {
        let token = rootGetters["auth/get_auth_token"];
        let {data} = await axios.get(
            "v1/diller/histories/activity-history/" + card_id,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    page,
                    limit,
                },
            }
        );
        commit("SET_HISTORY_LIST", data.data);
        commit("SET_TOTAL_COUNT", data.total);
    },
    async buyOrExtend({commit, rootGetters}, {card_id, body}) {
        let token = rootGetters["auth/get_auth_token"];
        let {data} = await axios.post("v1/diller/cards/buy-or-extend/" + card_id, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        commit('auth/SET_NEW_BALANS', data.balans, {root: true})
        commit('cards/SET_PACKET_INFORMATION', data.data, {root: true})
    },
};
