<template>
  <div>
    <h1>{{ $t("news.h1") }}</h1>
    <ul>
      <news-item
        v-for="header in news"
        :key="header.id"
        :title="header.title"
        :date="header.created_at"
        :text="header.text"
      ></news-item>
    </ul>
    <the-pagination
      :page-count="page_count"
      :click-handler="onPageChange"
      :prev-text="'<<'"
      :next-text="'>>'"
    ></the-pagination>
  </div>
</template>

<script>
import NewsItem from "./news/NewsItem.vue";
import ThePagination from "../layout/ThePagination.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    NewsItem,
    ThePagination,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      isLoading: false,
    };
  },
  watch: {
    limit() {
      this.resetNewsList();
    },
  },
  methods: {
    ...mapActions({
      loadNews: "dashboard/loadNews",
    }),
    onPageChange(page) {
      this.page = page;
      this.loadNewsList();
    },
    resetNewsList() {
      this.page = 1;
      this.loadNewsList();
    },
    async loadNewsList() {
      this.isLoading = true;
      try {
        await this.loadNews({
          page: this.page,
          limit: this.limit,
        });
      } catch (e) {
        this.$store.commit("set_error", "Cannot load news");
        this.$router.push({ path: "/" });
      }
    },
  },
  computed: {
    ...mapGetters({
      news: "dashboard/get_news",
      total: "dashboard/get_total_count",
    }),
    page_count() {
      return Math.ceil(this.total / this.limit);
    },
  },
  mounted() {
    this.loadNewsList();
  },
};
</script>

<style scoped>
div {
  margin: 10px 0 0 15px;
 border-radius: 10px;
  background-color: rgba(141, 143, 161, 0.1);
  padding: 10px 30px;
  height: 100vh;
  border-radius: 10px;
  background-color: rgba(141, 143, 161, 0.1);
  padding: 10px 30px;
  min-height: 100vh;
}

h1 {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
@media (width<=800px) {
  h1 {
    font-size: 20px;
    line-height: 25px;
  }
  div {
    margin: 5px 0 0 10px;
    border-radius: 5px;
    padding: 5px 10px;
    min-height: 100vh;
  }
}
@media (width<=590px) {
  h1 {
    font-size: 20px;
    line-height: 15px;
  }
  div {
    margin: 5px 0 0 5px;
    border-radius: 5px;
    padding: 5px 10px;
    min-height: 100vh;
  }

}
</style>
