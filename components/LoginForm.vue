<template>
  <v-card tile style="position: relative">
    <v-card-title>Welcome</v-card-title>
    <v-divider/>
    <v-card-text>
      <v-text-field
        v-model="phone_number"
        dense
        outlined
        type="text"
        label="Phone number:"
        placeholder="Phone number:"
        :rules="[v => phone_regex.test(v) || 'Phone number is incorrect']"/>

      <v-text-field
        v-model="password"
        dense
        outlined
        type="password"
        label="Password:"
        placeholder="Password:"
        :rules="[v=>v && v.length >2||'Password must me at last 3 character']"
        style="margin-top: 10px"
      />
    </v-card-text>
    <v-divider/>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="loginHandler" small depressed style="background-color: #32BCA3;color: white">login</v-btn>
    </v-card-actions>
    <loading-component v-if="isLoading"/>
    <error-component v-if="!!errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";

export default {
  components: {ErrorComponent, LoadingComponent},
  data() {
    return {
      phone_number: null,
      password: null,
      isLoading: false,
      errorMessage: null
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    checkError() {
      if (!this.password || this.password.length < 3) {
        return false
      }
      return this.phone_regex.test(this.phone_number);
    },
    async loginHandler() {
      if (!this.checkError()) {
        alert('Invalid credentials')
        return
      }
      if (this.isLoading) return;
      this.isLoading = true

      let success = await this.login({phone_number: this.phone_number, password: this.password})
      this.isLoading = false
      if (success) {
        await this.$router.push('/dashboard')
      } else {
        this.errorMessage = 'Cannot login. Maybe your credentials is incorrect!'
      }
    }
  },
  computed: {
    ...mapGetters({
      phone_regex: 'get_phone_regex'
    })
  }
}
</script>
