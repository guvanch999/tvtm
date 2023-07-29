<template>
  <div>
    <v-card-title>Settings</v-card-title>
    <v-divider>
    </v-divider>
    <v-card-text>
      <v-card tile outlined style="max-width: 500px;position: relative">
        <v-card-title>Remote access credentials</v-card-title>
        <v-card-text>
          <label>Phone number:</label>
          <v-text-field
            v-model="telnumber"
            outlined
            dense
            hide-details
            :rules="[v => phone_regex.test(v) || 'Phone number is incorrect']"></v-text-field>
          <label>Password:</label>
          <v-text-field
            v-model="password"
            outlined
            dense
            hide-details
            :rules="[v=>v && v.length >2||'Password must me at last 3 character']"></v-text-field>
          <label>Note:</label>
          <v-text-field
            v-model="note"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="updateDetailHandler" small depressed style="background-color: #32BCA3;color: white">save
          </v-btn>
        </v-card-actions>
        <loading-component v-if="isLoading"/>
      </v-card>
    </v-card-text>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LoadingComponent from "../components/LoadingComponent";

export default {
  components: {LoadingComponent},
  data() {
    return {
      telnumber: null,
      password: null,
      note: null,
      isLoading: true
    }
  },
  methods: {
    ...mapActions({
      loadRemoteAccessDetail: "settings/load_remote_auth_detail",
      updateRemoteAccessDetail: 'settings/update_remote_detail'
    }),
    resetData() {
      this.telnumber = this.detail.telnumber
      this.password = this.detail.password
      this.note = this.detail.note
    },
    checkData() {
      return !(!this.phone_regex.test(this.telnumber) || !this.password || this.password.length < 2);

    },
    async updateDetailHandler() {
      if (this.isLoading) return
      if (!this.checkData()) {
        alert('Incorrect data')
        return
      }
      this.isLoading = true
      try {
        await this.updateRemoteAccessDetail({
          telnumber: this.telnumber,
          password: this.password,
          note: this.note
        })
        this.resetData()
      } catch (e) {
        this.$store.commit('set_error', e?.response?.data?.message ?? 'Cannot update detail. Please try again')
      }
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters({
      phone_regex: 'get_phone_regex',
      detail: 'settings/get_remote_auth_detail'
    })
  },
  async mounted() {
    try {
      await this.loadRemoteAccessDetail()
      this.resetData()
    } catch (err) {
      console.log(err)
      this.$store.commit('set_error', "Cannot load detail")
    }
    this.isLoading = false
  }
}
</script>
