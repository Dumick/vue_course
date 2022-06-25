export default {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        getCnt: state => state.cart.length,
        one: state => id => state.cart.find(item => item.id === id),
        inCart: state => id => state.cart.some(product => product.id == id),
        cartDetails: (state, getters, rootState, rootGetters) => {
            return state.cart.map(item => {
                let product = rootGetters['products/one'](item.id)

                let total = 0
                if (product.discountPercentage !== 0)
                    total = product.price * item.cnt
                else {
                    total = product.sale * item.cnt
                }

                return { ...product, cnt: item.cnt, total }
            })
        },
        totalPrice: (state, getters) => getters.cartDetails.reduce((total, item) => total + item.total, 0)
    },
    mutations: {
        addInCart(state, id) {
            state.cart.push({ id, cnt: 1 })
        },
        removeInCart(state, id) {
            state.cart = state.cart.filter(product => product.id !== id)
        },
        setCnt(state, { id, cnt }) {
            let item = state.cart.find(item => item.id == id);
            item.cnt = cnt;
        }
    },
    actions: {
        productInCart({ commit, getters }, { id, cnt }) {
            let item = getters.cartDetails.find(item => item.id == id);
            let validCnt = Math.min(Math.max(cnt, 1), item.stock);
            commit('setCnt', { id, cnt: validCnt });
        },
        add({ commit }, id) {
            commit('addInCart', id)
        },
        remove({ commit }, id) {
            commit('removeInCart', id)
        }
    }
}