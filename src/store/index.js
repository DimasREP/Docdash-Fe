import { createStore } from "vuex";
import auth from "./module/auth/auth.js";
import folder from "./module/folder.js";
import document from "./module/document.js";



const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
   auth,
   folder,
   document
  },
});

export default store;