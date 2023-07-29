<template>
  <div style="position: relative">
    <v-card-title>Card information</v-card-title>
    <v-divider/>
    <br>
    <loading-component v-if="isLoading"/>
    <v-row v-else-if="!!client" class="m-0 p-0">
      <v-col md="4">
        <client-detail :client="client"/>
      </v-col>
      <v-col>
        <histories-component :client="client"/>
      </v-col>
    </v-row>
    <v-card-subtitle v-else>No card found</v-card-subtitle>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LoadingComponent from "../../components/LoadingComponent";
import ClientDetail from "../../components/clients/ClientDetail";
import HistoriesComponent from "../../components/clients/history/HistoriesComponent";

export default {
  components: {HistoriesComponent, ClientDetail, LoadingComponent},
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    ...mapActions({
      loadClientDetail: "clients/getClientDetail"
    })
  },
  computed: {
    ...mapGetters({
      client: 'clients/get_client_detail'
    })
  },
  async mounted() {
    await this.loadClientDetail(this.$route.params.id)
    this.isLoading = false
  }
}
</script>
