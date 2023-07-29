<template>
  <base-load v-if="isLoading"></base-load>
  <the-header lang></the-header>
  <section>
    <form @submit.prevent="submitForm">
      <h1>{{ $t("login.h1") }}</h1>
      <p>
        <span>
          {{ $t("login.span-1") }}
          <router-link to="/tk/register"
          >{{ $t("login.span-2") }}
          </router-link></span
        >
      </p>
      <div class="form-control" :class="{ invalid: !phoneNumber.isValid }">
        <label for="phoneNumber">
          <span class="first-span"
          ><img
              src="../../assets/user-red.svg"
              alt="Invalid user icon"
              v-if="!phoneNumber.isValid"
          />
            <img src="../../assets/user.png" alt="User icon" v-else/>
            {{ $t("login.phone") }}
          </span>
          <span v-if="!phoneNumber.isValid">{{ $t("login.phone-error") }}</span>
        </label>
        <input type="tel" id="phoneNumber" v-model="phoneNumber.val"/>
      </div>

      <div class="form-control" :class="{ invalid: !password.isValid }">
        <label for="password"
        ><span class="first-span"
        ><img
            src="../../assets/lock-red.svg"
            alt="Invalid lock icon"
            v-if="!password.isValid"
        />
            <img src="../../assets/lock.png" alt="Lock icon" v-else/>{{
            $t("login.password")
          }}</span
        >
          <span v-if="!password.isValid">{{ $t("pass-error") }}</span>
        </label>
        <input type="password" id="password" v-model="password.val"/>
      </div>

      <base-button class="btn__login">
        <img src="../../assets/login.png" alt="Login icon"/>
        {{ $t("login.btn") }}
      </base-button>
    </form>
  </section>
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
    async submitForm() {
      this.isLoading = true;
      if (
          this.phoneNumber.val.length < 11 ||
          this.phoneNumber.val === "" ||
          this.password.length < 8 ||
          this.password.val === ""
      ) {
        this.formIsValid = false;
        return;
      }
      const loginData = {
        phone_number: this.phoneNumber.val,
        password: this.password.val,
      };

      try {
        await this.$store.dispatch("auth/userLogin", loginData);
        this.$router.replace({path: `/${this.$i18n.locale}/dashboard/news`});
      } catch (err) {
        console.error(err)
        alert('Invalid credentials')
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

button {
  color: #3d5cb7;
  margin-top: 30px;
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

.invalid label {
  color: red;
}

.invalid input {
  border-bottom: 2px solid red;
}

.invalid img {
  color: red;
}

@media (width<=650px

) {
  form {
    width: 500px;
  }

  @media (width<=550px

  ) {
    form {
      width: 400px;
    }

    @media (width<=450px

    ) {
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
