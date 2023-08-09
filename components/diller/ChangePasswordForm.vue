<template>
  <div class="popUpBg">
    <div class="popUpCardClass" style="width: 30%">
      <v-card tile style="position: relative">
        <v-card-title>
          Change password
          <v-spacer/>
          <span @click="closeDialog" class="mdi mdi-close mdi-18px icon-button-class"></span>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <label>Current password:</label>
          <v-text-field dense outlined disabled :value="diller.password_save"></v-text-field>

          <label>New password:</label>
          <v-text-field v-model="password" dense outlined
                        :rules="[v=>v && v.length>2||'Password is weak']"></v-text-field>
          <label>Confirm password:</label>
          <v-text-field v-model="confirm_password" dense outlined
                        :rules="[v=>v && v.length>2||'Password is weak']"></v-text-field>
        </v-card-text>
        <v-divider>
        </v-divider>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="closeDialog" depressed small>cancel</v-btn>
          <v-btn @click="saveHandler" depressed small style="background-color: #32BCA3;color: white">save</v-btn>
        </v-card-actions>
        <loading-component v-if="isLoading"/>
      </v-card>
    </div>
    <error-component v-if="!!errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
  </div>
</template>
<script>
import LoadingComponent from "../LoadingComponent";
import {mapActions} from "vuex";
import ErrorComponent from "../ErrorComponent";

export default {
  props: {
    diller: {
      type: Object,
    }
  },
  components: {ErrorComponent, LoadingComponent},
  data() {
    return {
      isLoading: false,
      password: null,
      confirm_password: null,
      errorMessage: null
    }
  },
  methods: {
    ...mapActions({
      changePassword: 'dillers/updateDiller'
    }),
    closeDialog() {
      this.$emit("closeDialog")
    },
    checkError() {
      return !(!this.password || !this.confirm_password || this.password.length < 3 && this.password !== this.confirm_password);

    },
    async saveHandler() {
      if (this.isLoading) return
      if (!this.checkError()) {
        alert("Some field is wrong!!!")
        return
      }
      this.isLoading = true
      let success = await this.changePassword({diller_id: this.diller.id, data: {password: this.password}})
      this.isLoading = false
      if (success) {
        this.closeDialog()
      } else {
        this.errorMessage = 'Cannot change password. Please try again'
      }
    }
  }
}
</script>
