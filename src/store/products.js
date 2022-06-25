export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        all: state => state.items,
        one: (state, getters) => id => getters.allWtithSale.find(item => item.id === id),
        allWtithSale: state => {
            return state.items.map(product => {
                let salePrice = +(product.price * (1 - product.discountPercentage / 100)).toFixed(2)
                return {...product, sale: salePrice}
            })
        }
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
            fetch('https://dummyjson.com/products?limit=9')
                .then(res => res.json())
                .then(json => commit('setItems', json.products))
        }
    }
}