<template lang="pug">
  v-container
    v-row(
      no-gutters
      justify="center"
    )
      v-col(
        xs="12"
        sm="8"
        md="6"
      )
        v-card
          v-card-title.headline 冷蔵庫の中身は？
            br
            | {{item}}
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    item() {
      return this.$store.getters.getItemById(this.$route.params.itemId)
    }
  }
}
</script>
