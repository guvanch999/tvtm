<template>
  <div class="popUpBg">
    <div class="popUpCardClass" style="width: 50%">
      <v-card tile style="position: relative">
        <v-card-title>
          News form
          <v-spacer/>
          <span @click="closeDialog" class="mdi mdi-close mdi-18px icon-button-class"></span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="max-height: 60vh;overflow-y: auto">
          <label>News title:</label>
          <v-text-field v-model="title" outlined dense></v-text-field>
          <label>News type:</label>
          <v-text-field v-model="type" outlined dense></v-text-field>
          <div class="select-with-component">
            <div>
              Diller: <strong>{{ choosedDiller ? choosedDiller.full_name : "All" }}</strong>
            </div>
            <v-btn @click="chooseDillerDialog = true" small depressed style="color: white;background-color: #32BCA3">
              select
            </v-btn>
          </div>
          <label>News content:</label>
          <rich-text-editor v-model="text"/>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="closeDialog" depressed small>cancel</v-btn>
          <v-btn @click="saveHandler" depressed small style="background-color: #32BCA3;color: white">save</v-btn>
        </v-card-actions>
        <loading-component v-if="isLoading"/>
        <error-component v-if="!!errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
        <choose-diller v-if="chooseDillerDialog" @closeDilaog="chooseDillerDialog = false"
                       @selectItems="dillersSelected" :default-choosed="choosedDiller"/>
      </v-card>
    </div>
  </div>
</template>

<script>
import LoadingComponent from "../LoadingComponent";
import RichTextEditor from "./RichTextEditor";
import {mapActions} from "vuex";
import ErrorComponent from "../ErrorComponent";
import ChooseDiller from "../diller/ChooseDiller";

export default {
  props: {
    news: {
      type: Object,
      default: null
    }
  },
  components: {ChooseDiller, ErrorComponent, RichTextEditor, LoadingComponent},
  data() {
    return {
      isLoading: false,
      text: null,
      title: null,
      type: null,
      errorMessage: null,
      chooseDillerDialog: false,
      choosedDiller: null
    }
  },
  methods: {
    ...mapActions({
      createNews: 'news/createNews',
      updateNews: 'news/updateNews'
    }),
    resetData() {
      this.text = null
      this.title = null
      this.type = null
      this.choosedDiller = null
      if (this.news) {
        this.title = this.news.title
        this.text = this.news.text
        this.type = this.news.type
        this.choosedDiller = this.news.diller
      }
    },
    dillersSelected(item) {
      this.choosedDiller = item
      this.chooseDillerDialog = false
    },
    closeDialog() {
      this.$emit("closeDialog")
    },
    async saveHandler() {
      if (this.isLoading) return
      this.isLoading = true
      let success = false
      let body = {
        title: this.title,
        text: this.text,
        type: this.type,
      }
      if (this.choosedDiller) {
        body['diller_id'] = this.choosedDiller.id
      }
      if (this.news) {
        success = await this.updateNews({news_id: this.news.id, data: body})
      } else {
        success = await this.createNews(body)
      }
      this.isLoading = false
      if (success) {
        this.$emit("resetList")
        this.closeDialog()
      } else {
        this.errorMessage = "Cannot create news. Please try again!!!"
      }
    }
  },
  mounted() {
    this.resetData()
  }
}
</script>
