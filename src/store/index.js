import {createStore, createLogger} from 'vuex';
import {goodsStore} from './modules/goodsStore';

const store = createStore({
    plugins:[createLogger()],
    modules: {
        goodsStore,
    }
})

export default store;
