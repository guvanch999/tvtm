<template>
  <div class="popUpBg">
    <div class="popUpCardClass" style="width: 50%">
      <v-card tile style="position: relative">
        <v-card-title>
          Client form
          <v-spacer/>
          <span @click="closeDialog" class="mdi mdi-close mdi-18px icon-button-class"></span>
        </v-card-title>
        <v-divider/>
        <v-card-text style="max-height: 60vh;overflow-y: auto">
          <v-row>
            <v-col>
              <label>Card number:</label>
              <v-text-field
                v-model="clientModel.cardnumber"
                :rules="requiredRules"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <label>Phone number:</label>
              <v-text-field
                v-model="clientModel.telnumber"
                outlined
                dense
                :rules="phoneNumberRules"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label>Name:</label>
              <v-text-field
                v-model="clientModel.name"
                outlined
                dense
                :rules="requiredRules"
              />
            </v-col>
            <v-col>
              <label>Surname:</label>
              <v-text-field
                v-model="clientModel.surname"
                outlined
                dense
                :rules="requiredRules"
              />
            </v-col>
          </v-row>
          <v-row>

            <v-col>
              <label>Address:</label>
              <v-text-field
                v-model="clientModel.adress"
                outlined
                dense
                :rules="requiredRules"
              />
            </v-col>
            <v-col>
              <label>Resiver:</label>
              <v-text-field
                v-model="clientModel.resiver"
                outlined
                dense
                :rules="requiredRules"
              />
            </v-col>

          </v-row>
          <v-row>
            <v-col>
              <label>Paket:</label>
              <v-text-field
                v-model="clientModel.packet"
                outlined
                dense
                :rules="requiredRules"
              />
            </v-col>
            <v-col>
              <label>Srok:</label>
              <v-text-field
                v-model="clientModel.srok"
                outlined
                dense
                type="number"
                :rules="srokRules"
              />
            </v-col>
          </v-row>
          <div class="select-with-component">
            <div>
              Diller: <strong>{{ selectedDiller?.full_name || "Select diller" }}</strong>
            </div>
            <v-btn @click="chooseDillerDialog=true" depressed small style="background-color: #32BCA3;color: white">
              select
            </v-btn>
          </div>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="closeDialog" small depressed>cancel</v-btn>
          <v-btn @click="saveHandler" small depressed style="background-color: #32BCA3;color: white">save</v-btn>
        </v-card-actions>
        <loading-component v-if="isLoading"/>
        <choose-diller
          v-if="chooseDillerDialog"
          :default-choosed="selectedDiller"
          @closeDialog="closeChooseDillerDialog"
          @selectItems="dillerSelected"/>
      </v-card>
    </div>
    <error-component v-if="errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
  </div>
</template>
<script>
import LoadingComponent from "../LoadingComponent";
import ErrorComponent from "../ErrorComponent";
import ChooseDiller from "../diller/ChooseDiller";
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    client: {
      type: Object,
      default: null
    }
  },
  components: {ChooseDiller, ErrorComponent, LoadingComponent},

  data() {
    return {
      isLoading: false,
      errorMessage: null,
      selectedDiller: null,
      chooseDillerDialog: false,
      clientModel: {
        cardnumber: null,
        name: null,
        surname: null,
        telnumber: null,
        adress: null,
        packet: null,
        srok: null,
        resiver: null
      },
      requiredRules: [
        v => v && v.length > 0 || 'Field is required',
      ],
      srokRules: [
        v => v && v > 0 && v < 13 || "Srok must be between 1-12"
      ],
      phoneNumberRules: [
        v => this.phone_regex.test(v) || 'Phone number is not match!!!'
      ],
    }
  },
  methods: {
    ...mapActions({
      updateClient: 'clients/updateClientDetail',
      createClient: 'clients/creteClient'
    }),
    resetChanges() {
      this.clientModel = {
        cardnumber: null,
        name: null,
        surname: null,
        telnumber: null,
        adress: null,
        packet: null,
        srok: null,
        resiver: null
      }
      if (this.client) {
        for (let prop in this.clientModel) {
          this.clientModel[prop] = this.client[prop]
        }
      }
    },
    closeDialog() {
      this.$emit("closeDialog")
    },
    closeChooseDillerDialog() {
      this.chooseDillerDialog = false
    },
    dillerSelected(diller) {
      this.selectedDiller = diller
      this.chooseDillerDialog = false
    },
    checkError() {
      let hasError = false
      let errorMess = null
      for (let prop in this.clientModel) {
        let rules = []
        switch (prop) {
          case 'telnumber': {
            rules = this.phoneNumberRules
            break;
          }
          case 'srok': {
            rules = this.srokRules
            break;
          }
          default : {
            rules = this.requiredRules
            break
          }
        }
        rules.forEach(func => {
          let check = func(this.clientModel[prop])
          if (check !== true) {
            console.log(prop)
            errorMess = check
            hasError = true
          }
        })
        if (hasError) {
          alert(errorMess)
          return hasError
        }
      }
      return hasError
    },
    async saveHandler() {
      if (this.checkError()) return
      if (this.isLoading) return
      if (!this.selectedDiller) {
        alert("Choose a diller")
        return
      }
      this.isLoading = true
      let success = false
      let body = {...this.clientModel}
      body['diller_id'] = this.selectedDiller.id
      if (this.client) {
        success = await this.updateClient({client_id: this.client.id, data: body})
      } else {
        success = await this.createClient(body)
      }
      this.isLoading = false
      if (success) {
        this.$emit('resetList')
        this.closeDialog()
      } else {
        this.errorMessage = "Cannot handler request. Please check internet connection and try again."
      }
    }
  },
  computed: {
    ...mapGetters({
      phone_regex: 'get_phone_regex'
    }),
    errorMessages() {

      return ['Field is required']
    }
  },
  mounted() {
    this.resetChanges()
  }
}
</script>
