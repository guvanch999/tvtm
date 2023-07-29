import axios from "@/utils/axios";

export default {
    async loadPackets({commit, rootGetters}) {
        const token = rootGetters["auth/get_auth_token"];
        const {data} = await axios.get("v1/diller/cards/packets", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        commit("SET_PACKETS", data.data);
    },
};
