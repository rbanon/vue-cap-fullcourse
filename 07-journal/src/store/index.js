import { createStore } from "vuex";
import journal from "@/modules/daybook/store/journal";

export default createStore({
  modules: {
    journal,
  },
});
