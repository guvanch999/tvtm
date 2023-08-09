<template>
  <div style="position: relative">
    <v-card-title>
      Dillerler
      <v-spacer/>
      <v-btn @click="dillerFormDialog = true" depressed small style="color: white;background-color: #32BCA3"><span
        class="mdi mdi-plus mdi-18px"></span></v-btn>
    </v-card-title>
    <v-divider>
    </v-divider>
    <v-data-table
      :headers="headers"
      :items="dillers"
      hide-default-footer
      disable-pagination
      calculate-widths
      :loading="isLoading"
    >
      <template v-slot:item.balans="{item}">
        <div
          style="font-size: 18px;justify-content: space-between;display: flex;align-items: center;border-right: 1px solid black;">
          <strong>{{ item.balans?.summ || 0 }} TMT</strong>
          <div>

            <span @click="openFillUpBalance(item)" class="mdi mdi-plus mdi-18px icon-button-class"></span>
            <span @click="openBalanceDialog(item)" class="mdi mdi-pencil mdi-18px icon-button-class"></span>
            <span @click="openBalanceHistoryDialog(item)" class="mdi mdi-history mdi-18px icon-button-class"></span>
          </div>
        </div>
      </template>
      <template v-slot:item.client_count="{item}">
        <div @click="openClientsListDialog(item)" class="icon-button-class" style="font-size: 16px">
          Cards: <strong>{{ item.client_count }}</strong>
        </div>
      </template>
      <template v-slot:item.actions="{item}">
        <span @click="selectForEditPassword(item)"
              class="mdi mdi-shield-edit-outline mdi-18px icon-button-class"></span>
        <span @click="selectForEdit(item)" class="mdi mdi-pencil mdi-18px icon-button-class"></span>
        <span @click="selectForDelete(item)" class="mdi mdi-delete mdi-18px icon-button-class"></span>
      </template>

      <template v-slot:item.skidka="{item}">
        <div class="table-edit-container" v-if="selectedForSkidka===item.id">
          <div>
            <v-text-field v-model="skidka" dense outlined hide-details single-line type="number"/>
          </div>
          <span @click="saveSkidkaHandler" class="mdi mdi-check icon-button-class"></span>
          <span @click="cancelEditSkidka" class="mdi mdi-close icon-button-class"></span>
        </div>
        <div class="table-edit-container" v-else>
          <strong style="font-size: 18px;margin-left: 8px">{{ item.skidka }}</strong>
          <span @click="selectForEditSkidka(item)" class="mdi mdi-pencil icon-button-class"></span>
        </div>
      </template>
    </v-data-table>
    <v-pagination v-if="pageLength>1" v-model="page" :length="pageLength" circle></v-pagination>
    <diller-form v-if="dillerFormDialog" :diller="selectedDiller" @closeDialog="closeDillerFormDialog"
                 @initData="initData"/>
    <change-password-form v-if="changePasswordForm" :diller="selectedDiller" @closeDialog="closeChangePasswordDialog"/>
    <delete-confirm-dialog
      v-if="deleteConfirmDialog"
      :is-loading="isDeleting"
      @closeDialog="closeDeleteConfirmDialog"
      @deleteAccepted="deleteDillerHandler"
    />
    <error-component v-if="errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
    <loading-component v-if="isLoading"/>
    <div v-if="clientsListDialog" class="popUpBg " style="background-color: rgba(0,0,0,0.7)">
      <div class="popUpCardClass"
           style="width: 90%;background-color: white;top:20px;padding: 20px;bottom: 20px;transform: translateX(-50%);border-radius: 3px">
        <div style="border: 1px solid #a9a8a8;height: 100%;border-radius: 3px">
          <clients-list
            @closeDialog="closeClientsListDialog"
            :is-dialog="true"
            :diller="selectedDiller"
            style=""
          />
        </div>

      </div>
    </div>
    <change-balans-form v-if="balanceDialog" :diller="selectedDiller" @closeDialog="closeBalanceDialog"/>
    <balance-history v-if="balanceHistoryDialog" :diller="selectedDiller" @closeDialog="closeBalanceHistoryDialog"/>
    <fill-u-p-balans-form v-if="fillUpBalance" :diller="selectedDiller" @closeDialog="closeFillUpDialog"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import DillerForm from "../../components/diller/DillerForm";
