<template lang="pug">
  #firebaseui-auth-container
</template>

<script>
import * as firebaseui from 'firebaseui'
import { auth, authProviders } from '~/plugins/firebase'

export default {
  name: 'FirebaseAuth',
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: [authProviders.Google],
          signInSuccessUrl: '/',
          signInFlow: 'popup'
        }

        ui.start('#firebaseui-auth-container', config)
      }
    })
  }
}
</script>
