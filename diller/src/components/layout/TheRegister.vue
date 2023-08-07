<template>
  <div>
    <the-header lang></the-header>
    <section>
      <form @submit.prevent="submitForm">
        <h1>{{ $t("register.h1") }}</h1>
        <p>
          <span
            >{{ $t("register.span-1") }}
            <router-link :to="`/${$i18n.locale}/login`">
              {{ $t("register.span-2") }}</router-link
            ></span
          >
        </p>
        <div class="form-control" :class="{ invalid: !fullName.isValid }">
          <label for="firstname">
            <span class="first-span">
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.0276 8.28042C19.0276 10.8073 16.9791 12.8558 14.4523 12.8558C11.9254 12.8558 9.87695 10.8073 9.87695 8.28042C9.87695 5.75353 11.9254 3.70508 14.4523 3.70508C16.9791 3.70508 19.0276 5.75353 19.0276 8.28042ZM16.74 8.28042C16.74 9.54387 15.7158 10.5681 14.4523 10.5681C13.1888 10.5681 12.1646 9.54387 12.1646 8.28042C12.1646 7.01697 13.1888 5.99275 14.4523 5.99275C15.7158 5.99275 16.74 7.01697 16.74 8.28042Z"
                  fill="#8F92A1"
                  :class="{ fill: !fullName.isValid }"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.0272 17.4315C19.0272 16.7998 18.5151 16.2877 17.8834 16.2877H11.0204C10.3887 16.2877 9.87654 16.7998 9.87654 17.4315V24.2945H7.58887V17.4315C7.58887 15.5363 9.12521 14 11.0204 14H17.8834C19.7786 14 21.3149 15.5363 21.3149 17.4315V24.2945H19.0272V17.4315Z"
                  fill="#8F92A1"
                  :class="{ fill: !fullName.isValid }"
                />
              </svg>

              {{ $t("register.username") }}</span
            >
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
            <span class="first-span">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.44282 7.56766C3.44282 6.93595 3.95492 6.42383 4.58665 6.42383H22.8768C23.5086 6.42383 24.0207 6.93595 24.0207 7.56766V20.5207C24.0207 21.7842 22.9965 22.8084 21.733 22.8084H5.71931C4.45587 22.8084 3.43164 21.7842 3.43164 20.5207V7.93852C3.43164 7.88405 3.43545 7.83047 3.44282 7.77803V7.56766ZM5.71918 10.1112V20.5206H21.7329V10.1115L16.1527 15.6918C14.8126 17.0319 12.6398 17.0319 11.2998 15.6918L5.71918 10.1112ZM7.51759 8.67466H19.9347L14.535 14.0744C14.0883 14.5211 13.3641 14.5211 12.9174 14.0744L7.51759 8.67466Z"
                  fill="#8F92A1"
                  :class="{ fill: !email.isValid }"
                />
              </svg>

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
            ><span class="first-span">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5892 12.5167C22.4844 12.5167 24.0207 14.053 24.0207 15.9482V22.8112C24.0207 24.7064 22.4844 26.2427 20.5892 26.2427H6.86315C4.96798 26.2427 3.43164 24.7064 3.43164 22.8112V15.9482C3.43164 14.053 4.96798 12.5167 6.86315 12.5167V9.08518C6.86315 5.29484 9.93582 2.22217 13.7262 2.22217C17.5165 2.22217 20.5892 5.29484 20.5892 9.08518V12.5167ZM13.726 4.50974C16.2529 4.50974 18.3014 6.55819 18.3014 9.08508V12.5166H9.15068V9.08508C9.15068 6.55819 11.1991 4.50974 13.726 4.50974ZM20.589 14.8043H6.86301C6.2313 14.8043 5.71918 15.3164 5.71918 15.9481V22.8111C5.71918 23.4428 6.2313 23.9549 6.86301 23.9549H20.589C21.2208 23.9549 21.7329 23.4428 21.7329 22.8111V15.9481C21.7329 15.3164 21.2208 14.8043 20.589 14.8043Z"
                  fill="#8F92A1"
                  :class="{ fill: !password.isValid }"
                />
              </svg>

              {{ $t("register.password") }}</span
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
            ><span class="first-span">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5892 12.5167C22.4844 12.5167 24.0207 14.053 24.0207 15.9482V22.8112C24.0207 24.7064 22.4844 26.2427 20.5892 26.2427H6.86315C4.96798 26.2427 3.43164 24.7064 3.43164 22.8112V15.9482C3.43164 14.053 4.96798 12.5167 6.86315 12.5167V9.08518C6.86315 5.29484 9.93582 2.22217 13.7262 2.22217C17.5165 2.22217 20.5892 5.29484 20.5892 9.08518V12.5167ZM13.726 4.50974C16.2529 4.50974 18.3014 6.55819 18.3014 9.08508V12.5166H9.15068V9.08508C9.15068 6.55819 11.1991 4.50974 13.726 4.50974ZM20.589 14.8043H6.86301C6.2313 14.8043 5.71918 15.3164 5.71918 15.9481V22.8111C5.71918 23.4428 6.2313 23.9549 6.86301 23.9549H20.589C21.2208 23.9549 21.7329 23.4428 21.7329 22.8111V15.9481C21.7329 15.3164 21.2208 14.8043 20.589 14.8043Z"
                  fill="#8F92A1"
                  :class="{ fill: !confirm.isValid }"
                />
              </svg>

              {{ $t("register.confirm") }}</span
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
            ><span class="first-span">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0837 24C16.8223 24 15.494 23.6986 14.1209 23.1181C12.7814 22.5488 11.4307 21.7674 10.1135 20.8186C8.80744 19.8586 7.54605 18.787 6.35163 17.6149C5.16837 16.4205 4.09674 15.1591 3.14791 13.8642C2.18791 12.5247 1.41767 11.1851 0.870698 9.89023C0.290233 8.50605 0 7.16651 0 5.90512C0 5.03442 0.156279 4.20837 0.457674 3.43814C0.770233 2.64558 1.27256 1.90884 1.95349 1.27256C2.81302 0.424186 3.79535 0 4.84465 0C5.28 0 5.72651 0.100465 6.10605 0.27907C6.5414 0.48 6.90977 0.781395 7.17767 1.18326L9.76744 4.83349C10.0019 5.15721 10.1805 5.46977 10.3033 5.78233C10.4484 6.11721 10.5265 6.45209 10.5265 6.77581C10.5265 7.2 10.4037 7.61302 10.1693 8.00372C10.0019 8.30512 9.74512 8.62884 9.4214 8.95256L8.66233 9.74512C8.67349 9.7786 8.68465 9.80093 8.69581 9.82326C8.82977 10.0577 9.09767 10.4595 9.61116 11.0623C10.1581 11.6874 10.6716 12.2567 11.1851 12.7814C11.8437 13.4288 12.3907 13.9423 12.9042 14.3665C13.5405 14.9023 13.9535 15.1702 14.1991 15.293L14.9916 14.5451C15.3377 14.1991 15.6726 13.9423 15.9963 13.7749C16.6102 13.3953 17.3916 13.3284 18.173 13.6521C18.4633 13.7749 18.7758 13.9423 19.1107 14.1767L22.8167 16.8112C23.2298 17.0902 23.5312 17.4474 23.7098 17.8716C23.8772 18.2958 23.9553 18.6865 23.9553 19.0772C23.9553 19.613 23.8326 20.1488 23.5981 20.6512C23.3637 21.1535 23.0735 21.5888 22.7051 21.9907C22.0688 22.694 21.3767 23.1963 20.573 23.52C19.8028 23.8326 18.9656 24 18.0837 24ZM4.84465 1.67442C4.2307 1.67442 3.6614 1.94233 3.11442 2.47814C2.60093 2.95814 2.24372 3.48279 2.02047 4.05209C1.78605 4.63256 1.67442 5.24651 1.67442 5.90512C1.67442 6.94326 1.92 8.0707 2.41116 9.23163C2.91349 10.4149 3.61674 11.6428 4.50977 12.8707C5.40279 14.0986 6.41861 15.293 7.53488 16.4205C8.65116 17.5256 9.85674 18.5526 11.0958 19.4567C12.3014 20.3386 13.5405 21.053 14.7684 21.5665C16.6772 22.3814 18.4633 22.5712 19.9367 21.9572C20.506 21.7228 21.0084 21.3656 21.466 20.8521C21.7228 20.573 21.9237 20.2716 22.0912 19.9144C22.2251 19.6353 22.2921 19.3451 22.2921 19.0549C22.2921 18.8763 22.2586 18.6977 22.1693 18.4967C22.1358 18.4298 22.0688 18.307 21.8567 18.1619L18.1507 15.5274C17.9274 15.3712 17.7265 15.2595 17.5367 15.1814C17.2912 15.0809 17.1907 14.9805 16.8112 15.2149C16.5879 15.3265 16.387 15.494 16.1637 15.7172L15.3154 16.5544C14.88 16.9786 14.2102 17.0791 13.6967 16.8893L13.3954 16.7553C12.9377 16.5098 12.4019 16.1302 11.8102 15.6279C11.2744 15.1702 10.694 14.6344 9.9907 13.9423C9.44372 13.3842 8.89674 12.7926 8.32744 12.134C7.80279 11.52 7.42326 10.9953 7.18884 10.56L7.05488 10.2251C6.98791 9.96837 6.96558 9.82326 6.96558 9.66698C6.96558 9.26512 7.1107 8.90791 7.38977 8.62884L8.22698 7.75814C8.45023 7.53488 8.61767 7.32279 8.7293 7.13302C8.81861 6.98791 8.85209 6.86512 8.85209 6.75349C8.85209 6.66419 8.81861 6.53023 8.76279 6.39628C8.68465 6.21767 8.56186 6.01674 8.40558 5.80465L5.81581 2.14326C5.70419 1.98698 5.57023 1.87535 5.40279 1.79721C5.22419 1.71907 5.03442 1.67442 4.84465 1.67442Z"
                  fill="#8F92A1"
                  :class="{ fill: !phoneNumber.isValid }"
                />
                <path
                  d="M19.2559 9.48813C18.7982 9.48813 18.4187 9.1086 18.4187 8.65092C18.4187 8.24906 18.0168 7.41185 17.3471 6.69744C16.6885 5.99418 15.9629 5.58116 15.3489 5.58116C14.8913 5.58116 14.5117 5.20162 14.5117 4.74395C14.5117 4.28627 14.8913 3.90674 15.3489 3.90674C16.4317 3.90674 17.5703 4.4872 18.5638 5.54767C19.4903 6.54116 20.0931 7.7579 20.0931 8.65092C20.0931 9.1086 19.7136 9.48813 19.2559 9.48813Z"
                  fill="#8F92A1"
                  :class="{ fill: !phoneNumber.isValid }"
                />
                <path
                  d="M23.1629 9.48837C22.7052 9.48837 22.3257 9.10884 22.3257 8.65116C22.3257 4.8 19.2001 1.67442 15.3489 1.67442C14.8913 1.67442 14.5117 1.29488 14.5117 0.837209C14.5117 0.379535 14.8913 0 15.3489 0C20.1154 0 24.0001 3.88465 24.0001 8.65116C24.0001 9.10884 23.6206 9.48837 23.1629 9.48837Z"
                  fill="#8F92A1"
                  :class="{ fill: !phoneNumber.isValid }"
                />
              </svg>

              {{ $t("register.phone") }}
            </span>
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

        <base-button class="btn__register">
          <base-load v-if="isLoading"></base-load>

          <img src="../../assets/login.png" alt="Login icon" />
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
      this.fullName.val = "";
      this.email.val = "";
      this.password.val = "";
      this.confirm.val = "";
      this.phoneNumber.val = "";
      this.checkbox.val = "";
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
        this.clearInputs();
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
  font-family: "Dm Sans", sans-serif;
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
.fill {
  fill: red;
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
