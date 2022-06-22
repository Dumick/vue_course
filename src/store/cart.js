export default {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        inCart: state => id => state.cart.some(product => product.id == id),
        getCnt: state => state.cart.length
    },
    mutations: {
        add(state, id) {
            state.cart.push({ id, cnt: 1 })
        },
        remove(state, id) {
            state.cart = state.cart.filter(product => product.id !== id) 
        }
    },
    actions: {
        add({ commit }, id) {
            commit('add', id)
        },
        remove({ commit }, id) {
            commit('remove', id)
        }
    }
}