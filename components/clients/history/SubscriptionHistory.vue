<template>
  <div style="position: relative">
    <v-data-table
      :items="histories"
      :headers="headers"
      hide-default-footer
      disable-pagination
    >
    </v-data-table>
    <v-pagination v-model="page" :length="pageCount" v-if="pageCount>1"/>
    <loading-component v-if="isLoading"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LoadingComponent from "../../LoadingComponent";

export default {
  components: {LoadingComponent},
  props: {
    client: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      page: 1,
      isLoading: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Action', value: 'action'},
        {text: 'Packet', value: 'packet'},
        {text: 'Srok', value: 'srok'},
        {text: 'Price', value: 'price'},
        {text: 'Date-time', value: 'created_at'},
      ]
    }
  },
  methods: {
    ...mapActions({
      loadSubscriptionHistory: 'histories/loadSubscriptionHistory'
    }),
    async loadData() {
      this.isLoading = true
      await this.loadSubscriptionHistory({page: this.page, client_id: this.client.id})
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters({
      histories: 'histories/get_subscription_history',
      total: 'histories/get_total_count'
    }),
    pageCount() {
      return Math.ceil(this.total / 20)
    }
  },
  mounted() {
    console.log("mounted")
    this.loadData()
  }
}
</script>
