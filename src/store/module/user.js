import axios from "axios";

const user = {
  namespaced: true,
  state: {
    user: [],
  },
  getters: {
    getUsersByRole: (state) => state.user,
  },
  actions: {
    async fetchAllUsers({ commit }) {
      try {
        const response = await axios.get("/api/v1/user");
        const user = response.rows.data;
        commit("SET_USER", users);
        return user;
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        return false;
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
};

export default user;
