<template>
  <div class="popUpBg">
    <div class="popUpCardClass">
      <v-card tile style="position: relative">
        <v-card-title>
          Diller form
          <v-spacer/>
          <span @click="closeDialog" class="mdi mdi-close mdi-18px icon-button-class"></span>
        </v-card-title>
        <v-divider>
        </v-divider>
        <v-card-text>
          <label>Doly ady:</label>
          <v-text-field v-model="dillerModel.full_name" dense outlined/>
          <label>Telefon belgisi:</label>
          <v-text-field v-model="dillerModel.phone_number" dense outlined
                        :rules="[v => phone_regex.test(v) || 'Phone number is incorrect']"/>
          <div v-if="!!!diller">
            <label>Paroly:</label>
            <v-text-field v-model="dillerModel.password" dense outlined type="password"
                          :rules="[v=>v && v.length >2||'Password must me at last 3 character']"/>
          </div>

          <label>Skidka:</label>
          <v-text-field v-model="dillerModel.skidka" dense outlined type="number"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="closeDialog" small depressed>cancel</v-btn>
          <v-btn @click="saveHandler" small depressed style="background-color: #32BCA3;color: white">save</v-btn>
        </v-card-actions>
        <loading-component v-if="isLoading"/>
      </v-card>
    </div>
    <error-component v-if="errorMessage" :message="errorMessage" @closeError="errorMessage = null"></error-component>
  </div>
</template>

<script>
import LoadingComponent from "../LoadingComponent";
import ErrorComponent from "../ErrorComponent";
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    diller: {
      type: Object
    }
  },
  components: {ErrorComponent, LoadingComponent},
  data() {
    return {
      errorMessage: null,
      isLoading: false,
      dillerModel: {
        full_name: null,
        phone_number: null,
        password: null,
        skidka: null
      }
    }
  },
  methods: {
    ...mapActions({
      createDiller: "dillers/createDiller",
      updateDiller: 'dillers/updateDiller'
    }),
    initData() {
      this.dillerModel.full_name = null
      this.dillerModel.password = null
      this.dillerModel.phone_number = null
      this.dillerModel.skidka = null

      if (this.diller) {
        this.dillerModel.full_name = this.diller.full_name
        this.dillerModel.phone_number = this.diller.phone_number
        this.dillerModel.skidka = this.diller.skidka
      }
    },
    closeDialog() {
      this.$emit('closeDialog')
    },
    checkError() {
      if (!this.diller && (!this.dillerModel.password || this.dillerModel.password.length < 3)) {
        return false
      }
      if (!this.dillerModel.full_name) {
        return false
      }
      return this.phone_regex.test(this.dillerModel.phone_number);

    },
    async saveHandler() {
      if (this.isLoading) return
      if (!this.checkError()) {
        alert("Some field are incorrect")
        return
      }
      this.isLoading = true
      let success = false
      if (this.diller) {
        let body = Object.assign({}, this.dillerModel)
        delete body.password
        success = await this.updateDiller({diller_id: this.diller.id, data: body})
      } else {
        success = await this.createDiller(this.dillerModel)
      }
      this.isLoading = false
      if (success) {
        this.$emit("initData")
        this.closeDialog()
      } else {
        this.errorMessage = "Cannot handle request. Please try again"
      }
    }
  },
  computed: {
    ...mapGetters({
      phone_regex: 'get_phone_regex'
    })
  },
  mounted() {
    this.initData()
  }
}
</script>
