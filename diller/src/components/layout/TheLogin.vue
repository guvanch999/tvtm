<template>
  <div>
    <the-header lang></the-header>
    <section>
      <form @submit.prevent="submitForm">
        <h1>{{ $t("login.h1") }}</h1>
        <p>
          <span>
            {{ $t("login.span-1") }}
            <router-link :to="`/${$i18n.locale}/register`"
              >{{ $t("login.span-2") }}
            </router-link></span
          >
        </p>
        <div class="form-control" :class="{ invalid: !phoneNumber.isValid }">
          <p v-if="!phoneNumber.isValid">* {{ $t("login.phone-error") }}</p>

          <span class="form__span" id="phoneNumber">
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
                :class="{ fill: !phoneNumber.isValid }"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0272 17.4315C19.0272 16.7998 18.5151 16.2877 17.8834 16.2877H11.0204C10.3887 16.2877 9.87654 16.7998 9.87654 17.4315V24.2945H7.58887V17.4315C7.58887 15.5363 9.12521 14 11.0204 14H17.8834C19.7786 14 21.3149 15.5363 21.3149 17.4315V24.2945H19.0272V17.4315Z"
                fill="#8F92A1"
                :class="{ fill: !phoneNumber.isValid }"
              />
            </svg>
            <div style="border-right: 2px solid #ddd; padding-right: 5px">
              +993
            </div>
            <input
              type="tel"
              id="phoneNumber"
              :placeholder="`${$t('login.phone')}`"
              v-model="phoneNumber.val"
              @blur="clearValidity('phoneNumber')"
            />
          </span>
        </div>

        <div class="form-control" :class="{ invalid: !password.isValid }">
          <p v-if="!password.isValid">* {{ $t("login.pass-error") }}</p>
          <span class="form__span" id="password">
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
            <input
              type="password"
              id="password"
              :placeholder="`${$t('login.password')}`"
              v-model="password.val"
              @blur="clearValidity('password')"
            />
          </span>
        </div>

        <base-button class="btn__login" :class="{ active: isLoading }">
          <img
            src="../../assets/login.png"
            alt="Login icon"
            v-if="!isLoading"
          />
          {{ $t("login.btn") }}
        </base-button>
      </form>
    </section>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      phoneNumber: {
        val: "",
        isValid: true,
      },

      password: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      isLoading: false,
    };
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.phoneNumber.val.length < 8 || this.phoneNumber.val === "") {
        this.phoneNumber.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val.length < 8 || this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    clearInputs() {
      this.phoneNumber.val = "";
      this.password.val = "";
    },
    async submitForm() {
      if (this.isLoading) return;
      this.validateForm();
      if (!this.formIsValid) return;
      this.isLoading = true;
      const loginData = {
        phone_number: 993 + this.phoneNumber.val,
        password: this.password.val,
      };

      try {
        await this.$store.dispatch("auth/userLogin", loginData);
        this.clearInputs();
        this.$router.replace({ path: `/${this.$i18n.locale}/dashboard/news` });
      } catch (err) {
        console.error(err);
        this.$store.commit("set_error", "Invalid credentials");
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
  margin-top: 30px;
}

.form-control p {
  margin-bottom: 10px !important;
  justify-content: flex-start;
}
.form__span {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eef1f4;
  gap: 10px;
}
span:hover {
  border-color: #3d5cb7;
}

input {
  width: 100%;
  border: none;
  font: inherit;
  padding-left: 5px;
}
input:focus {
  outline: 0;
}
input::placeholder {
  color: #8f92a1;
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

button {
  position: relative;
  color: white;
  margin-top: 30px;
}
.btn__login:after {
  content: "";
  display: none;
  position: absolute;
  top: 50%;
  left: 42%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

.active:after {
  display: block;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.btn__login {
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

.invalid span {
  border-bottom: 2px solid red;
}
.invalid p {
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

      form p {
        font-size: 14px;
      }
    }
  }
}
</style>
