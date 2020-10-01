import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router";

/**
 * Services
 */
import AuthService from "../services/authService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  mutations: {
    SAVE(state, event) {
      console.log(event);
      state.user = event.data.user;
      localStorage.setItem("token", event.data.token);
      localStorage.setItem("user", JSON.stringify(event.data.user));
    },
    DESTROY(state, event) {
      state.user = null;
      location.href = "/";
    },
    SAVE_USER(state) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(event.data.user));
    },
  },
  actions: {
    // funcion para iniciar sesion
    login({ commit, dispatch }, event) {
      return AuthService.login(event)
        .then((resp) => {
          console.log(resp);
          commit("SAVE", resp.data);
          // router.push("/");
          location.href="/";
          //dispatch('notification/add', notification, { root: true })
        })
        .catch((error) => {
          throw error;
        });
    },

    // funcion para registrar
    register({ commit, dispatch }, data) {
      return AuthService.register(data)
        .then((resp) => {
          console.log("resp en el store", resp);
          commit("SAVE", resp.data);
          // router.push("/");
          location.href = "/";
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });
    },

    // funcion para registrar
    me({ commit, dispatch }, data) {
      return AuthService.me()
        .then((resp) => {
          console.log("resp en el store", resp);
          commit("SAVE_USER", resp.data);
          // router.push("/");
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });
    },

    getUser({ commit, dispatch }, data) {
      commit("SAVE_USER");
    },

    logout({ commit, dispatch }, data) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      commit("DESTROY");
      return true;
    },
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    isLogin: () => {
      // return localStorage.getItem("token") != null;
      return (localStorage.getItem("token")) ? true: false;
    },
  },
  modules: {},
});
