<template lang="pug">
  v-container
    v-row(no-gutters justify="center")
      v-col(xs="12" sm="8" md="6")
        v-card
          v-tabs
            v-tab(key='mgmt') 食品管理
            v-tab(key='buylist') 買い物リスト
            v-tab-item(key='mgmt')
              template(v-for="(items, category) in categorizedItems")
                v-subheader {{category}}
                v-list
                  v-list-item(v-for="(item) in items" :key="item.id" @click.stop="openDialog(item)")
                    v-container
                      v-row(no-gutters align="center")
                        v-col(md="5") {{item.name}}
                        v-col(md="4") {{item.amount}}{{item.unit}}
                        v-col(md="3")
                          v-btn(icon @click.stop="onAdd(item)")
                            v-icon add
                          v-btn(icon @click.stop="onRemove(item)")
                            v-icon remove
                    v-list-item-action
                      v-btn(icon)
                        v-icon settings
                  v-list-item(@click="newItem(category)")
                    v-container
                      v-row(no-gutters align="center")
                        v-col 新しい項目を追加
            v-dialog(v-model="modifyDialog" max-width="600px")
              v-card
                v-container
                  v-row
                    v-col
                      v-text-field(label="名称" :value="targetItem.name")
                  v-row
                    v-col
                      v-text-field(label="数え方" :value="targetItem.unit")
                  v-row
                    v-col
                      v-text-field(label="増減単位" :value="targetItem.changeBy")
                  v-row
                    v-col
                      v-text-field(label="購入閾値" :value="targetItem.threshold")
                  v-row(justify="center")
                    v-col(cols="2")
                      v-btn 削除
                    v-col(cols="2")
                      v-btn 更新
            v-tab-item(key='buylist') test
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      modifyDialog: false,
      targetItem: {}
    }
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
      this.$store.dispatch('addItem', category)
    },
    openDialog(item) {
      this.modifyDialog = true
      this.targetItem = item
    }
  }
}
</script>
