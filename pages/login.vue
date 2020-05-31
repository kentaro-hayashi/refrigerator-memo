<template lang="pug">
  firebase-auth
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapGetters, mapActions } from 'vuex'
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  name: 'Login',
  components: {
    FirebaseAuth
  }
}
</script>
