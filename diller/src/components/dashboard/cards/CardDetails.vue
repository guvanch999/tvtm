<template>
  <div>
    <div v-if="!isLoading" class="container">
      <the-cards
        class="card-number"
        :title="`${$t('card-details.h1')}: ${card.cardnumber}`"
      >
      </the-cards>
      <mq-responsive target="md-">
        <img
          src="../../../assets/menu-svg.svg"
          alt="Menu icon"
          @click="openNav"
          class="open_menu"
        />
        <div class="md_div" :class="{ active: active }">
          <ul class="md_nav">
            <router-link
              :to="`/${$i18n.locale}/cards/${card.cardnumber}/about`"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke"
                  d="M2.16479 13.3315H18.8336"
                  stroke="#3d5cb7"
                  stroke-width="1.47078"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M18.8336 11.047V18.0577C18.8042 20.8522 18.0394 21.5581 15.1272 21.5581H5.87118C2.91002 21.5581 2.16479 20.8228 2.16479 17.9008V11.047C2.16479 8.39958 2.78252 7.54653 5.10635 7.40926C5.34168 7.39945 5.59664 7.38965 5.87118 7.38965H15.1272C18.0884 7.38965 18.8336 8.12504 18.8336 11.047Z"
                  stroke="#3d5cb7"
                  stroke-width="1.47078"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M21.7751 7.56651V14.4203C21.7751 17.0677 21.1574 17.9208 18.8336 18.0581V11.0474C18.8336 8.12541 18.0884 7.39002 15.1272 7.39002H5.87116C5.59661 7.39002 5.34165 7.39983 5.10632 7.40963C5.13574 4.61515 5.90057 3.90918 8.81271 3.90918H18.0688C21.0299 3.90918 21.7751 4.64457 21.7751 7.56651Z"
                  stroke="#3d5cb7"
                  stroke-width="1.47078"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M5.35144 18.4307H7.0379"
                  stroke="#3d5cb7"
                  stroke-width="1.47078"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M9.13611 18.4307H12.5091"
                  stroke="#3d5cb7"
                  stroke-width="1.47078"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $t("card-details.nav.nav-1") }}
            </router-link>
            <router-link
              :to="`/${$i18n.locale}/cards/${card.cardnumber}/subscription`"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2479 27.6803C21.8031 27.6803 27.9279 21.5555 27.9279 14.0003C27.9279 6.44505 21.8031 0.320312 14.2479 0.320312C6.69261 0.320312 0.567871 6.44505 0.567871 14.0003C0.567871 21.5555 6.69261 27.6803 14.2479 27.6803ZM14.248 24.9441C20.2922 24.9441 25.192 20.0443 25.192 14.0001C25.192 7.95587 20.2922 3.05607 14.248 3.05607C8.20379 3.05607 3.304 7.95587 3.304 14.0001C3.304 20.0443 8.20379 24.9441 14.248 24.9441ZM15.616 12.6321V7.16007H12.88V15.3681H19.72V12.6321H15.616Z"
                  fill="#3d5cb7"
                />
              </svg>

              {{ $t("card-details.nav.nav-2") }}
            </router-link>
            <router-link
              :to="`/${$i18n.locale}/cards/${card.cardnumber}/active`"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2479 27.6803C21.8031 27.6803 27.9279 21.5555 27.9279 14.0003C27.9279 6.44505 21.8031 0.320312 14.2479 0.320312C6.69261 0.320312 0.567871 6.44505 0.567871 14.0003C0.567871 21.5555 6.69261 27.6803 14.2479 27.6803ZM14.248 24.9441C20.2922 24.9441 25.192 20.0443 25.192 14.0001C25.192 7.95587 20.2922 3.05607 14.248 3.05607C8.20379 3.05607 3.304 7.95587 3.304 14.0001C3.304 20.0443 8.20379 24.9441 14.248 24.9441ZM15.616 12.6321V7.16007H12.88V15.3681H19.72V12.6321H15.616Z"
                  fill="#3d5cb7"
                />
              </svg>
              {{ $t("card-details.nav.nav-3") }}
            </router-link>
            <router-link :to="`/${$i18n.locale}/cards/${card.cardnumber}/buy`">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke"
                  d="M9.15747 12.1005C9.15747 12.9136 9.79104 13.5788 10.5619 13.5788H12.1458C12.8216 13.5788 13.3707 12.998 13.3707 12.2906C13.3707 11.5197 13.0328 11.2452 12.5365 11.0657L10.0022 10.1787C9.49537 9.99916 9.15747 9.72462 9.15747 8.95378C9.15747 8.2463 9.70656 7.66553 10.3824 7.66553H11.9663C12.7477 7.67609 13.3812 8.33077 13.3812 9.14385"
                  stroke="#3D5CB7"
                  stroke-width="1.58391"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M11.2693 13.6313V14.4127"
                  stroke="#3D5CB7"
                  stroke-width="1.58391"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M11.2693 6.83105V7.65469"
                  stroke="#3D5CB7"
                  stroke-width="1.58391"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M11.2588 19.0483C15.9184 19.0483 19.6958 15.2709 19.6958 10.6113C19.6958 5.95168 15.9184 2.17432 11.2588 2.17432C6.59915 2.17432 2.82178 5.95168 2.82178 10.6113C2.82178 15.2709 6.59915 19.0483 11.2588 19.0483Z"
                  stroke="#3D5CB7"
                  stroke-width="1.58391"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M14.416 21.0544C15.3664 22.3955 16.9186 23.2719 18.6926 23.2719C21.5753 23.2719 23.9195 20.9277 23.9195 18.045C23.9195 16.2921 23.0536 14.7399 21.7337 13.7896"
                  stroke="#3D5CB7"
                  stroke-width="1.58391"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $t("card-details.nav.nav-4") }}
            </router-link>

            <router-link
              :to="`/${$i18n.locale}/cards/${card.cardnumber}/change`"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke"
                  d="M11.7776 6.41943H21.5828"
                  stroke="#3D5CB7"
                  stroke-width="1.47078"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M13.9543 2.92822H19.406C21.1513 2.92822 21.5828 3.35965 21.5828 5.08536V9.1153C21.5828 10.841 21.1513 11.2724 19.406 11.2724H13.9543C12.209 11.2724 11.7776 10.841 11.7776 9.1153V5.08536C11.7776 3.35965 12.209 2.92822 13.9543 2.92822Z"
                  stroke="#3D5CB7"
                  stroke-width="1.47078"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M1.97241 17.6953H11.7776"
                  stroke="#3D5CB7"
                  stroke-width="1.47078"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M4.14916 14.2046H9.60085C11.3462 14.2046 11.7776 14.636 11.7776 16.3617V20.3917C11.7776 22.1174 11.3462 22.5488 9.60085 22.5488H4.14916C2.40384 22.5488 1.97241 22.1174 1.97241 20.3917V16.3617C1.97241 14.636 2.40384 14.2046 4.14916 14.2046Z"
                  stroke="#3D5CB7"
                  stroke-width="1.47078"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M21.5828 15.6753C21.5828 19.4699 18.5138 22.5389 14.7192 22.5389L15.7487 20.823"
                  stroke="#3D5CB7"
                  stroke-width="1.47078"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke"
                  d="M1.97241 9.79185C1.97241 5.99725 5.04144 2.92822 8.83604 2.92822L7.80651 4.64413"
                  stroke="#3D5CB7"
                  stroke-width="1.47078"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $t("card-details.nav.nav-5") }}
            </router-link>
          </ul>
          <img
            src="../../../assets/cross-svg.svg"
            alt="Cross icon"
            @click="closeNav"
          />
        </div>
      </mq-responsive>
      <mq-responsive target="lg+">
        <ul class="large_nav">
          <router-link :to="`/${$i18n.locale}/cards/${card.cardnumber}/about`">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke"
                d="M2.16479 13.3315H18.8336"
                stroke="#3d5cb7"
                stroke-width="1.47078"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M18.8336 11.047V18.0577C18.8042 20.8522 18.0394 21.5581 15.1272 21.5581H5.87118C2.91002 21.5581 2.16479 20.8228 2.16479 17.9008V11.047C2.16479 8.39958 2.78252 7.54653 5.10635 7.40926C5.34168 7.39945 5.59664 7.38965 5.87118 7.38965H15.1272C18.0884 7.38965 18.8336 8.12504 18.8336 11.047Z"
                stroke="#3d5cb7"
                stroke-width="1.47078"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M21.7751 7.56651V14.4203C21.7751 17.0677 21.1574 17.9208 18.8336 18.0581V11.0474C18.8336 8.12541 18.0884 7.39002 15.1272 7.39002H5.87116C5.59661 7.39002 5.34165 7.39983 5.10632 7.40963C5.13574 4.61515 5.90057 3.90918 8.81271 3.90918H18.0688C21.0299 3.90918 21.7751 4.64457 21.7751 7.56651Z"
                stroke="#3d5cb7"
                stroke-width="1.47078"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M5.35144 18.4307H7.0379"
                stroke="#3d5cb7"
                stroke-width="1.47078"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M9.13611 18.4307H12.5091"
                stroke="#3d5cb7"
                stroke-width="1.47078"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {{ $t("card-details.nav.nav-1") }}
          </router-link>
          <router-link
            :to="`/${$i18n.locale}/cards/${card.cardnumber}/subscription`"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2479 27.6803C21.8031 27.6803 27.9279 21.5555 27.9279 14.0003C27.9279 6.44505 21.8031 0.320312 14.2479 0.320312C6.69261 0.320312 0.567871 6.44505 0.567871 14.0003C0.567871 21.5555 6.69261 27.6803 14.2479 27.6803ZM14.248 24.9441C20.2922 24.9441 25.192 20.0443 25.192 14.0001C25.192 7.95587 20.2922 3.05607 14.248 3.05607C8.20379 3.05607 3.304 7.95587 3.304 14.0001C3.304 20.0443 8.20379 24.9441 14.248 24.9441ZM15.616 12.6321V7.16007H12.88V15.3681H19.72V12.6321H15.616Z"
                fill="#3d5cb7"
              />
            </svg>

            {{ $t("card-details.nav.nav-2") }}
          </router-link>
          <router-link :to="`/${$i18n.locale}/cards/${card.cardnumber}/active`">
            <svg
              width="23"
              height="23"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2479 27.6803C21.8031 27.6803 27.9279 21.5555 27.9279 14.0003C27.9279 6.44505 21.8031 0.320312 14.2479 0.320312C6.69261 0.320312 0.567871 6.44505 0.567871 14.0003C0.567871 21.5555 6.69261 27.6803 14.2479 27.6803ZM14.248 24.9441C20.2922 24.9441 25.192 20.0443 25.192 14.0001C25.192 7.95587 20.2922 3.05607 14.248 3.05607C8.20379 3.05607 3.304 7.95587 3.304 14.0001C3.304 20.0443 8.20379 24.9441 14.248 24.9441ZM15.616 12.6321V7.16007H12.88V15.3681H19.72V12.6321H15.616Z"
                fill="#3d5cb7"
              />
            </svg>

            {{ $t("card-details.nav.nav-3") }}
          </router-link>
          <router-link :to="`/${$i18n.locale}/cards/${card.cardnumber}/buy`">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke"
                d="M9.15747 12.1005C9.15747 12.9136 9.79104 13.5788 10.5619 13.5788H12.1458C12.8216 13.5788 13.3707 12.998 13.3707 12.2906C13.3707 11.5197 13.0328 11.2452 12.5365 11.0657L10.0022 10.1787C9.49537 9.99916 9.15747 9.72462 9.15747 8.95378C9.15747 8.2463 9.70656 7.66553 10.3824 7.66553H11.9663C12.7477 7.67609 13.3812 8.33077 13.3812 9.14385"
                stroke="#3D5CB7"
                stroke-width="1.58391"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M11.2693 13.6313V14.4127"
                stroke="#3D5CB7"
                stroke-width="1.58391"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M11.2693 6.83105V7.65469"
                stroke="#3D5CB7"
                stroke-width="1.58391"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M11.2588 19.0483C15.9184 19.0483 19.6958 15.2709 19.6958 10.6113C19.6958 5.95168 15.9184 2.17432 11.2588 2.17432C6.59915 2.17432 2.82178 5.95168 2.82178 10.6113C2.82178 15.2709 6.59915 19.0483 11.2588 19.0483Z"
                stroke="#3D5CB7"
                stroke-width="1.58391"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M14.416 21.0544C15.3664 22.3955 16.9186 23.2719 18.6926 23.2719C21.5753 23.2719 23.9195 20.9277 23.9195 18.045C23.9195 16.2921 23.0536 14.7399 21.7337 13.7896"
                stroke="#3D5CB7"
                stroke-width="1.58391"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {{ $t("card-details.nav.nav-4") }}
          </router-link>

          <router-link :to="`/${$i18n.locale}/cards/${card.cardnumber}/change`">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke"
                d="M11.7776 6.41943H21.5828"
                stroke="#3D5CB7"
                stroke-width="1.47078"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M13.9543 2.92822H19.406C21.1513 2.92822 21.5828 3.35965 21.5828 5.08536V9.1153C21.5828 10.841 21.1513 11.2724 19.406 11.2724H13.9543C12.209 11.2724 11.7776 10.841 11.7776 9.1153V5.08536C11.7776 3.35965 12.209 2.92822 13.9543 2.92822Z"
                stroke="#3D5CB7"
                stroke-width="1.47078"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M1.97241 17.6953H11.7776"
                stroke="#3D5CB7"
                stroke-width="1.47078"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M4.14916 14.2046H9.60085C11.3462 14.2046 11.7776 14.636 11.7776 16.3617V20.3917C11.7776 22.1174 11.3462 22.5488 9.60085 22.5488H4.14916C2.40384 22.5488 1.97241 22.1174 1.97241 20.3917V16.3617C1.97241 14.636 2.40384 14.2046 4.14916 14.2046Z"
                stroke="#3D5CB7"
                stroke-width="1.47078"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M21.5828 15.6753C21.5828 19.4699 18.5138 22.5389 14.7192 22.5389L15.7487 20.823"
                stroke="#3D5CB7"
                stroke-width="1.47078"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke"
                d="M1.97241 9.79185C1.97241 5.99725 5.04144 2.92822 8.83604 2.92822L7.80651 4.64413"
                stroke="#3D5CB7"
                stroke-width="1.47078"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {{ $t("card-details.nav.nav-5") }}
          </router-link>
        </ul>
      </mq-responsive>

      <router-view v-slot="slotProps">
        <transition name="fade" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import TheCards from "../../layout/TheCards.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MqResponsive,
    TheCards,
  },
  data() {
    return {
      isLoading: true,
      active: false,
    };
  },
  methods: {
    ...mapActions({
      loadCard: "cards/loadCardInformation",
    }),
    openNav() {
      this.active = true;
    },
    closeNav() {
      this.active = false;
    },
  },
  computed: {
    ...mapGetters({
      card: "cards/get_card_information",
    }),
  },
  async mounted() {
    try {
      if (!this.card || this.card.cardnumber !== this.$route.params.c1) {
        await this.loadCard({ card_number: this.$route.params.c1 });
      }
    } catch (e) {
      this.$store.commit("set_error", "Not found");
    }
    this.isLoading = false;
  },
};
</script>

<style scoped>
.container {
  margin: 10px 0 0 15px;
  border-top-left-radius: 10px;
  background-color: rgba(141, 143, 161, 0.1);
  font-weight: "500";
  padding: 10px 30px;
  font-family: "Mulish";
}

.card-number {
  margin-bottom: 25px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.large_nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.large_nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding: 10px 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.large_nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;
}

a:hover,
a.router-link-active {
  color: white;
  background-color: #3d5cb7;
}

a:hover .stroke,
a.router-link-active .stroke {
  stroke: white;
}

a:hover .fill,
a.router-link-active .fill {
  fill: white;
}
@media (width<=1060px) {
  ul {
    gap: 10px;
    font-size: 14px;
  }
  @media (width<=450px) {
    .container {
      padding: 10px 15px;
    }
  }
}
/* Medium */
.md_div {
  margin-bottom: 10px;
  display: none;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  gap: 10px;
}
.md_nav {
  margin: 0;
  padding: 0;
}
.md_nav a {
  padding: 10px;
  text-decoration: none;
  color: black;
  display: flex;
  gap: 10px;
  border-radius: 10px;
}
a.router-link-active {
  color: white;
}
.active {
  display: flex;
}
.open_menu {
  margin-bottom: 10px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
