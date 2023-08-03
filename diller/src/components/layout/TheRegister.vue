<template>
  <div>
    <base-load v-if="isLoading"></base-load>
    <the-header lang></the-header>
    <section>
      <form @submit.prevent="submitForm">
        <h1>{{ $t("register.h1") }}</h1>
        <p>
          <span
            >{{ $t("register.span-1") }}
            <router-link to="/tk/login">
              {{ $t("register.span-2") }}</router-link
            ></span
          >
        </p>
        <div class="form-control" :class="{ invalid: !fullName.isValid }">
          <label for="firstname">
            <span class="first-span"
              ><img
                src="../../assets/user-red.svg"
                alt="Invalid user icon"
                v-if="!fullName.isValid"
              />
              <img src="../../assets/user.png" alt="User icon" v-else />{{
                $t("register.username")
              }}
            </span>
            <span v-if="!fullName.isValid">{{
              $t("register.user-error")
            }}</span>
          </label>
          <input
            type="text"
            id="firstname"
            v-model.trim="fullName.val"
            @blur="clearValidity('fullName')"
          />
        </div>
        <div class="form-control" :class="{ invalid: !email.isValid }">
          <label for="email">
            <span class="first-span"
              ><img
                src="../../assets/mail-red.svg"
                alt="Invalid mail icon"
                v-if="!email.isValid"
              />
              <img src="../../assets/mail.png" alt="" v-else />
              {{ $t("register.email") }}
            </span>
            <span v-if="!email.isValid">{{
              $t("register.email-error")
            }}</span></label
          >
          <input
            type="email"
            id="email"
            v-model.trim="email.val"
            @blur="clearValidity('email')"
          />
        </div>

        <div class="form-control" :class="{ invalid: !password.isValid }">
          <label for="password"
            ><span class="first-span"
              ><img
                src="../../assets/lock-red.svg"
                alt="Invalid lock icon"
                v-if="!password.isValid"
              />
              <img src="../../assets/lock.png" alt="Lock icon" v-else />{{
                $t("register.password")
              }}</span
            >
            <div v-if="!password.isValid">
              <span v-if="!password.bytes">
                {{ $t("register.pass-byte") }}
              </span>
              <span v-else>{{ $t("register.pass-error") }}</span>
            </div>
          </label>
          <input
            type="password"
            id="password"
            v-model.trim="password.val"
            @blur="clearValidity('password')"
          />
        </div>

        <div class="form-control" :class="{ invalid: !confirm.isValid }">
          <label for="confirm password"
            ><span class="first-span"
              ><img
                src="../../assets/lock-red.svg"
                alt="Invalid lock icon"
                v-if="!confirm.isValid"
              />
              <img src="../../assets/lock.png" alt="Lock icon" v-else />{{
                $t("register.confirm")
              }}</span
            >
            <span v-if="!confirm.isValid">{{ $t("register.conf-error") }}</span>
          </label>
          <input
            type="password"
            id="confirm"
            v-model.trim="confirm.val"
            @blur="clearValidity('confirm')"
          />
        </div>

        <div class="form-control" :class="{ invalid: !phoneNumber.isValid }">
          <label for="phone number"
            ><span class="first-span"
              ><img
                src="../../assets/phone-red.svg"
                alt="Invalid phone icon"
                v-if="!phoneNumber.isValid"
              />
              <img src="../../assets/phone.png" alt="Phone icon" v-else />{{
                $t("register.phone")
              }}</span
            >
            <span v-if="!phoneNumber.isValid">{{
              $t("register.phone-error")
            }}</span>
          </label>
          <input
            type="tel"
            id="number"
            v-model.trim="phoneNumber.val"
            @blur="clearValidity('phoneNumber')"
          />
        </div>

        <!-- <div class="form-control checkbox">
        <input
          type="checkbox"
          id="security"
          value="security"
          class="checkbox-input"
          v-model.trim="checkbox.val"
          @blur="clearValidity('checkbox')"
        />
        <label for="security" class="checkbox-label"
          >Hasap döretmek bilen
          <router-link to="/"
            >Gizlinlik ýörelgelerimize, şertlerimize</router-link
          >
          we <router-link to="/">bildiriş sazlamalary</router-link> bilen
          ylalaşýarsyňyz!</label
        >
      </div> -->

        <base-button class="btn__register"
          ><img src="../../assets/login.png" alt="Login icon" />
          {{ $t("register.btn") }}
        </base-button>
      </form>
    </section>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import BaseLoad from "../UI/BaseLoad.vue";

export default {
  components: {
    TheHeader,
    BaseLoad,
  },
  data() {
    return {
      fullName: {
        val: "",
        isValid: true,
      },

      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        byte: true,
        isValid: true,
      },
      confirm: {
        val: "",
        isValid: true,
      },
      phoneNumber: {
        val: "",
        isValid: true,
      },
      // checkbox: {
      //   val: "",
      //   isValid: true,
      // },
      formIsValid: true,
      isLoading: false,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.fullName.val === "") {
        this.fullName.isValid = false;
        this.formIsValid = false;
      }

      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val.length < 8) {
        this.password.isValid = false;
        this.password.byte = false;
        this.formIsValid = false;
      }
      if (this.confirm.val !== this.password.val || this.confirm.val === "") {
        this.confirm.isValid = false;
        this.password.isValid = false;
        this.formIsValid = false;
      }
      if (this.phoneNumber.val === "" || this.phoneNumber.val.length < 11) {
        this.phoneNumber.isValid = false;
        this.formIsValid = false;
      }
      // if (this.checkbox.val === "") {
      //   this.checkbox.isValid = false;
      //   this.formIsValid = false;
      // }
    },
    clearInputs() {
      this.fullName = null;
      this.email = null;
      this.password = null;
      this.confirm = null;
      this.phoneNumber = null;
      this.checkbox = null;
    },

    async submitForm() {
      if (this.isLoading) return;
      this.validateForm();
      if (!this.formIsValid) return;
      this.isLoading = true;
      const registerData = {
        full_name: this.fullName.val,
        email: this.email.val,
        password: this.password.val,
        phone_number: this.phoneNumber.val.replace(/-/g, ""),
      };

      try {
        await this.$store.dispatch("auth/userRegister", registerData);
        this.$router.replace({ path: `/${this.$i18n.locale}/login` });
      } catch (e) {
        console.error(e);
        this.$store.commit("set_error", "Cannot create credentials");
        this.$router.push({ path: `/` });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-family: "Dm Sans";
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font: inherit;
  font-weight: 500;
  color: #8f92a1;
}

input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #eef1f4;
  font: inherit;
}

input::placeholder {
  color: #8f92a1;
}

input:focus {
  outline: 0;
  border-color: #3d5cb7;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  line-height: 23px;
  color: #8f92a1;
}

a {
  text-decoration: none;
  color: #3d5cb7;
}

.first {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
}

.checkbox-label {
  display: block;
}

.checkbox-input {
  width: 40px;
  accent-color: #3d5cb7;
}

.btn__register {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.first-span {
  display: flex;
  align-items: center;
  gap: 10px;
}

.invalid label {
  color: red;
}

.invalid input {
  border-bottom: 2px solid red;
}

.invalid img {
  color: red;
}

@media (width<=650px) {
  form {
    width: 500px;
  }

  @media (width<=550px) {
    form {
      width: 400px;
    }

    @media (width<=450px) {
      form {
        width: 300px;
      }

      form h1 {
        font-size: 28px;
      }

      form p {
        font-size: 14px;
      }
    }
  }
}
</style>
