<template>
  <div class="popUpBg">
    <div class="popUpCardClass" style="width: 60%">
      <v-card style="position: relative" tile>
        <v-card-title>
          Balance history: (Current balance:{{ diller?.balans?.summ }} TMT)
          <v-spacer/>
          <span @click="closeDialog" class="mdi mdi-close mdi-18px icon-button-class"/>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="history_list"
            :loading="isLoading"
            hide-default-footer
            disable-pagination
          ></v-data-table>
          <v-pagination v-if="page_length>0" v-model="page" :length="page_length"/>
        </v-card-text>
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
