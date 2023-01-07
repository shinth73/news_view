import {createStore} from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

const store = createStore({
        state: {
            news: [],
            ask: [],
            jobs: [],
            user: {},
            item: []
        },
        getters: {
            fetchedAsk(state) {
                return state.ask;
            },
            fetchedItem(state) {
                return state.item;
            },
        },
        actions,
        mutations,
    },
);

export default store;