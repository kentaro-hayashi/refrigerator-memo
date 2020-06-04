import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/plugins/firebase'

export const state = {
  items: []
}

export const mutations = {
  ...vuexfireMutations
}

export const getters = {
  getItemById: (state) => (id) => {
    return state.items.find((i) => i.id === id)
  }
}

export const actions = {
  bindFireStore: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by `bindFirestoreRef`
    return bindFirestoreRef('items', db.collection('items'))
  }),
  addItem(context, item) {
    return db.collection('items').add(item)
  }
}
