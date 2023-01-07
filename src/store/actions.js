import api from "@/api/api";

export default {
    async FETCH_NEWS({commit}) {
        commit('SET_NEWS', await api.fetchNewsList());
    },
    async FETCH_ASK({commit}) {
        commit('SET_ASK', await api.fetchAskList());
    },
    async FETCH_JOBS({commit}) {
        commit('SET_JOBS', await api.fetchJobsList());
    },
    async FETCH_USER({commit}, user) {
        commit('SET_USER', await api.fetchUserInfo(user));
    },
    async FETCH_ASK_ITEM({commit}, user) {
        commit('SET_ITEM', await api.fetchItem(user));
    },
};