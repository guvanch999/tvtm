<template>
  <!-- <MqResponsive target="">
    <div>This is an md screen</div>
  </MqResponsive> -->

  <MqResponsive target="lg-">
    <div class="large_main">
      <div class="large_main__header">
        <div>
          <img
            src="../assets/menu-svg.svg"
            alt="Menu icon"
            class="large_menu"
            @click="openMenu"
          />
          <div class="large_sidebar" :class="{ sidebar_active: active }">
            <div class="large_sidebar__header">
              <div class="large_sidebar__logo">
                <router-link
                  to="/"
                  style="width: 150px; height: 10%; min-width: 100px"
                >
                  <img src="../assets/tv-yzyndan.svg" alt="Pursat TV Icon" />
                </router-link>
                <img
                  src="../assets/cross-svg.svg"
                  alt="Cross icon"
                  class="large_cross"
                  @click="closeMenu"
                />
              </div>
              <div class="user-info" v-if="!!isAuthorized">
                <div class="user-profile__photo">
                  {{ first_character }}
                </div>
                <div class="user-profile__info">
                  <span class="span">{{ detail?.full_name }}</span>
                  <span>Arzanladyşyk: {{ detail?.skidka }}%</span>
                  <span>{{ detail?.balans?.summ || 0 }} TMT</span>
                </div>
              </div>
            </div>

            <div class="large_sidebar__menu">
              <nav>
                <ul>
                  <router-link
                    :to="`/${$i18n.locale}/dashboard/news`"
                    @click="closeMenu"
                  >
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.088 0.991699C23.1101 0.991699 25.56 3.4416 25.56 6.4637C25.56 9.4858 23.1101 11.9357 20.088 11.9357C17.0659 11.9357 14.616 9.4858 14.616 6.4637C14.616 3.4416 17.0659 0.991699 20.088 0.991699ZM20.0879 3.7277C18.5768 3.7277 17.3519 4.95264 17.3519 6.4637C17.3519 7.97475 18.5768 9.1997 20.0879 9.1997C21.5989 9.1997 22.8239 7.97475 22.8239 6.4637C22.8239 4.95264 21.5989 3.7277 20.0879 3.7277ZM6.40804 0.991703C9.43014 0.991703 11.88 3.4416 11.88 6.4637C11.88 9.48581 9.43014 11.9357 6.40804 11.9357C3.38594 11.9357 0.936039 9.48581 0.936039 6.4637C0.936039 3.4416 3.38594 0.991703 6.40804 0.991703ZM6.40804 3.7277C4.89698 3.7277 3.67204 4.95265 3.67204 6.4637C3.67204 7.97475 4.89698 9.1997 6.40804 9.1997C7.91909 9.1997 9.14404 7.97475 9.14404 6.4637C9.14404 4.95265 7.91909 3.7277 6.40804 3.7277ZM11.88 20.1437C11.88 17.1216 9.43014 14.6717 6.40804 14.6717C3.38593 14.6717 0.936035 17.1216 0.936035 20.1437C0.936035 23.1658 3.38593 25.6157 6.40804 25.6157C9.43014 25.6157 11.88 23.1658 11.88 20.1437ZM3.67203 20.1435C3.67203 18.6325 4.89698 17.4075 6.40803 17.4075C7.91908 17.4075 9.14403 18.6325 9.14403 20.1435C9.14403 21.6546 7.91908 22.8795 6.40803 22.8795C4.89698 22.8795 3.67203 21.6546 3.67203 20.1435ZM20.088 14.6717C23.1101 14.6717 25.56 17.1216 25.56 20.1437C25.56 23.1658 23.1101 25.6157 20.088 25.6157C17.0659 25.6157 14.616 23.1658 14.616 20.1437C14.616 17.1216 17.0659 14.6717 20.088 14.6717ZM20.0879 17.4075C18.5768 17.4075 17.3519 18.6325 17.3519 20.1435C17.3519 21.6546 18.5768 22.8795 20.0879 22.8795C21.5989 22.8795 22.8239 21.6546 22.8239 20.1435C22.8239 18.6325 21.5989 17.4075 20.0879 17.4075Z"
                        fill="#8f92ab"
                      />
                    </svg>
                    {{ $t("dashboard.nav.nav-1") }}
                  </router-link>

                  <router-link
                    :to="`/${$i18n.locale}/dashboard/cards`"
                    @click="closeMenu"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="stroke"
                        d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C21.4816 18.1752 21.7706 17.3001 21.8985 16"
                        stroke="#8f92a1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        class="stroke"
                        d="M10 16H6"
                        stroke="#8f92a1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        class="stroke"
                        d="M14 16H12.5"
                        stroke="#8f92a1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        class="stroke"
                        d="M2 10L7 10M22 10L11 10"
                        stroke="#8f92a1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    {{ $t("dashboard.nav.nav-2") }}
                  </router-link>

                  <router-link
                    :to="`/${$i18n.locale}/dashboard/profile`"
                    @click="closeMenu"
                  >
                    <svg
                      width="27px"
                      height="27px"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0276 8.28042C19.0276 10.8073 16.9791 12.8558 14.4523 12.8558C11.9254 12.8558 9.87695 10.8073 9.87695 8.28042C9.87695 5.75353 11.9254 3.70508 14.4523 3.70508C16.9791 3.70508 19.0276 5.75353 19.0276 8.28042ZM16.74 8.28042C16.74 9.54387 15.7158 10.5681 14.4523 10.5681C13.1888 10.5681 12.1646 9.54387 12.1646 8.28042C12.1646 7.01697 13.1888 5.99275 14.4523 5.99275C15.7158 5.99275 16.74 7.01697 16.74 8.28042Z"
                        fill="#8F92A1"
                      />
                      <path
                        class="svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0272 17.4315C19.0272 16.7998 18.5151 16.2877 17.8834 16.2877H11.0204C10.3887 16.2877 9.87654 16.7998 9.87654 17.4315V24.2945H7.58887V17.4315C7.58887 15.5363 9.12521 14 11.0204 14H17.8834C19.7786 14 21.3149 15.5363 21.3149 17.4315V24.2945H19.0272V17.4315Z"
                        fill="#8F92A1"
                      />
                    </svg>
                    {{ $t("dashboard.nav.nav-3") }}
                  </router-link>

                  <router-link
                    :to="`/${$i18n.locale}/dashboard/balance`"
                    @click="closeMenu"
                  >
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.2479 27.6803C21.8031 27.6803 27.9279 21.5555 27.9279 14.0003C27.9279 6.44505 21.8031 0.320312 14.2479 0.320312C6.69261 0.320312 0.567871 6.44505 0.567871 14.0003C0.567871 21.5555 6.69261 27.6803 14.2479 27.6803ZM14.248 24.9441C20.2922 24.9441 25.192 20.0443 25.192 14.0001C25.192 7.95587 20.2922 3.05607 14.248 3.05607C8.20379 3.05607 3.304 7.95587 3.304 14.0001C3.304 20.0443 8.20379 24.9441 14.248 24.9441ZM15.616 12.6321V7.16007H12.88V15.3681H19.72V12.6321H15.616Z"
                        fill="#8F92A1"
                      />
                    </svg>
                    {{ $t("dashboard.nav.nav-4") }}
                  </router-link>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 5px">
          <the-switcher></the-switcher>

          <svg
            @click="logoutHandeler"
            v-if="!!isAuthorized"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
              stroke="#3d5cb7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <router-view v-slot="slotProps">
        <transition name="fade" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </MqResponsive>

  <MqResponsive target="xl+">
    <div class="dashboard">
      <div class="sidebar">
        <div class="sidebar__header">
          <router-link
            to="/"
            style="width: 200px; height: 10%; max-width: 200px"
          >
            <img src="../assets/tv-yzyndan.svg" alt="Pursat TV Icon" />
          </router-link>

          <router-link
            :to="`/${$i18n.locale}/dashboard/profile`"
            style="text-decoration: none; color: black"
          >
            <div class="user-info" v-if="!!isAuthorized">
              <div class="user-profile__photo">{{ first_character }}</div>
              <div class="user-profile__info">
                <span class="span">{{ detail?.full_name }}</span>
                <span>Arzanladyşyk: {{ detail?.skidka }}%</span>

                <span>{{ detail?.balans?.summ || 0 }} TMT</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="sidebar__menu">
          <nav>
            <ul>
              <router-link :to="`/${$i18n.locale}/dashboard/news`">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.088 0.991699C23.1101 0.991699 25.56 3.4416 25.56 6.4637C25.56 9.4858 23.1101 11.9357 20.088 11.9357C17.0659 11.9357 14.616 9.4858 14.616 6.4637C14.616 3.4416 17.0659 0.991699 20.088 0.991699ZM20.0879 3.7277C18.5768 3.7277 17.3519 4.95264 17.3519 6.4637C17.3519 7.97475 18.5768 9.1997 20.0879 9.1997C21.5989 9.1997 22.8239 7.97475 22.8239 6.4637C22.8239 4.95264 21.5989 3.7277 20.0879 3.7277ZM6.40804 0.991703C9.43014 0.991703 11.88 3.4416 11.88 6.4637C11.88 9.48581 9.43014 11.9357 6.40804 11.9357C3.38594 11.9357 0.936039 9.48581 0.936039 6.4637C0.936039 3.4416 3.38594 0.991703 6.40804 0.991703ZM6.40804 3.7277C4.89698 3.7277 3.67204 4.95265 3.67204 6.4637C3.67204 7.97475 4.89698 9.1997 6.40804 9.1997C7.91909 9.1997 9.14404 7.97475 9.14404 6.4637C9.14404 4.95265 7.91909 3.7277 6.40804 3.7277ZM11.88 20.1437C11.88 17.1216 9.43014 14.6717 6.40804 14.6717C3.38593 14.6717 0.936035 17.1216 0.936035 20.1437C0.936035 23.1658 3.38593 25.6157 6.40804 25.6157C9.43014 25.6157 11.88 23.1658 11.88 20.1437ZM3.67203 20.1435C3.67203 18.6325 4.89698 17.4075 6.40803 17.4075C7.91908 17.4075 9.14403 18.6325 9.14403 20.1435C9.14403 21.6546 7.91908 22.8795 6.40803 22.8795C4.89698 22.8795 3.67203 21.6546 3.67203 20.1435ZM20.088 14.6717C23.1101 14.6717 25.56 17.1216 25.56 20.1437C25.56 23.1658 23.1101 25.6157 20.088 25.6157C17.0659 25.6157 14.616 23.1658 14.616 20.1437C14.616 17.1216 17.0659 14.6717 20.088 14.6717ZM20.0879 17.4075C18.5768 17.4075 17.3519 18.6325 17.3519 20.1435C17.3519 21.6546 18.5768 22.8795 20.0879 22.8795C21.5989 22.8795 22.8239 21.6546 22.8239 20.1435C22.8239 18.6325 21.5989 17.4075 20.0879 17.4075Z"
                    fill="#8f92ab"
                  />
                </svg>
                {{ $t("dashboard.nav.nav-1") }}
              </router-link>

              <router-link :to="`/${$i18n.locale}/dashboard/cards`">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="stroke"
                    d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C21.4816 18.1752 21.7706 17.3001 21.8985 16"
                    stroke="#8f92a1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    class="stroke"
                    d="M10 16H6"
                    stroke="#8f92a1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    class="stroke"
                    d="M14 16H12.5"
                    stroke="#8f92a1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    class="stroke"
                    d="M2 10L7 10M22 10L11 10"
                    stroke="#8f92a1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                {{ $t("dashboard.nav.nav-2") }}
              </router-link>

              <router-link :to="`/${$i18n.locale}/dashboard/profile`">
                <svg
                  width="27px"
                  height="27px"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.0276 8.28042C19.0276 10.8073 16.9791 12.8558 14.4523 12.8558C11.9254 12.8558 9.87695 10.8073 9.87695 8.28042C9.87695 5.75353 11.9254 3.70508 14.4523 3.70508C16.9791 3.70508 19.0276 5.75353 19.0276 8.28042ZM16.74 8.28042C16.74 9.54387 15.7158 10.5681 14.4523 10.5681C13.1888 10.5681 12.1646 9.54387 12.1646 8.28042C12.1646 7.01697 13.1888 5.99275 14.4523 5.99275C15.7158 5.99275 16.74 7.01697 16.74 8.28042Z"
                    fill="#8F92A1"
                  />
                  <path
                    class="svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.0272 17.4315C19.0272 16.7998 18.5151 16.2877 17.8834 16.2877H11.0204C10.3887 16.2877 9.87654 16.7998 9.87654 17.4315V24.2945H7.58887V17.4315C7.58887 15.5363 9.12521 14 11.0204 14H17.8834C19.7786 14 21.3149 15.5363 21.3149 17.4315V24.2945H19.0272V17.4315Z"
                    fill="#8F92A1"
                  />
                </svg>
                {{ $t("dashboard.nav.nav-3") }}
              </router-link>

              <router-link :to="`/${$i18n.locale}/dashboard/balance`">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.2479 27.6803C21.8031 27.6803 27.9279 21.5555 27.9279 14.0003C27.9279 6.44505 21.8031 0.320312 14.2479 0.320312C6.69261 0.320312 0.567871 6.44505 0.567871 14.0003C0.567871 21.5555 6.69261 27.6803 14.2479 27.6803ZM14.248 24.9441C20.2922 24.9441 25.192 20.0443 25.192 14.0001C25.192 7.95587 20.2922 3.05607 14.248 3.05607C8.20379 3.05607 3.304 7.95587 3.304 14.0001C3.304 20.0443 8.20379 24.9441 14.248 24.9441ZM15.616 12.6321V7.16007H12.88V15.3681H19.72V12.6321H15.616Z"
                    fill="#8F92A1"
                  />
                </svg>
                {{ $t("dashboard.nav.nav-4") }}
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
      <div class="main">
        <div class="main__header">
          <div style="display: flex; align-items: center; gap: 30px">
            <the-switcher></the-switcher>

            <base-button @click="logoutHandeler" v-if="!!isAuthorized"
              >{{ $t("dashboard.btn") }}
            </base-button>
          </div>
        </div>
        <router-view v-slot="slotProps">
          <transition name="fade" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </MqResponsive>
