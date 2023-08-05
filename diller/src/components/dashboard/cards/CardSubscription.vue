<template>
  <div class="subscr">
    <table>
      <tr>
        <th>{{ $t("card-sub.table.th-1") }}</th>
        <th>{{ $t("card-sub.table.th-2") }}</th>
        <th>{{ $t("card-sub.table.th-3") }}</th>
        <th>{{ $t("card-sub.table.th-4") }}</th>
        <th>{{ $t("card-sub.table.th-7") }}</th>
      </tr>

      <tr v-for="history in history_list" :key="history.id">
        <td>{{ history.created_at }}</td>
        <td>
          {{ history.packet }}
        </td>
        <td>{{ history.srok }} ay</td>
        <td>{{ history.price }}</td>
        <td>{{ history.action }}</td>
      </tr>
    </table>
    <the-pagination
      :page-count="page_count"
      :click-handler="pageChanged"
      :prev-text="'<<'"
      :next-text="'>>'"
    ></the-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ThePagination from "@/components/layout/ThePagination.vue";
export default {
  components: {
    ThePagination,
  },
  data() {
    return {
      isLoading: true,
      page: 1,
      limit: 10,
    };
  },
  watch: {
    page() {
      this.loadHistoryList();
    },
  },
  methods: {
    ...mapActions({
      loadCard: "cards/loadCardInformation",
      loadHistory: "cards/loadCardSubscriptionHistory",
    }),
    async loadHistoryList() {
      this.isLoading = true;
      await this.loadHistory({
        card_id: this.card.id,
        page: this.page,
        limit: this.limit,
      });
      this.isLoading = false;
    },
    pageChanged(page) {
      this.page = page;
      this.loadHistoryList();
    },
  },
  computed: {
    ...mapGetters({
      card: "cards/get_card_information",
      history_list: "cards/get_history",
      total: "cards/get_total_count",
    }),
    page_count() {
      return Math.ceil(this.total / this.limit);
    },
  },
  async mounted() {
    try {
      if (!this.card) {
        await this.loadCard({ card_number: this.$route.params.c1 });
      }
    } catch (e) {
      this.$store.commit("set_error", "Not found");
    }
    this.isLoading = false;
    this.loadHistoryList();
  },
};
</script>
<style scoped>
.subscr {
  font-family: "Mulish";
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 35px;
  margin: 0;
  background-color: white;
  overflow-y: scroll;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border-bottom: 1px solid #f3f4f5;
  text-align: left;
  padding: 10px;
}

tr:first-child {
  background-color: #f3f4f5;
}

@media (width<=790px) {
  table th,
  table td {
    font-size: 14px;
  }
}
</style>
