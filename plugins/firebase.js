import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '~/firebase.config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID
}

export const auth = firebase.auth()
export const db = firebase.firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