</template>

<script>
import TheSwitcher from "@/components/layout/TheSwitcher.vue";
import { MqResponsive } from "vue3-mq";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TheSwitcher,
    MqResponsive,
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    ...mapGetters({
      detail: "auth/get_my_detail",
      isAuthorized: "auth/isAuthorized",
    }),
    first_character() {
      return this.detail?.full_name[0] ?? "U";
    },
  },
  methods: {
    ...mapActions({
      loadMyDetail: "auth/loadMyDetail",
      deleteToken: "auth/deleteToken",
    }),
    openMenu() {
      this.active = true;
    },
    logoutHandeler() {
      this.deleteToken();
      this.$router.push("/");
    },
    closeMenu() {
      this.active = false;
    },
  },
  async mounted() {
    try {
      await this.loadMyDetail();
    } catch (e) {
      console.log(e);
      this.$store.commit("set_error", "Cannot load your details");
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped>
.dashboard {
  font-family: "DM Sans", "Mulish";
  display: flex;
}

.sidebar {
  margin: 0;
  padding: 0;
  position: fixed;
  height: 100vh;
  width: 250px;
  background-color: white;
}

.sidebar__header {
  padding: 20px;
}

.sidebar__menu {
  height: 100vh;
}

ul {
  list-style: none;
  padding: 10px;
}

ul a {
  font-family: "DM Sans", "Mulish";
  margin-top: 20px;
  padding: 0 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  font-weight: 500;
}

ul a:hover,
ul a.router-link-active {
  color: #3d5cb7;
  border-left: 2px solid #3d5cb7;
}

ul a:hover .stroke,
ul a.router-link-active .stroke {
  stroke: #3d5cb7;
}

a:hover .svg,
a.router-link-active .svg {
  fill: #3d5cb7;
}

.main {
  width: 100%;
  height: 100vh;
  margin-left: 250px;
  padding: 20px;
  /* height: 100vh; */
}

.main__header {
  display: flex;
  justify-content: flex-end;
  gap: 100px;
}

.main__header form {
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(143, 146, 161, 0.1);
  border-radius: 10px;
  flex: 1;
}

.main__header input {
  width: 100%;
  background-color: transparent;
  padding: 10px 5px;
  border: none;
  outline: none;
}

.main__header input::placeholder {
  color: #8f92a1;
  font-weight: 500;
  font-size: 16px;
}
.main__main {
  height: 100vh;
}
.user-info {
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
  font-weight: 400;
  cursor: pointer;
}

.user-profile__photo {
  padding: 15px 20px;
  background-color: red;
  border-radius: 100%;
  color: white;
}

.user-profile__info {
  display: flex;
  flex-direction: column;
}

.span {
  color: #777;
}

/* NOTE LARGRE */
.large_main {
  font-family: "DM Sans", "Mulish",sans-serif;
  height: 100%;
  width: 100%;
  padding: 20px;
  padding: 10px;
}

.large_main__header {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 10px 20px;
}

.large_main__header form {
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(143, 146, 161, 0.1);
  border-radius: 10px;
  flex: 1;
}

.large_main__header input {
  width: 100%;
  background-color: transparent;
  padding: 10px 5px;
  border: none;
  outline: none;
}

.large_main__header input::placeholder {
  color: #8f92a1;
  font-weight: 500;
  font-size: 16px;
}

.large_sidebar {
  display: none;
  margin: 0;
  padding: 0;
  position: fixed;
  height: 100vh;
  width: 300px;
  top: 0%;
  left: 0%;
  background-color: white;
}

.large_sidebar__header {
  padding: 20px;
}

.large_sidebar__menu {
  height: 100vh;
}

.large_sidebar__logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.large_main,
.large_cross {
  cursor: pointer;
}

.sidebar_active {
  display: block;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

@media (width<=770px) {
  .large_main__header {
    gap: 50px;
  }

  @media (width<=570px) {
    .large_main__header {
      gap: 25px;
    }

    @media (width<=470px) {
      .large_main__header {
        gap: 15px;
      }

      button {
        padding: 10px !important;
      }
    }
  }
}
</style>
