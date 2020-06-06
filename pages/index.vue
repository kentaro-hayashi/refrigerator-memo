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
          v-tabs
            v-tab(key='mgmt') 食品管理
            v-tab(key='buylist') 買い物リスト
            v-tab-item(key='mgmt')
              template(v-for="(items, category) in categorizedItems")
                v-subheader {{category}}
                v-list
                  v-list-item(
                    v-for="(item) in items" 
                    :key="item.id"
                  )
                    v-container
                      v-row(
                        no-gutters
                        align="center"
                      )
                        v-col(md="5") {{item.name}}
                        v-col(md="4") {{item.amount}}{{item.unit}}
                        v-col(md="3")
                          v-btn(
                            icon
                            @click.stop="onAdd(item)"
                          )
                            v-icon add
                          v-btn(
                            icon
                            @click.stop="onRemove(item)"
                          )
                            v-icon remove
                    v-list-item-action
                      v-btn(icon)
                        v-icon settings
                v-list-item(
                  @click="newItem(category)"
                )
                  v-container
                    v-row(
                      no-gutters
                      align="center"
                    )
                      v-col 新しい項目を追加
            v-tab-item(key='buylist') test
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['categorizedItems'])
  },
  methods: {
    onAdd(item) {
      this.$store.dispatch('incrementItem', item)
    },
    onRemove(item) {
      this.$store.dispatch('decrementItem', item)
    },
    newItem(category) {
      // TODO: to be implemented
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
