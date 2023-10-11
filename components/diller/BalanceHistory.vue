<template>
  <div class="popUpBg">
    <div class="popUpCardClass" style="width: 60%;height: 85vh">
      <v-card style="position: relative;height: 100%" tile>
        <v-card-title>
          Balance history: (Current balance:{{ diller?.balans?.summ }} TMT)
          <v-spacer/>
          <span @click="closeDialog" class="mdi mdi-close mdi-18px icon-button-class"/>
        </v-card-title>
        <v-divider/>
        <v-card-text style="max-height: 80%;overflow-y: auto">
          <v-data-table
            :headers="headers"
            :items="history_list"
            :loading="isLoading"
            hide-default-footer
            disable-pagination
          ></v-data-table>
        </v-card-text>
        <v-divider style="background-color: black"/>
        <div style="display: flex;height: max-content;justify-content: center;align-items: center">
          <v-pagination
            v-if="page_length>0"
            v-model="page"
            :length="page_length"
            :total-visible="10"/>
        </div>

      </v-card>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    diller: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isLoading: false,
      page: 1,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Type', value: 'type'},
        {text: 'Action', value: 'action'},
        {text: 'Summa', value: 'summ'},
      ]
    }
  },
  watch: {
    page() {
      this.loadData()
    }
  },
  methods: {
    ...mapActions({
      loadBalanceHistory: "balansHistory/loadHistory"
    }),
    async loadData() {
      this.isLoading = true
      await this.loadBalanceHistory({diller_id: this.diller.id, page: this.page})
      this.isLoading = false
    },
    closeDialog() {
      this.$emit("closeDialog")
    }
  },

  computed: {
    ...mapGetters({
      history_list: 'balansHistory/get_history_list',
      total: 'balansHistory/get_total_count'
    }),
    page_length() {
      return Math.ceil(this.total / 20)
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>
