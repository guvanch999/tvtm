<template>
  <MqResponsive target="sm-">
    <header :class="{ register: lang }">
      <nav>
        <router-link to="/" style="width: 200px; height: 10%; max-width: 200px">
          <img src="../../assets/tv-yzyndan.svg" alt="Pursat TV Icon" />
        </router-link>

        <div class="registered" v-if="registered">
          <ul>
            <li>
              <router-link class="navbar" to="/tarifler">{{
                $t("header.nav.nav-1")
              }}</router-link>
            </li>
            <li>
              <router-link class="navbar" to="/profile">{{
                $t("header.nav.nav-2")
              }}</router-link>
            </li>
            <li>
              <router-link class="navbar" to="/toleg-taryhy">{{
                $t("header.nav.nav-3")
              }}</router-link>
            </li>
          </ul>

          <div class="user-info">
            <div class="user-profile__photo">A</div>
            <div class="user-profile__info">
              <span class="span">ahmedatajan</span>
              <span>560.00 TMT</span>
            </div>
          </div>
        </div>

        <!-- <select name="languages" id="languages" v-else-if="lang">
        <option value="tkm">Türkmen(TKM)</option>
        <option value="rus">Rus(RU)</option>
      </select> -->
        <div class="small_controls" v-else>
          <div style="margin-top: 10px">
            <svg
              @click="deleteToken"
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

            <base-button
              class="small_login_btn"
              link
              :to="`/${$i18n.locale}/login`"
              v-else
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8447 8.09467C10.5518 8.38756 10.5518 8.86244 10.8447 9.15533L12.5643 10.875H4.375C3.96079 10.875 3.625 11.2108 3.625 11.625C3.625 12.0392 3.96079 12.375 4.375 12.375H12.5643L10.8447 14.0947C10.5518 14.3876 10.5518 14.8624 10.8447 15.1553C11.1376 15.4482 11.6124 15.4482 11.9053 15.1553L14.9053 12.1553C15.1982 11.8624 15.1982 11.3876 14.9053 11.0947L11.9053 8.09467C11.6124 7.80178 11.1376 7.80178 10.8447 8.09467Z"
                  fill="#3d5cb7"
                />
                <path
                  d="M12.375 5.87745C12.375 6.3254 12.6492 6.71725 12.966 7.03401L15.966 10.034C16.8447 10.9127 16.8447 12.3373 15.966 13.216L12.966 16.216C12.6492 16.5327 12.375 16.9246 12.375 17.3726V19.625C16.7933 19.625 20.375 16.0433 20.375 11.625C20.375 7.20672 16.7933 3.625 12.375 3.625V5.87745Z"
                  fill="#3d5cb7"
                />
              </svg>
            </base-button>
          </div>
          <the-switcher></the-switcher>
        </div>
      </nav>
    </header>
  </MqResponsive>

  <MqResponsive target="md-xl">
    <header :class="{ register: lang }">
      <nav>
        <router-link to="/" style="width: 200px; height: 10%; max-width: 200px">
          <img src="../../assets/tv-yzyndan.svg" alt="Pursat TV Icon" />
        </router-link>

        <div class="registered" v-if="registered">
          <ul>
            <li>
              <router-link class="navbar" to="/tarifler">{{
                $t("header.nav.nav-1")
              }}</router-link>
            </li>
            <li>
              <router-link class="navbar" to="/profile">{{
                $t("header.nav.nav-2")
              }}</router-link>
            </li>
            <li>
              <router-link class="navbar" to="/toleg-taryhy">{{
                $t("header.nav.nav-3")
              }}</router-link>
            </li>
          </ul>

          <div class="user-info">
            <div class="user-profile__photo">A</div>
            <div class="user-profile__info">
              <span class="span">ahmedatajan</span>
              <span>560.00 TMT</span>
            </div>
          </div>
        </div>

        <!-- <select name="languages" id="languages" v-else-if="lang">
        <option value="tkm">Türkmen(TKM)</option>
        <option value="rus">Rus(RU)</option>
      </select> -->
        <div class="controls" v-else>
          <div>
            <base-button
              @click="deleteToken"
              class="login_btn"
              v-if="!!isAuthorized"
              >{{ $t("dashboard.btn") }}</base-button
            >
            <base-button
              class="login__btn"
              link
              :to="`/${$i18n.locale}/login`"
              v-else
              >{{ $t("header.btn") }}</base-button
            >
          </div>
          <the-switcher></the-switcher>
        </div>
      </nav>
    </header>
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import { mapGetters, mapActions } from "vuex";
import TheSwitcher from "./TheSwitcher.vue";
export default {
  components: {
    MqResponsive,
    TheSwitcher,
  },
  props: {
    lang: {
      type: Boolean,
      required: false,
      default: false,
    },
    registered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      deleteToken: "auth/deleteToken",
    }),
  },
  computed: {
    ...mapGetters({
      detail: "auth/get_my_detail",
      isAuthorized: "auth/isAuthorized",
    }),
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  font-family: "Plus Jakarta Sans", sans-serif;
}

header nav {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header a {
  font-weight: 800;
  font-size: 14px;
}

header ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 60px;
}

a {
  text-decoration: none;
  color: #777;
  font-weight: 800;
  padding: 5px;
}

.navbar:hover,
.navbar:active {
  color: black;
  border-bottom: 6px dotted #3d5cb7;
}

.register {
  background-color: transparent;
}

.registered {
  gap: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
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
.controls {
  display: flex;
  align-items: center;
  gap: 30px;
}

/* MOBILE */
.small_controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
.small_login_btn {
  background-color: transparent !important;
  padding: 0 !important;
  border: none !important;
  margin-top: 10px;
}

/* .login__btn:hover,
.login__btn:active {
} */

@media (width<=800px) {
  header nav {
    width: 75%;
  }
  @media (width<=490px) {
    header nav {
      width: 95%;
    }
  }
}
</style>
