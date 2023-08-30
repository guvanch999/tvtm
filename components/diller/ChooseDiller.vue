<template>
  <div style="position: absolute;top:0;left: 0;width: 100%;height: 100%;background-color: white">
    <v-card style="position: relative;height: 100%" tile>
      <v-card-title>
        Dillerler
        <v-spacer/>
        <v-btn @click="closeDialog" small depressed style="background-color: darkred;color: white">
          <span class="mdi mdi-close mdi-18px"></span>
        </v-btn>
      </v-card-title>
      <v-divider>
      </v-divider>
      <v-card-text style="height: 75%;overflow-y: auto">
        <v-data-table
          :headers="headers"
          :items="dillers"
          hide-default-footer
          disable-pagination
          calculate-widths
          :loading="isLoading"
          selectable-key="id"
          show-select
          single-select
          v-model="selected"
        >
          <template v-slot:item.cards="{item}">
            0
          </template>
          <template v-slot:item.skidka="{item}">
            <div class="table-edit-container">
              <strong style="font-size: 18px;margin-left: 8px">{{ item.skidka }}</strong>
            </div>
          </template>
        </v-data-table>
        <v-pagination v-if="pageLength>1" v-model="page" :length="pageLength" circle></v-pagination>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn @click="closeDialog" depressed small>cancel</v-btn>
        <v-btn @click="selectHandler" :disabled="!!!selected.length" depressed small
               style="background-color: #32BCA3;color: white">save
        </v-btn>
      </v-card-actions>

      <error-component v-if="errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
      <loading-component v-if="isLoading"/>
    </v-card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import ErrorComponent from "../../components/ErrorComponent";
import LoadingComponent from "../../components/LoadingComponent";

export default {
  props: {
    defaultChoosed: {
      type: Object,
      default: null
    },

  },
  components: {LoadingComponent, ErrorComponent},
  data() {
    return {
      headers: [
        {text: 'ID', value: 'id'},
        {text: "Doly ady", value: "full_name"},
        {text: 'Telefon belgisi', value: 'phone_number'},
        {text: 'Skidka:', value: "skidka", width: '200px'},
        {text: 'Kardlar:', value: "cards"},
        {text: "Hereketler", value: "actions", align: "right", width: '10%'}
      ],
      isLoading: false,
      page: 1,
      selected: [],
      errorMessage: null
    }
  },
  watch: {
    page() {
      this.loadMore()
    }
  },
  methods: {
    ...mapActions({
      loadAllDillers: 'dillers/loadAllDillers',
    }),
    initData() {
      if (this.defaultChoosed) {
        this.selected.push(this.defaultChoosed)
      }
    },
    async resetData() {
      this.page = 1
      await this.loadMore()
      this.initData()
    },
    async loadMore() {
      this.isLoading = true
      await this.loadAllDillers({page: this.page})
      this.isLoading = false
    },
    closeDialog() {
      this.$emit("closeDialog")
    },
    selectHandler() {
      this.$emit("selectItems", this.selected[0])
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
