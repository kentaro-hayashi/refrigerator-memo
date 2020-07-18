<template lang="pug">
  v-container
    v-row(no-gutters justify="center")
      v-col(cols="12" sm="8" md="6")
        v-card
          v-tabs
            v-tab(key='mgmt') 食品管理
            v-tab(key='buylist') 買い物リスト
            v-tab-item(key='mgmt')
              template(v-if="itemExist")
                template(v-for="(items, category) in categorizedItems")
                  v-subheader {{category}}
                  v-list
                    v-list-item(v-for="(item) in items" :key="item.id" @click.stop="openModifyDialog(item)")
                      v-container
                        v-row(no-gutters align="center" justify="space-between")
                          v-col(cols="12" sm="5") {{item.name}}
                          v-col(cols="4" sm="4") {{item.amount}}{{item.unit}}
                          v-col(cols="5" sm="3")
                            v-btn(icon @click.stop="onAdd(item)")
                              v-icon add
                            v-btn(icon @click.stop="onRemove(item)")
                              v-icon remove
                      v-list-item-action
                        v-menu(offset-y close-on-click=true)
                          template(v-slot:activator="{ on }")
                            v-btn(icon v-on="on")
                              v-icon settings
                          v-list
                            v-list-item(@click="openModifyDialog(item)")
                              v-list-item-title 編集
                            v-list-item(@click="deleteItem(item)")
                              v-list-item-title 削除
                    v-list-item(@click="newItem(category)")
                      v-container
                        v-row(no-gutters align="center" justify="start")
                          v-col(cols="1")
                            v-btn(icon)
                              v-icon add
                          v-col(cols="11") 新しい項目を追加
              template(v-else)
                v-list
                  v-list-item(@click="newItem('食品')")
                    v-container
                      v-row(no-gutters align="center" justify="start")
                        v-col(cols="1")
                          v-btn(icon)
                            v-icon add
                        v-col(cols="11") 新しい項目を追加
            v-dialog(v-model="modifyDialog" max-width="600px")
              v-card
                v-container
                  v-row
                    v-col
                      v-text-field(label="名称" v-model="targetItem.name")
                  v-row
                    v-col
                      v-text-field(label="数量" v-model="targetItem.amount" type="number")
                  v-row
                    v-col
                      v-text-field(label="数え方" v-model="targetItem.unit")
                  v-row
                    v-col
                      v-text-field(label="増減単位" v-model="targetItem.changeBy" type="number")
                  v-row
                    v-col
                      v-text-field(label="購入閾値" v-model="targetItem.threshold" type="number")
                  v-row
                    v-col
                      v-text-field(label="カテゴリ" v-model="targetItem.category")
                  v-row(justify="center")
                    v-col(md="3")
                      v-btn(color="accent" width="100%" @click.stop="closeDialog") キャンセル
                    v-col(md="3")
                      v-btn(color="primary" width="100%" @click.stop="modifyItem") 更新
            v-tab-item(key='buylist')
              v-list
                v-list-item(v-for="(item) in shoppingList" :key="item.id" @click.stop="openShoppingDialog(item)")
                  v-container
                    v-row(no-gutters align="center")
                      v-col(md="5") {{item.name}}
                      v-col(md="4") 残り：{{item.amount}}{{item.unit}}
            v-dialog(v-model="shoppingDialog" max-width="600px")
              v-card
                v-container
                  v-row
                    v-col
                      v-text-field(label="購入後の数量" v-model="targetItem.amount" type="number")
                  v-row(justify="center")
                    v-col(md="3")
                      v-btn(color="accent" width="100%" @click.stop="closeDialog") キャンセル
                    v-col(md="3")
                      v-btn(color="primary" width="100%" @click.stop="modifyItem") 購入

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      modifyDialog: false,
      shoppingDialog: false,
      targetItem: {
        id: '',
        name: '',
        amount: 0,
        unit: '',
        changeBy: 0,
        threshold: 0,
        category: ''
      }
    }
  },
  computed: {
    ...mapGetters(['categorizedItems', 'shoppingList', 'itemExist'])
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
    openModifyDialog(item) {
      this.modifyDialog = true
      this.targetItem = Object.assign({ id: item.id }, item)
    },
    openShoppingDialog(item) {
      this.shoppingDialog = true
      this.targetItem = Object.assign({ id: item.id }, item)
    },
    closeDialog() {
      this.modifyDialog = false
      this.shoppingDialog = false
    },
    deleteItem(item) {
      confirm('削除しますか？') && this.$store.dispatch('deleteItem', item)
    },
    modifyItem() {
      this.$store.dispatch('modifyItem', this.targetItem)
      this.modifyDialog = false
      this.shoppingDialog = false
    }
  }
}
</script>

<style>
.v-subheader {
  font-size: 20px;
  color: rgb(255, 255, 255) !important;
}
</style>
