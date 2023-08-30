<template>
  <div style="position: relative">
    <v-card-title>
      Cards
      <v-spacer/>
      <v-btn @click="clientFormDialog = true" depressed small style="background-color: #32BCA3;color: white">
        <span class="mdi mdi-plus mdi-18px"></span>
      </v-btn>
      <v-btn v-if="isDialog" @click="closeDialog" depressed small
             style="background-color:darkred;color: white;margin-left: 10px">
        <span class="mdi mdi-close mdi-18px"></span>
      </v-btn>
    </v-card-title>
    <v-divider/>
    <div style="display: flex;">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        style="flex: 3"
      ></v-text-field>
      <div style="flex: 3" v-if="$device.isDesktop">

      </div>
      <div v-else style="width: 10px"></div>
      <div style="flex:1">
        <v-select
          v-model="limit"
          :items="pageLimits"
        >
        </v-select>
      </div>
    </div>
    <v-data-table
      hide-default-footer
      disable-pagination
      :headers="headers"
      :items="clients"
    >
      <template v-slot:item.actions="{item}">
        <span @click="goToDetail(item)" class="mdi mdi-eye mdi-18px icon-button-class"></span>
        <span @click="selectForEdit(item)" class="mdi mdi-pencil mdi-18px icon-button-class"></span>
        <span @click="selectForDelete(item)" class="mdi mdi-delete mdi-18px icon-button-class"></span>
      </template>
    </v-data-table>
    <v-divider/>
    <client-form v-if="clientFormDialog" :client="selectedClient" @closeDialog="closeClientFormDialog"
                 @resetList="resetList"/>
    <loading-component v-if="isLoading"/>
    <v-pagination v-model="page" v-if="page_count>1" :length="page_count" circle/>
  </div>
</template>

<script>
import LoadingComponent from "../../components/LoadingComponent";
import {mapActions, mapGetters} from "vuex";
import ClientForm from "./ClientForm";

export default {
  props: {
    isDialog: {
      type: Boolean,
      default: false,
    },
    diller: {
      type: Object,
      default: null
    }
  },
  components: {ClientForm, LoadingComponent},
  data() {
    return {
      isLoading: false,
      page: 1,
      headers: [
        {text: "Id", value: "id", sortable: false,},
        {text: "Card number", value: "cardnumber", sortable: false,},
        {text: "Name - Surname", value: "name", sortable: false,},
        {text: "Phone number", value: "telnumber", sortable: false,},
        {text: "Paket", value: "packet", sortable: false,},
        {text: "Srok", value: "srok", sortable: false,},
        {text: "Actions", value: "actions", width: "10%", align: 'right', sortable: false,},
      ],
      selectedClient: null,
      clientFormDialog: false,
      deleteConfirmDialog: false,
      search: null,
      limit: 20,
      pageLimits: [
        10, 20, 30, 50, 100
      ],
    }
  },
  watch: {
    page() {
      this.loadData()
    },
    limit() {
      this.resetList()
    },
    search() {
      this.resetList()
    }
  },
  methods: {
    ...mapActions({
      loadClients: 'clients/loadAllClients',
      deleteClient: 'clients/deleteClient'
    }),
    resetList() {
      this.page = 1
      this.loadData()
    },
    closeDialog() {
      this.$emit("closeDialog")
    },
    async loadData() {
      this.isLoading = true
      await this.loadClients({
        page: this.page,
        diller_id: this.diller?.id,
        search: this.search,
        limit: this.limit
      })
      this.isLoading = false
    },
    goToDetail(item) {
      this.$router.push('clients/' + item.id)
    },
    selectForEdit(item) {
      this.selectedClient = item
      this.clientFormDialog = true
    },
    selectForDelete(item) {
      this.selectedClient = item
      this.deleteConfirmDialog = true
    },
    closeClientFormDialog() {
      this.selectedClient = null
      this.clientFormDialog = false
    }
  },
  computed: {
    ...mapGetters({
      clients: 'clients/get_clients_list',
      total: 'clients/get_total_count'
    }),
    page_count() {
      return Math.ceil(this.total / this.limit)
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>
