import { createStore } from "vuex";
import auth from "./module/auth/auth.js";
import user from "./module/user.js";


const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
   user
  },
});

export default store;