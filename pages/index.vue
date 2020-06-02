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
          v-list
            v-list-item-group
              v-list-item(
                v-for="(item, i) in items" 
                :key="i"
                to="/test"
              ) {{item.name}} {{item.amount}}{{item.unit}}
          v-text-field(placeholder="Placeholder")
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {}
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    onclick() {
      console.log('test')
    }
  }
}
</script>
