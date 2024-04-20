import axios from "axios";
import Swal from "sweetalert2";
const auth = {
  namespaced: true,
  state: {
    role: localStorage.getItem("role") || "",
    token: localStorage.getItem("token") || "",
    users: [],
    
  },
  getters: {
    isRole: (state) => !!state.role && state.role !== "",
    isAuthenticated: (state) => !!state.token && state.token !== "",
    getMe: (state) => state.users,
    // getUsersByRole: (state) => (role) => {
    //   return state.users.filter(user => user.role === role);
    // },
  
  },
  actions: {

    
    async login({ commit }, credentials) {
      try {
        const response = await axios.post("/api/v1/auth/login", credentials);
        const { token, role } = response.data; // Ambil token dan role dari respons server
    
        // Pastikan respons dari server mengandung token dan role
        if (token && role) {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
    
          commit("SET_ROLE", role);
          commit("SET_TOKEN", token);
    
          return { token, role }; // Kembalikan token dan role
        } else {
          // Jika respons tidak valid, lempar error
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        // Tangani kesalahan dari server
        const errorMessage = error.response.data.msg || "An error occurred during login";
        throw new Error(errorMessage);
      }
    },
    
    
    async fetchMe({ commit }) {
      try {

        // Ambil Bearer Token dari Local Storage
        const token = localStorage.getItem("token"); // Gantilah 'your_token_key' dengan kunci token Anda

        const response = await axios.get("/api/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const users = response.data;
        commit("SET_USER", users);

        return users;
      } catch (error) {
        console.error("Error fetching user data:", error.message);

      

        return false;
      }
    },
    async logout({ commit }) {
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      commit("SET_ROLE", "");
      commit("SET_TOKEN", "");
      return true;
    },

    async fetchAllUsers({ commit }) {
      try {
        const response = await axios.get("/api/v1/user");
        const users = response.data.rows;
        commit("SET_USER", users);
        return users;
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        return false;
      }
    },

    async deleteUser({ commit, dispatch }, id) {
      try {
          // Tampilkan SweetAlert2 untuk konfirmasi penghapusan
          const confirmResult = await Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
          });

          // Jika pengguna mengklik "Yes", maka hapus produk dari keranjang
          if (confirmResult.isConfirmed) {
              // Hapus produk dari keranjang
              const hapususer = await axios.delete(`/api/v1/user/${id}`,  {
                  // headers: {
                  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
                  // }
              });
              console.log(hapususer.data);

              Swal.fire(
                  'Deleted!',
                  'Your product has been deleted.',
                  'success'
              );
          } else {
              // Jika pengguna mengklik "Cancel", produk tidak dihapus dari keranjang
              Swal.fire(
                  'Cancelled',
                  'Your product is safe :)',
                  'error'
              );
          }
      } catch (error) {
          console.log(error);
      } finally {
          dispatch("auth/fetchAllUsers", null, { root: true });
      }
  },

    async register({ commit }, credentials) {
      try {
       
        const response = await axios.post("http://localhost:3000/api/v1/auth/register", credentials);

      } catch (error) {
        console.error("Error during registration:", error);
        return false;
      } 
      
    },
  },
  mutations: {
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER_LOGIN(state, auth) {
      state.users = auth;
    },
    SET_USER(state, auth) {
      state.users = auth;
    },
    
    
  },
};

export default auth;