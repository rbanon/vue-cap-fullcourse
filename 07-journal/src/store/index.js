import { createStore } from "vuex";
import journal from "@/modules/daybook/store/journal";
import auth from "@/modules/auth/store";

export default createStore({
  modules: {
    auth,
    journal,
  },
});
