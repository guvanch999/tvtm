<template>
  <div>
    <v-card-title>Logs</v-card-title>
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
        <div style="flex: 3">

        </div>
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
        :items="logs"
        :loading="isLoading"
        hide-default-footer
        disable-pagination
      >
        <template v-slot:item.diller="{item}">
          {{ item?.diller?.full_name || 'Diller not found' }}
        </template>
        <template v-slot:item.client="{item}">
          {{ (item?.client?.name || '') + " " + (item?.client?.surname || '') || 'No client' }}
        </template>
      </v-data-table>
      <v-pagination
        v-model="page"
        v-if="page_count>1"
        :length="page_count"
        circle>
      </v-pagination>
    </v-card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      headers: [
        {text: 'id', value: 'id'},
        {text: 'Card number', value: "cardnumber"},
        {text: 'action', value: 'action'},
        {text: 'diller', value: 'diller'},
        {text: 'client', value: 'client'},
      ],
      pageLimits: [10, 20, 30, 50, 100, 150],
      search: null,
      limit: 20,
      page: 1
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
      loadLogs: 'logs/loadLogs'
    }),
    resetList() {
      this.page = 1
      this.loadData()
    },
    async loadData() {
      this.isLoading = true
      try {
        await this.loadLogs({
          search: this.search,
          limit: this.limit,
          page: this.page
        })
      } catch (err) {
        console.error(err)
        this.$store.commit('set_error', 'Cannot load data. Please try again')
      }
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters({
      logs: 'logs/get_logs',
      total: 'logs/get_total'
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
