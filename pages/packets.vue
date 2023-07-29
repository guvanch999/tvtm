<template>
  <div>
    <v-card-title>
      Packets
      <v-spacer></v-spacer>
      <v-btn @click="syncPacketsHandler" small depressed style="background-color: green;color: white">
        <v-progress-circular v-if="isSyncing" indeterminate size="18"/>
        <span v-else class="mdi mdi-sync mdi-18px"></span>
        Sync
      </v-btn>
    </v-card-title>
    <v-divider/>
    <v-data-table
      hide-default-footer
      disable-pagination
      :headers="headers"
      :items="packets"
    >

    </v-data-table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      isSyncing: false,
      isLoading: true,
      headers: [
        {text: 'id', value: 'id'},
        {text: "Packet", value: "packet"},
        {text: "Description", value: "description"},
        {text: "Price", value: "price"}
      ]
    }
  },
  methods: {
    ...mapActions({
      loadPackets: 'packets/loadPackets',
      syncPackets: 'packets/syncPackets'
    }),
    async syncPacketsHandler() {
      if (this.isSyncing) return
      this.isSyncing = true
      try {
        await this.syncPackets()
      } catch (e) {
        console.log(e)
        this.$store.commit('set_error', 'Cannot sync data. Please try again')
      }
      this.isSyncing = false
    }
  },
  computed: {
    ...mapGetters({
      packets: 'packets/get_packets'
    })
  },
  async mounted() {
    try {
      await this.loadPackets()
    } catch (err) {
      console.log(err)
      this.$store.commit('set_error', 'Cannot load data. Please try again')
    }

    this.isLoading = false
  }
}
</script>
