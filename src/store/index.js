import { createStore } from 'vuex'
  import axios from 'axios'
  export default createStore({
    state: {
      products: [],
      category: []
    },
    getters: {
      getProducts: (state) => state.products,
      getCategory: (state) => state.category
    },
    actions: {
      async fetchProduct({
        commit
      }) {
        try {
          const dataProduct =
            await axios.get("https://fakestoreapi.com/products")
          commit('SET_PRODUCTS', dataProduct.data)
        } catch (error) {
          alert('Ada Error')
          console.log(error)
        }
      },
      async fetchCategorys({
        commit
      }) {
        try {
          const dataCategory =
            await axios.get("https://fakestoreapi.com/categorys")
          commit('SET_CATEGORYS', dataCategory.data)
        } catch (error) {
          alert('Ada Error')
          console.log(error)
        }
      }
    },
    mutations: {
      SET_PRODUCTS(state, products){
        state.products = products
      },
      SET_CATEGORYS(state, categorys){
        state.categorys = categorys
      }
    }
  })