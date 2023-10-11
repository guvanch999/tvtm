<template>
  <div style="position: relative">
    <v-card-title>News
      <v-spacer/>
      <v-btn @click="newsFormDialog = true" small depressed style="background-color: #32BCA3;color: white">
        <span class="mdi mdi-plus mdi-18px"></span>
      </v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table
      :items="news"
      :headers="headers"
      disable-pagination
      hide-default-footer
    >
      <template v-slot:item.actions="{item}">
        <span @click="selectForEdit(item)" class="mdi mdi-pencil mdi-18px icon-button-class"></span>
        <span @click="selectForDelete(item)" class="mdi mdi-delete mdi-18px icon-button-class"></span>
      </template>
      <template v-slot:item.text="{item}">
        <div v-html="item.text" style="max-height: 100px;padding: 10px;overflow-y: auto">
        </div>
      </template>
    </v-data-table>
    <news-form v-if="newsFormDialog" :news="selectedNews" @closeDialog="closeNewsFormDialog" @resetList="resetList"/>
    <v-pagination
      v-model="page"
      v-if="pageCount>1"
      :length="pageCount"
      circle
      :total-visible="10"
    />
    <loading-component v-if="isLoading"/>
    <delete-confirm-dialog
      v-if="deleteConfirmDialog"
      :is-loading="isDeleting"
      @closeDialog="closeDeleteConfirmDialog"
      @deleteAccepted="deleteNewsHandler"
      message="Be carefully deleted data cant be restored"/>
    <error-component v-if="errorMessage" :message="errorMessage" @closeError="errorMessage = null"/>
  </div>
</template>
<script>
import LoadingComponent from "../../components/LoadingComponent";
import {mapActions, mapGetters} from "vuex";
import NewsForm from "../../components/news/NewsForm";
import DeleteConfirmDialog from "../../components/DeleteConfirmDialog";
import ErrorComponent from "../../components/ErrorComponent";

export default {
  components: {ErrorComponent, DeleteConfirmDialog, NewsForm, LoadingComponent},
  data() {
    return {
      isLoading: false,
      page: 1,
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Title', value: 'title'},
        {text: 'Type', value: 'type'},
        {text: 'Text', value: 'text'},
        {text: 'Actions', value: 'actions', align: 'right', width: '10%'}
      ],
      newsFormDialog: false,
      selectedNews: null,
      deleteConfirmDialog: false,
      isDeleting: false,
      errorMessage: null
    }
  },
  methods: {
    ...mapActions({
      loadNews: 'news/loadAllNews',
      deleteNews: "news/removeNews"
    }),
    async loadList() {
      this.isLoading = true
      await this.loadNews({page: this.page})
      this.isLoading = false
    },
    async deleteNewsHandler() {
      if (this.isDeleting) return
      this.isDeleting = true
      let success = await this.deleteNews(this.selectedNews.id)
      this.isDeleting = false
      if (success) {
        this.closeDeleteConfirmDialog()
        this.resetList()
      } else {
        this.errorMessage = "Cannot delete news data. Please try again."
      }
    },
    closeDeleteConfirmDialog() {
      this.selectedNews = null
      this.deleteConfirmDialog = false
    },
    resetList() {
      this.page = 1
      this.loadList()
    },
    closeNewsFormDialog() {
      this.selectedNews = null
      this.newsFormDialog = false
    },
    selectForEdit(item) {
      this.selectedNews = item
      this.newsFormDialog = true
    },
    selectForDelete(item) {
      this.selectedNews = item
      this.deleteConfirmDialog = true
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/get_news_list',
      total: 'news/get_total_count'
    }),
    pageCount() {
      return Math.ceil(this.total / 20)
    }
  },
  mounted() {
    this.loadList()
  }
}
</script>
