import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
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
  },
  categorizedItems(state) {
    const categorized = {}
    state.items.forEach((item) => {
      if (categorized[item.category] == null) {
        categorized[item.category] = [item]
      } else {
        categorized[item.category].push(item)
      }
    })
    return categorized
  }
}

export const actions = {
  bindFireStore: firestoreAction(({ bindFirestoreRef }, { userId }) => {
    // return the promise returned by `bindFirestoreRef`
    return bindFirestoreRef(
      'items',
      db
        .collection('users')
        .doc(userId)
        .collection('items')
        .orderBy('createdAt')
    )
  }),
  addItem({ rootState }, category) {
    return db
      .collection('users')
      .doc(rootState.auth.userId)
      .collection('items')
      .add({
        name: '新しい食材',
        amount: 0,
        unit: '個',
        changeBy: 1,
        threshold: 0,
        category,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      })
  },
  incrementItem({ rootState }, item) {
    return db
      .collection('users')
      .doc(rootState.auth.userId)
      .collection('items')
      .doc(item.id)
      .update({
        amount: firebase.firestore.FieldValue.increment(item.changeBy),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      })
  },
  decrementItem({ rootState }, item) {
    return db
      .collection('users')
      .doc(rootState.auth.userId)
      .collection('items')
      .doc(item.id)
      .update({
        amount: firebase.firestore.FieldValue.increment(-item.changeBy),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      })
  }
}
