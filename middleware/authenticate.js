import { auth } from '@/plugins/firebase'

export default function({ route, store, redirect }) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('auth/gotUser', user)
      store.dispatch('bindFireStore', { userId: user.uid })
    } else if (route.name !== 'login') redirect('/login')
  })
}
