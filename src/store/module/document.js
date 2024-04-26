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
        const response = await axios.get("http://localhost:8080/api/v1/documents");
        commit("SET_DOCUMENT", response.data.rows);
        return response.data.rows;
      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat mengambil data.");
      }
    },
    async addData({ commit }, formData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/documents", formData);
        return response.data

      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat menambahkan folder.");
      }
    },

    async updateData({ commit }, updateData) {
      try {
        await axios.put(`http://localhost:8080/api/v1/folders/${folderData.id}`, updateData);
        return response.data
       
      } catch (error) {
        throw error; // Mengembalikan error untuk ditangani oleh komponen
      }
    },
  },
  mutations: {
    SET_DOCUMENT(state, document) {
      state.document = document;
    },
  },
};

export default document;
