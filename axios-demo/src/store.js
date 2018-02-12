import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    }
  },
  actions: {
    signup({ commit }, authData) {
      const API_KEY = 'AIzaSyB3y9t_2TIPq59zmrTdbkV13Y6ZrhBnEgw'
      axios.post('/signupNewUser?key=' + API_KEY, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => console.log(error))
    },
    login({ commit }, authData) {
      const API_KEY = 'AIzaSyB3y9t_2TIPq59zmrTdbkV13Y6ZrhBnEgw'
      axios.post('/verifyPassword?key=' + API_KEY, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => console.log(error))
    }
  },
  getters: {

  }
})
