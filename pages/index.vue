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
                :to="`/items/${item.id}`"
              ) {{item.name}} {{item.amount}}{{item.unit}}
          v-form(@submit.prevent.stop="onSubmit")
            v-text-field(
              label="食料追加"
              append-icon="mdi-plus"
              @click:append="onSubmit"
            )
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addItem', {
        name: 'うんこ',
        amount: 1,
        unit: '本',
        alert: 0.5
      })
    }
  }
}
</script>
