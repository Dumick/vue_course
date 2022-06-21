export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        all: state => state.items,
        one: state => id => state.items.find(item => item.id === id),
    },
    mutations: {
        setItems(state, products) {
            state.items = products;
        }
    },
    actions: {
        /* async load({ commit }) {
            let response = await fetch('https://dummyjson.com/products');
            let products = await response.json();
            commit('setItems', products.products);
        } */
        load({ commit }) {
            fetch('https://dummyjson.com/products?limit=10')
                .then(res => res.json())
                .then(json => commit('setItems', json.products))
        }
    }
}