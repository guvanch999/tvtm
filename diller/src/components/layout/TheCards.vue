<template>
  <MqResponsive target="sm-">
    <div class="header">
      <h1>{{ title }}</h1>
      <base-button
        @click="createDialog = true"
        style="background-color: #3d5cb7; padding: 10px"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.5H13.5"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 16.5H8"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 16.5H14.5"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 6.25H22"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M19.25 9V3.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </base-button>
    </div>
  </MqResponsive>
  <MqResponsive target="md-xl">
    <div class="header">
      <h1>{{ title }}</h1>
      <base-button class="btn" @click="createDialog = true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.5H13.5"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 16.5H8"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 16.5H14.5"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 6.25H22"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M19.25 9V3.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        {{ $t("the-cards.btn") }}
      </base-button>
    </div>
  </MqResponsive>

  <div class="cards">
    <base-card class="card__item">
      <svg
        width="87"
        height="87"
        viewBox="0 0 87 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="card__image"
      >
        <rect
          width="87"
          height="87"
          rx="43.5"
          fill="#3D5CB7"
          fill-opacity="0.1"
        />
        <path
          d="M25.23 25.2305H61.7699C62.3083 25.2305 62.8247 25.4443 63.2054 25.825C63.5861 26.2057 63.7999 26.7221 63.7999 27.2605V59.7405C63.7999 60.2789 63.5861 60.7952 63.2054 61.1759C62.8247 61.5566 62.3083 61.7705 61.7699 61.7705H25.23C24.6916 61.7705 24.1752 61.5566 23.7945 61.1759C23.4138 60.7952 23.2 60.2789 23.2 59.7405V27.2605C23.2 26.7221 23.4138 26.2057 23.7945 25.825C24.1752 25.4443 24.6916 25.2305 25.23 25.2305ZM59.7399 43.5005H27.26V57.7105H59.7399V43.5005ZM59.7399 35.3805V29.2905H27.26V35.3805H59.7399Z"
          fill="#3D5CB7"
        />
      </svg>
      <div class="card__info">
        <span>{{ $t("the-cards.cards.c1") }}</span>
        20
      </div>
    </base-card>

    <base-card class="card__item">
      <svg
        width="87"
        height="87"
        viewBox="0 0 87 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="card__image"
      >
        <rect
          width="87"
          height="87"
          rx="43.5"
          fill="#5bb5a2"
          fill-opacity="0.1"
        />
        <path
          d="M25.23 25.2305H61.7699C62.3083 25.2305 62.8247 25.4443 63.2054 25.825C63.5861 26.2057 63.7999 26.7221 63.7999 27.2605V59.7405C63.7999 60.2789 63.5861 60.7952 63.2054 61.1759C62.8247 61.5566 62.3083 61.7705 61.7699 61.7705H25.23C24.6916 61.7705 24.1752 61.5566 23.7945 61.1759C23.4138 60.7952 23.2 60.2789 23.2 59.7405V27.2605C23.2 26.7221 23.4138 26.2057 23.7945 25.825C24.1752 25.4443 24.6916 25.2305 25.23 25.2305ZM59.7399 43.5005H27.26V57.7105H59.7399V43.5005ZM59.7399 35.3805V29.2905H27.26V35.3805H59.7399Z"
          fill="#5bb5a2"
        />
      </svg>
      <div class="card__info">
        <span>{{ $t("the-cards.cards.c2") }}</span>
        20
      </div>
    </base-card>

    <base-card class="card__item">
      <svg
        width="87"
        height="87"
        viewBox="0 0 87 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="card__image"
      >
        <rect
          width="87"
          height="87"
          rx="43.5"
          fill="#e39827"
          fill-opacity="0.1"
        />
        <path
          d="M25.23 25.2305H61.7699C62.3083 25.2305 62.8247 25.4443 63.2054 25.825C63.5861 26.2057 63.7999 26.7221 63.7999 27.2605V59.7405C63.7999 60.2789 63.5861 60.7952 63.2054 61.1759C62.8247 61.5566 62.3083 61.7705 61.7699 61.7705H25.23C24.6916 61.7705 24.1752 61.5566 23.7945 61.1759C23.4138 60.7952 23.2 60.2789 23.2 59.7405V27.2605C23.2 26.7221 23.4138 26.2057 23.7945 25.825C24.1752 25.4443 24.6916 25.2305 25.23 25.2305ZM59.7399 43.5005H27.26V57.7105H59.7399V43.5005ZM59.7399 35.3805V29.2905H27.26V35.3805H59.7399Z"
          fill="#e39827"
        />
      </svg>
      <div class="card__info">
        <span>{{ $t("the-cards.cards.c3") }}</span>
        20
      </div>
    </base-card>
    <add-card v-if="createDialog" @close-dialog="closeDialog" />
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import { mapGetters } from "vuex";
import AddCard from "@/components/dashboard/cards/AddCard";

export default {
  components: {
    AddCard,
    MqResponsive,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      createDialog: false,
    };
  },
  methods: {
    getCards() {
      console.log(this.cards);
    },
    closeDialog() {
      this.createDialog = false;
    },
  },
  computed: {
    ...mapGetters({
      cards: "cards/get_cards",
    }),
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
}

.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.card__item {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 10px;
  width: 400px;
  background-color: white;
}

.card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 47px;
  line-height: 80px;
}

span {
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: #a8a8a8;
}

@media (width<=1600px) {
  .cards {
    gap: 20px;
  }
  @media (width<=1020px) {
    .card__image {
      width: 70px;
      height: 70px;
    }
    .card__item {
      padding: 25px !important;
    }
    .card__info {
      font-size: 44px;
    }
    span {
      font-size: 22px;
    }
    @media (width<=920px) {
      .card__item {
        padding: 20px !important;
      }
      .card__info {
        font-size: 42px;
      }
      span {
        font-size: 20px;
      }
      @media (width<=860px) {
        .card__item {
          padding: 15px !important;
        }
        .card__info {
          font-size: 40px;
        }
        span {
          font-size: 18px;
        }
        @media (width<=810px) {
          .card__item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          @media (width<=720px) {
            .header h1 {
              font-size: 28px;
            }
            @media (width<=670px) {
              .header h1 {
                font-size: 24px;
              }
              .header button {
                padding: 10px !important;
              }
              @media (width<=570px) {
                span {
                  font-size: 14px;
                }
                .header button {
                  margin-bottom: 10px;
                }
              }
            }
          }
          @media (width<=510px) {
            span {
              font-size: 11px;
            }
            button {
              padding: 10px !important;
            }
          }
        }
      }
    }
  }
}
</style>
