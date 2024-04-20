import axios from "axios";

const document = {
  namespaced: true,
  state: {
    document: [],
  },
  getters: {
    getDocument: (state) => state.document,
  },
  actions: {
    async fetchDocument({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/documents");
        commit("SET_DOCUMENT", response.data.rows);
        return response.data.rows;
      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat mengambil data.");
      }
    },
    async addDocument({ commit }, documentData) {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/documents", documentData);
        return response.data

      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat menambahkan folder.");
      }
    },
  },
  mutations: {
    SET_DOCUMENT(state, document) {
      state.document = document;
    },
    ADD_DOCUMENT(state, document) {
      state.document.push(document); 
    },
  },
};

export default document;
