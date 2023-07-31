<template>
  <header :class="{ register: lang }">
    <nav>
      <router-link to="/" style="width: 20%; height: 20%">
        <img src="../../assets/tv-yzyndan.svg" alt="" />
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
      <div v-else style="display: flex; align-items: center; gap: 30px">
        <the-switcher></the-switcher>

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
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheSwitcher from "./TheSwitcher.vue";
export default {
  components: {
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
  font-family: "Plus Jakarta Sans";
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

/* .login__btn:hover,
.login__btn:active {
} */

@media (width<=800px) {
  header nav {
    width: 75%;
  }
}
</style>
