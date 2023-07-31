<template>
  <div class="container">
    <section class="cards_-info">
      <the-cards :title="`${$t('cards.h1')}`"></the-cards>
    </section>

    <base-card class="filter">
      <div class="filter__search">
        <form>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.3952 15.9761C19.852 12.8209 19.63 8.25612 16.7295 5.3556C13.5887 2.2148 8.49642 2.2148 5.35561 5.3556C2.2148 8.49642 2.2148 13.5887 5.35561 16.7295C8.25614 19.63 12.821 19.8519 15.9762 17.3952C15.9897 17.4106 16.0039 17.4257 16.0186 17.4403L20.2838 21.7055C20.6764 22.0982 21.313 22.0982 21.7056 21.7055C22.0981 21.3129 22.0981 20.6764 21.7056 20.2838L17.4404 16.0186C17.4256 16.0039 17.4105 15.9898 17.3952 15.9761ZM15.2426 6.75737C17.5858 9.10051 17.5858 12.8995 15.2426 15.2427C12.8995 17.5858 9.1005 17.5858 6.75736 15.2427C4.41421 12.8995 4.41421 9.10051 6.75736 6.75737C9.1005 4.41421 12.8995 4.41421 15.2426 6.75737Z"
              fill="#8f92a1"
            />
          </svg>
          <input v-model="query" type="search" placeholder="Search" />
        </form>
        <div class="filter_number">
          {{ $t("cards.filter") }}
          <select name="filter" id="filter" @change="pageLimitChanged($event)">
            <optgroup>
              <option
                v-for="count in limit_list"
                :key="count"
                :value="count"
                :selected="count === limit"
              >
                {{ count }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="filter__filter">
        <table>
          <tr>
            <th>{{ $t("cards.table.th-1") }}</th>
            <th>{{ $t("cards.table.th-2") }}</th>
            <th>{{ $t("cards.table.th-3") }}</th>
            <th>{{ $t("cards.table.th-4") }}</th>
            <th>{{ $t("cards.table.th-5") }}</th>
            <th>{{ $t("cards.table.th-6") }}</th>
          </tr>
          <tr v-for="card in cards" :key="card.id">
            <td>true</td>
            <td>
              <router-link
                :to="`/${$i18n.locale}/cards/${card.cardnumber}/about`"
                >{{ card.cardnumber }}</router-link
              >
            </td>
            <td>{{ card.date_start }} - {{ card.date_end }}</td>
            <td>{{ `${card.name} ${card.surname}` }}</td>
            <td>{{ card.telnumber }}</td>
            <td>{{ card.note }}</td>
          </tr>
        </table>
      </div>
      <the-pagination
        :page-count="page_count"
        :click-handler="pageChanged"
        :prev-text="'<<'"
        :next-text="'>>'"
      ></the-pagination>
    </base-card>
  </div>
</template>

<script>
import TheCards from "../layout/TheCards.vue";
import ThePagination from "../layout/ThePagination.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    TheCards,
    ThePagination,
  },
  data() {
    return {
      isLoading: false,
      limit_list: [10, 20, 30, 40, 50],
      currentPage: 1,
      limit: 10,
      query: "",
      add: false,
    };
  },
  watch: {
    limit() {
      this.resetCardList();
    },
    query() {
      this.resetCardList();
    },
  },
  methods: {
    ...mapActions({
      loadCards: "cards/loadCards",
    }),
    pageChanged(page) {
      this.currentPage = page;
      this.loadCardList();
    },
    pageLimitChanged(event) {
      this.limit = event.target.value;
    },
    resetCardList() {
      this.currentPage = 1;
      this.loadCardList();
    },
    async loadCardList() {
      this.isLoading = true;
      try {
        await this.loadCards({
          page: this.currentPage,
          limit: this.limit,
          query: this.query,
        });
      } catch (e) {
        console.log(e);
        this.$store.commit("set_error", "Cannot load card list");
        this.$router.push({path:'/'})
      }
    },
  },
  computed: {
    ...mapGetters({
      cards: "cards/get_cards",
      total: "cards/get_total_count",
    }),
    local() {
      return this.$i18n.locale;
    },
    page_count() {
      return Math.ceil(this.total / this.limit);
    },
  },
  mounted() {
    this.loadCardList();
    console.log(this.$i18n.locale);
  },
};
</script>

<style scoped>
.container {
  margin: 10px 0 0 15px;
  border-top-left-radius: 10px;
  background-color: rgba(141, 143, 161, 0.1);
  font-weight: bolder;
  padding: 10px 30px;
}

.filter {
  background-color: white;
}

.filter__search {
  display: flex;
  justify-content: space-between;
}

.filter__search form {
  width: 500px;
  display: flex;
  align-items: center;
  padding: 10px 5px;
  background-color: #f3f4f5;
  border-radius: 10px;
}

.filter__search input {
  border: none;
  background-color: transparent;
  width: 100%;
  outline: none;
}

.filter__search input::placeholder {
  color: #8f92a1;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
}

.filter__search div {
  padding: 10px 5px;
  border-radius: 10px;
  background-color: #f3f4f5;
  color: #8f92a1;
  font-weight: 500;
}

.filter__search select {
  border: none;
  background-color: transparent;
  font-size: 16px;
}

.first__nav {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 145px;
  border-radius: 10px;
  background-color: #f3f4f5;
}

.li {
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 1.34px;
  padding: 10px 0;
}

.li--pad-1 {
  padding-left: 10px;
}

.li--pad {
  padding-left: 30px;
}

.second__nav {
  list-style: none;
  padding: 0;
}

table {
  margin-top: 20px;
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
.className {
  display: flex;
  justify-content: center;
}

@media (width<=790px) {
  .filter {
    padding: 25px !important;
  }
  .filter__search form {
    width: 400px;
  }

  @media (width<=690px) {
    .filter {
      padding: 20px !important;
    }

    .filter__search {
      display: block;
    }
    .filter_number {
      margin-top: 10px;
      width: 130px;
    }
    .filter__search form {
      width: 300px;
    }
    table th,
    table td {
      font-size: 14px;
    }

    @media (width<=590px) {
      .filter__filter {
        overflow-y: scroll;
      }
      .filter {
        padding: 15px !important;
      }
      @media (width<=470px) {
        .filter__search form {
          width: 260px;
        }
      }
    }
  }
}
</style>
