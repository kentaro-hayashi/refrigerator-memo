<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      v-card(min-width="400px")
        v-card-title.headline 冷蔵庫の中身は？
        v-list
          v-list-item-group
            v-list-item(
              v-for="(item, i) in items" 
              :key="i"
              @click="onclick"
            ) {{item}}
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
    return {
      items: [
        {
          name: 'きゅうり',
          amount: 2,
          unit: '本',
          alert: 1
        },
        {
          name: '味噌',
          amount: 1,
          unit: '箱',
          alert: 0.3
        },
        {
          name: 'レモン汁',
          amount: 1,
          unit: '本',
          alert: 0.3
        }
      ]
    }
  },
  methods: {
    onclick() {
      console.log('test')
    }
  }
}
</script>
