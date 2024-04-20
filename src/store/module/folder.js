import axios from "axios";

const folder = {
  namespaced: true,
  state: {
    folderData: [],
  },
  getters: {
    getFolder: (state) => state.folderData,
  },
  actions: {
    async fetchFolder({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/folders");
        commit("SET_FOLDER", response.data);
        return response.data
      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat mengambil data folder.");
      }
    },
    async addFolder({ commit }, folderData) {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/folders", folderData);
        return response.data

      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat menambahkan folder.");
      }
    },
    async updateFolder({ commit }, folderData) {
      try {
        await axios.put(`http://localhost:3000/api/v1/folders/${folderData.id}`, folderData);
        return response.data
       
      } catch (error) {
        throw error; // Mengembalikan error untuk ditangani oleh komponen
      }
    },
    async deleteFolder({ commit }, folderId) {
      try {
        await axios.delete(`http://localhost:3000/api/v1/folders/${folderId}`);
        return response.data
        
      } catch (error) {
        throw error; // Mengembalikan error untuk ditangani oleh komponen
      }
    },
    
  },
  mutations: {
    SET_FOLDER(state, folder) {
      state.folderData = folder;
    },
    ADD_FOLDER(state, folder) {
      state.folderData.push(folder);
    },
    EDIT_FOLDER(state, editedFolder) {
      const index = state.folderData.findIndex(folder => folder.id === editedFolder.id);
      if (index !== -1) {
        state.folderData.splice(index, 1, editedfolder);
      }
    },
    DELETE_FOLDER(state, folderId) {
      state.folderData = state.folderData.filter(folder => folder.id !== folderId);
    },
  },
};

export default folder;
