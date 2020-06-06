import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  username: '',
  userId: ''
})

export const getters = {
  isLoggedIn: (state) => state.status === 'loggedIn'
}

export const actions = {
  gotUser({ commit }, user) {
    commit('setUser', user)
  },
  logout({ commit }) {
    auth.signOut().then(() => {
      commit('logout')
    })
  }
}

export const mutations = {
  setUser(state, user) {
    state.status = 'loggedIn'
    state.username = user.displayName
    state.userId = user.uid
  },
  logout(state) {
    state.status = 'loggedOut'
    state.username = ''
    state.userId = ''
  }
}
