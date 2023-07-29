<template>
  <div class="popUpBg">
    <div class="popUpCardClass" style="width: 30%">
      <v-card style="position: relative;" tile>
        <v-card-title>Update balance
          <v-spacer/>
          <span @click="closeDialog" class="mdi mdi-close mdi-18px icon-button-class"></span>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <label>Balance:</label>
          <v-text-field v-model="balance" type="number" outlined dense></v-text-field>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="closeDialog" depressed small>cancel</v-btn>
          <v-btn @click="saveBalanceHandler" depressed small style="background-color: #32BCA3;color: white">save</v-btn>
        </v-card-actions>
        <loading-component v-if="isLoading"/>
      </v-card>
    </div>
    <error-component v-if="errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
  </div>
</template>
<script>
import LoadingComponent from "../LoadingComponent";
import ErrorComponent from "../ErrorComponent";
import {mapActions} from "vuex";

export default {
  props: {
    diller: {
      type: Object,
      default: null
    }
  },
  components: {ErrorComponent, LoadingComponent},
  data() {
    return {
      isLoading: false,
      balance: null,
      errorMessage: null
    }
  },
  methods: {
    ...mapActions({
      updateBalance: 'dillers/updateBalance'
    }),
    closeDialog() {
      this.$emit("closeDialog")
    },
    async saveBalanceHandler() {
      if (this.isLoading) return
      this.isLoading = true
      let success = await this.updateBalance({diller_id: this.diller.id, summ: this.balance})
      this.isLoading = false
      if (success) {
        this.closeDialog()
      } else {
        this.errorMessage = 'Cannot update balance. Please try again!!!'
      }
    }
  },
  mounted() {
    this.balance = this.diller?.balans?.summ || 0
  }
}
</script>
