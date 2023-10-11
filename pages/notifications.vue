<template>
  <div>
    <v-card-title>Change card notifications</v-card-title>
    <v-divider/>
    <v-card tile outlined style="padding: 10px;min-height: 82vh">
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
        <div style="width: 10px"></div>
        <div style="flex:1">
          <v-select
            v-model="limit"
            :items="pageLimits"
          >
          </v-select>
        </div>
      </div>
      <v-data-table
        :headers="headers"
        :items="notifications"
        :loading="isLoading"
        hide-default-footer
        disable-pagination
      >
        <template v-slot:item.diller="{item}">
          {{ item?.diller?.full_name || 'Diller not found' }}
        </template>
        <template v-slot:item.status="{item}">
          <div
            @click="openChooseStatusDilaog(item)"
            class="status-button"
            :style="{color:status_colors[item.status].color,'background-color':status_colors[item.status].bg_color}">
            <strong>{{ status_colors[item.status].label }}</strong>
          </div>
        </template>
      </v-data-table>
      <v-divider/>
      <v-pagination
        v-model="page"
        v-if="page_count>1"
        :length="page_count"
        circle
        :total-visible="10"
      >
      </v-pagination>
    </v-card>
    <choose-status-form
      v-if="chooseStatusDialog"
      :current-status="selectedNot?.status"
      :is-loading="statusChanging"
      @closeDialog="closeChooseStatusDialog"
      @chooseStatus="statusChoosed"
    />
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import ChooseStatusForm from "../components/ChooseStatusForm";

export default {
  components: {ChooseStatusForm},
  data() {
    return {
      isLoading: false,
      page: 1,
      limit: 20,
      search: null,
      headers: [
        {text: 'ID', value: 'id', sortable: false},
        {text: "Card number", value: "cardnumber", sortable: false},
        {text: "New card number", value: "new_cardnumber", sortable: false},
        {text: "Reason", value: "reason", sortable: false},
        {text: 'Diller', value: "diller", sortable: false},
        {text: "Status", value: 'status', width: '200px', sortable: false},
        {text: 'Date', value: "created_at", sortable: false}
      ],
      pageLimits: [
        10, 20, 30, 40, 50, 100
      ],
      chooseStatusDialog: false,
      selectedNot: null,
      statusChanging: false
    }
  },
  watch: {
    search() {
      this.resetList()
    },
    page() {
      this.loadData()
    },
    limit() {
      this.resetList()
    }
  },
  methods: {
    ...mapActions({
      loadNotifications: 'notifications/loadNotifications',
      changeStatus: "notifications/updateNotStatus"
    }),
    openChooseStatusDilaog(item) {
      this.selectedNot = item
      this.chooseStatusDialog = true
    },
    closeChooseStatusDialog() {
      this.selectedNot = null
      this.chooseStatusDialog = false
    },
    async statusChoosed(status) {
      this.statusChanging = true

      try {
        await this.changeStatus({not_id: this.selectedNot.id, status})
      } catch (err) {
        console.log(err)
        this.$store.commit('set_error', 'Cannot update status. Please check the internet connection and try again')
      }
      this.statusChanging = false
      this.closeChooseStatusDialog()
    },
    resetList() {
      this.page = 1
      this.loadData()
    },
    async loadData() {
      this.isLoading = true
      try {
        await this.loadNotifications({
          page: this.page,
          limit: this.limit,
          search: this.search
        })
      } catch (err) {
        console.error(err)
        this.$store.commit('set_error', "Cannot load data. Please try again!")
      }
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters({
      notifications: 'notifications/get_notifications',
      total_count: 'notifications/get_total',
      status_colors: 'get_status_colors'
    }),
    page_count() {
      return Math.ceil(this.total_count / this.limit)
    },
  },
  mounted() {
    this.loadData()
  }
}
</script>


<style>
.status-button {
  padding: 10px 12px;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
}

.status-button:hover {
  cursor: pointer;
}
</style>
