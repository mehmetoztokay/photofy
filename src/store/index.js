import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";

var ls = new SecureLS({ isCompression: false });

const store = createStore({
  state: {
    user: null,
    saltKey: "photofy123*=.,$%@#",
  },
  getters: {
    _getSaltKey(state) {
      return state.saltKey;
    },
    _isAuthenticated(state) {
      return state.user != null;
    },
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});

export default store;
