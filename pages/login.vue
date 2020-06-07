<template lang="pug">
  v-container
    v-row(no-gutters justify="center")
      v-col(cols="12" sm="8" md="6")
        v-card
          .title
            v-icon local_florist
            | これは何か？
          p 冷蔵庫やキッチンに保管している食材を登録して、買い物時に何を買えばいいのか教えてくれるツールです
          .title
            v-icon local_florist
            | 使い方は？
          p Googleの認証でサインアップし、食材を登録します。
            br
            | 食材の在庫が一定の分量を下回った場合に買い物リストに載るようになっています。
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
