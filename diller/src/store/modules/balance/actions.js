import axios from "@/utils/axios";

export default {
    async loadBalanceHistory({commit, rootGetters}, {page, limit, query}) {
        let token = rootGetters['auth/get_auth_token']
        let {data} = await axios.get('v1/diller/balance/history', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                page,
                limit,
                query
            }
        })
        commit("SET_HISTORY_LIST", data.data)
        commit("SET_TOTAL_COUNT", data.total)
    }
}