import ChangePasswordForm from "../../components/diller/ChangePasswordForm";
import DeleteConfirmDialog from "../../components/DeleteConfirmDialog";
import ErrorComponent from "../../components/ErrorComponent";
import LoadingComponent from "../../components/LoadingComponent";
import ClientsList from "../../components/clients/ClientsList";
import ChangeBalansForm from "../../components/diller/ChangeBalansForm";
import BalanceHistory from "../../components/diller/BalanceHistory";
import FillUPBalansForm from "../../components/diller/FillUPBalansForm";

export default {
  components: {
    FillUPBalansForm,
    BalanceHistory,
    ChangeBalansForm,
    ClientsList, LoadingComponent, ErrorComponent, DeleteConfirmDialog, ChangePasswordForm, DillerForm
  },
  data() {
    return {
      headers: [
        {text: 'ID', value: 'id'},
        {text: "Doly ady", value: "full_name"},
        {text: 'Telefon belgisi', value: 'phone_number'},
        {text: 'Skidka:', value: "skidka", width: '200px'},
        {text: 'Kardlar:', value: "client_count"},
        {text: "Balans", value: "balans", width: '20%'},
        {text: "Hereketler", value: "actions", align: "right", width: '10%'}
      ],
      isLoading: false,
      page: 1,
      dillerFormDialog: false,
      selectedDiller: null,
      changePasswordForm: false,
      deleteConfirmDialog: false,
      isDeleting: false,
      errorMessage: null,
      selectedForSkidka: 0,
      skidka: null,
      clientsListDialog: false,
      balanceDialog: false,
      balanceHistoryDialog: false,
      fillUpBalance: false
    }
  },
  methods: {
    ...mapActions({
      loadAllDillers: 'dillers/loadAllDillers',
      removeDiller: 'dillers/removeDiller',
      updateSkidka: 'dillers/updateDiller'
    }),
    initData() {
      this.page = 1
      this.resetData()
    },
    openFillUpBalance(item) {
      this.selectedDiller = item
      this.fillUpBalance = true
    },
    closeFillUpDialog() {
      this.selectedDiller = null
      this.fillUpBalance = false
    },
    openBalanceHistoryDialog(item) {
      this.selectedDiller = item
      this.balanceHistoryDialog = true
    },
    closeBalanceHistoryDialog() {
      this.selectedDiller = null
      this.balanceHistoryDialog = false
    },
    openBalanceDialog(item) {
      this.selectedDiller = item
      this.balanceDialog = true
    },
    closeBalanceDialog() {
      this.selectedDiller = null
      this.balanceDialog = false
    },
    async deleteDillerHandler() {
      if (this.isDeleting) return
      this.isDeleting = true
      let success = await this.removeDiller(this.selectedDiller.id)
      this.isDeleting = false
      if (success) {
        this.closeDeleteConfirmDialog()
        await this.resetData()
      } else {
        this.errorMessage = "Cannot delete diller data. Please try again!"
      }
    },
    async resetData() {
      this.isLoading = true
      await this.loadAllDillers({page: this.page})
      this.isLoading = false
    },
    cancelEditSkidka() {
      this.skidka = null
      this.selectedForSkidka = 0
    },
    openClientsListDialog(item) {
      this.selectedDiller = item
      this.clientsListDialog = true
    },
    closeClientsListDialog() {
      this.selectedDiller = null
      this.clientsListDialog = false
    },
    async saveSkidkaHandler() {
      if (this.isLoading) return
      this.isLoading = true
      let success = await this.updateSkidka({diller_id: this.selectedForSkidka, data: {skidka: this.skidka}})
      this.isLoading = false
      if (success) {
        this.cancelEditSkidka()
      } else {
        this.errorMessage = "Cannot handler request. Please try again!!!"
      }
    },
    selectForEditSkidka(item) {
      this.selectedForSkidka = item.id
      this.skidka = item.skidka
    },
    closeDillerFormDialog() {
      this.selectedDiller = null
      this.dillerFormDialog = false
    },
    selectForEdit(item) {
      this.selectedDiller = item
      this.dillerFormDialog = true
    },
    selectForEditPassword(item) {
      this.selectedDiller = item
      this.changePasswordForm = true
    },
    closeChangePasswordDialog() {
      this.selectedDiller = null
      this.changePasswordForm = false
    },
    closeDeleteConfirmDialog() {
      this.selectedDiller = null
      this.deleteConfirmDialog = false
    },
    selectForDelete(item) {
      this.selectedDiller = item
      this.deleteConfirmDialog = true
    }
  },
  computed: {
    ...mapGetters({
      dillers: 'dillers/get_dillers_list',
      total: "dillers/get_total_count"
    }),
    pageLength() {
      return Math.ceil(this.total / 20)
    }
  },
  mounted() {
    this.resetData()

  }
}
</script>
