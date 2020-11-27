import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://coinzz.herokuapp.com/api/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            // eslint-disable-next-line no-console
            const token = resp.data.data.token;
            const user = resp.data.data.id;
            const email = resp.data.data.email;
            const firstname = resp.data.data.first_name;
            const lastname = resp.data.data.last_name;
            const phone = resp.data.data.phone;

            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            localStorage.setItem("email", email);
            localStorage.setItem("firstname", firstname);
            localStorage.setItem("lastname", lastname);
            localStorage.setItem("phone", phone);

            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    forgotPassword({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://coinzz.herokuapp.com/api/forgot/password",
          data: user,
          method: "POST"
        })
          .then(resp => {
            console.log(resp);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://coinzz.herokuapp.com/api/create/account",
          data: user,
          method: "POST"
        })
          .then(resp => {
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    checkCode({ commit }, code) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://coinzz.herokuapp.com/api/check/code",
          data: code,
          method: "POST"
        })
          .then(resp => {
            console.log(resp);
            resolve(resp);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    changePassword({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://coinzz.herokuapp.com/api/web/password",
          data: data,
          method: "POST"
        })
          .then(resp => {
            console.log(resp);
            resolve(resp);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    verify({ commit }, code) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://coinzz.herokuapp.com/api/verify",
          data: code,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.data.tokenize;
            const user = resp.data.data.id;
            const firstname = resp.data.data.first_name;
            const lastname = resp.data.data.last_name;
            const email = resp.data.data.email;
            localStorage.setItem("token", token);
            localStorage.setItem("firstname", firstname);
            localStorage.setItem("lastname", lastname);
            localStorage.setItem("email", email);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    logout({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
