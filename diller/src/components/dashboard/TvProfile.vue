<template>
  <mq-responsive target="md-">
    <div>
      <div v-if="!isLoading" class="container">
        <h1>{{ $t("profile.h1") }}</h1>

        <base-load v-if="isLoading"></base-load>
        <!-- Profile Info -->
        <base-card class="large_profile__cards-card-1">
          <div class="profile__cards--avatar">
            <svg
              width="150"
              height="150"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0276 8.28042C19.0276 10.8073 16.9791 12.8558 14.4523 12.8558C11.9254 12.8558 9.87695 10.8073 9.87695 8.28042C9.87695 5.75353 11.9254 3.70508 14.4523 3.70508C16.9791 3.70508 19.0276 5.75353 19.0276 8.28042ZM16.74 8.28042C16.74 9.54387 15.7158 10.5681 14.4523 10.5681C13.1888 10.5681 12.1646 9.54387 12.1646 8.28042C12.1646 7.01697 13.1888 5.99275 14.4523 5.99275C15.7158 5.99275 16.74 7.01697 16.74 8.28042Z"
                fill="#8F92A1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0272 17.4315C19.0272 16.7998 18.5151 16.2877 17.8834 16.2877H11.0204C10.3887 16.2877 9.87654 16.7998 9.87654 17.4315V24.2945H7.58887V17.4315C7.58887 15.5363 9.12521 14 11.0204 14H17.8834C19.7786 14 21.3149 15.5363 21.3149 17.4315V24.2945H19.0272V17.4315Z"
                fill="#8F92A1"
              />
            </svg>
          </div>
          <h2 class="large_profile__cards-card-1--header">
            {{ detail.full_name }}
          </h2>
          <p class="large_profile__cards-card-1--para">
            Arzanladysh:
            {{
              detail.skidka > 0 ? detail.skidka + `%` : `Hazirlikche skidka yok`
            }}
          </p>
          <h3 class="large_profile__cards-card-1--price">
            {{ detail?.balans?.summ }} TMT
          </h3>
          <base-button class="profile__cards-card1-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.49172 18.9795H3.51172"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 17.5195V20.5095"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $t("profile.btn") }}
          </base-button>
        </base-card>

        <!-- Profile Form  -->
        <div class="large_profile__cards">
          <base-card class="large_profile__cards-card-2">
            <form>
              <div
                class="profile__cards--header"
                :class="{ invalid: !full_name.isValid }"
              >
                <label for="full_name">
                  {{ $t("profile.form.label-1") }}
                </label>
                <p class="invalid" v-if="!full_name.isValid">
                  Doly adyňyzy ýazyň
                </p>
                <input
                  class="large_profile__cards--field"
                  type="text"
                  id="full_name"
                  v-model.trim="full_name.val"
                  :placeholder="`${detail.full_name}`"
                  @blur="clearValidity('full_name')"
                />
              </div>

              <div class="profile__cards--header">
                <div>{{ $t("profile.form.label-2") }}</div>
                <div class="large_profile__cards--field" style="color: #666">
                  {{ detail.phone_number }}
                </div>
              </div>

              <div
                class="profile__cards--header"
                :class="{ invalid: !email.isValid }"
              >
                <label for="email">
                  {{ $t("profile.form.label-3") }}
                </label>
                <p class="invalid" v-if="!email.isValid">
                  Email sahypaňyz nädogry
                </p>

                <input
                  class="large_profile__cards--field"
                  type="email"
                  id="email"
                  v-model="email.val"
                  :placeholder="`${detail.email || 'No email'}`"
                  @blur="clearValidity('email')"
                />
              </div>

              <div
                class="profile__cards--header"
                :class="{ invalid: !new_password.isValid }"
              >
                <label for="password">{{ $t("profile.form.label-5") }}</label>
                <p class="invalid" v-if="!new_password.isValid">
                  Açar sözüňizi tassyklaň
                </p>

                <input
                  class="large_profile__cards--field"
                  type="password"
                  id="password"
                  v-model="new_password.val"
                  @blur="clearValidity('new_password')"
                />
              </div>

              <div
                class="profile__cards--header"
                :class="{ invalid: !confirm.isValid }"
              >
                <label for="confirm">{{ $t("profile.form.label-6") }}</label>
                <p class="invalid" v-if="!confirm.isValid">
                  Açar sözüňiz gabat gelenok
                </p>

                <input
                  class="large_profile__cards--field"
                  type="password"
                  id="confirm"
                  v-model="confirm.val"
                  @blur="clearValidity('confirm')"
                />
              </div>
            </form>

            <div class="large_controls">
              <base-button @click.prevent="updateMyDetailHandler">{{
                $t("profile.form.btn")
              }}</base-button>
            </div>
          </base-card>
        </div>
      </div>
    </div>
  </mq-responsive>

  <mq-responsive target="lg+">
    <div>
      <div v-if="!isLoading" class="container">
        <h1>{{ $t("profile.h1") }}</h1>

        <base-load v-if="isLoading"></base-load>
        <!-- Profile Form  -->
        <div class="profile__cards">
          <base-card class="profile__cards-card-2">
            <form>
              <div
                class="profile__cards--header"
                :class="{ invalid: !full_name.isValid }"
              >
                <label for="full_name">
                  {{ $t("profile.form.label-1") }}
                </label>
                <p class="invalid" v-if="!full_name.isValid">
                  Doly adyňyzy ýazyň
                </p>
                <input
                  class="profile__cards--field"
                  type="text"
                  id="full_name"
                  v-model.trim="full_name.val"
                  :placeholder="`${detail.full_name}`"
                  @blur="clearValidity('full_name')"
                />
              </div>

              <div class="profile__cards--header">
                <div>{{ $t("profile.form.label-2") }}</div>
                <div class="profile__cards--field" style="color: #666">
                  {{ detail.phone_number }}
                </div>
              </div>

              <div
                class="profile__cards--header"
                :class="{ invalid: !email.isValid }"
              >
                <label for="email">
                  {{ $t("profile.form.label-3") }}
                </label>
                <p class="invalid" v-if="!email.isValid">
                  Email sahypaňyz nädogry
                </p>

                <input
                  class="profile__cards--field"
                  type="email"
                  id="email"
                  v-model="email.val"
                  :placeholder="`${detail.email || 'No email'}`"
                  @blur="clearValidity('email')"
                />
              </div>

              <div
                class="profile__cards--header"
                :class="{ invalid: !new_password.isValid }"
              >
                <label for="password">{{ $t("profile.form.label-5") }}</label>
                <p class="invalid" v-if="!new_password.isValid">
                  Açar sözüňizi tassyklaň
                </p>

                <input
                  class="profile__cards--field"
                  type="password"
                  id="password"
                  v-model="new_password.val"
                  @blur="clearValidity('new_password')"
                />
              </div>

              <div
                class="profile__cards--header"
                :class="{ invalid: !confirm.isValid }"
              >
                <label for="confirm">{{ $t("profile.form.label-6") }}</label>
                <p class="invalid" v-if="!confirm.isValid">
                  Açar sözüňiz gabat gelenok
                </p>

                <input
                  class="profile__cards--field"
                  type="password"
                  id="confirm"
                  v-model="confirm.val"
                  @blur="clearValidity('confirm')"
                />
              </div>
            </form>

            <div class="controls">
              <base-button @click.prevent="updateMyDetailHandler">{{
                $t("profile.form.btn")
              }}</base-button>
            </div>
          </base-card>

          <!-- Profile Info -->
          <base-card class="profile__cards-card-1">
            <div class="profile__cards--avatar">
              <svg
                width="150"
                height="150"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.0276 8.28042C19.0276 10.8073 16.9791 12.8558 14.4523 12.8558C11.9254 12.8558 9.87695 10.8073 9.87695 8.28042C9.87695 5.75353 11.9254 3.70508 14.4523 3.70508C16.9791 3.70508 19.0276 5.75353 19.0276 8.28042ZM16.74 8.28042C16.74 9.54387 15.7158 10.5681 14.4523 10.5681C13.1888 10.5681 12.1646 9.54387 12.1646 8.28042C12.1646 7.01697 13.1888 5.99275 14.4523 5.99275C15.7158 5.99275 16.74 7.01697 16.74 8.28042Z"
                  fill="#8F92A1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.0272 17.4315C19.0272 16.7998 18.5151 16.2877 17.8834 16.2877H11.0204C10.3887 16.2877 9.87654 16.7998 9.87654 17.4315V24.2945H7.58887V17.4315C7.58887 15.5363 9.12521 14 11.0204 14H17.8834C19.7786 14 21.3149 15.5363 21.3149 17.4315V24.2945H19.0272V17.4315Z"
                  fill="#8F92A1"
                />
              </svg>
            </div>
            <h2 class="profile__cards-card-1--header">
              {{ detail.full_name }}
            </h2>
            <p class="profile__cards-card-1--para">
              Arzanladysh:
              {{
                detail.skidka > 0
                  ? detail.skidka + `%`
                  : `Hazirlikche skidka yok`
              }}
            </p>
            <h3 class="profile__cards-card-1--price">
              {{ detail?.balans?.summ }} TMT
            </h3>
            <base-button class="profile__cards-card1-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.49172 18.9795H3.51172"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 17.5195V20.5095"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $t("profile.btn") }}
            </base-button>
          </base-card>
        </div>
      </div>
    </div>
  </mq-responsive>
</template>
<script>
import { MqResponsive } from "vue3-mq";
import { mapActions, mapGetters } from "vuex";
import BaseLoad from "../UI/BaseLoad.vue";

export default {
  components: {
    BaseLoad,
    MqResponsive,
  },
  data() {
    return {
      isLoading: true,
      full_name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      new_password: {
        val: "",
        isValid: true,
      },
      confirm: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.full_name.val === "") {
        this.full_name.isValid = false;
        this.formIsValid = false;
      }
      if (!this.email.val.includes("@") || this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.new_password.val === "" || this.new_password.val.length < 8) {
        this.new_password.isValid = false;
        this.formIsValid = false;
      }
      if (
        this.confirm.val === "" ||
        this.confirm.val !== this.new_password.val
      ) {
        this.confirm.isValid = false;
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    ...mapActions({
      loadMyDetail: "auth/loadMyDetail",
      updateMyDetail: "auth/updateMyDetail",
    }),
    async updateMyDetailHandler() {
      this.isLoading = true;
      try {
        this.validateForm();
        if (!this.formIsValid) return;
        await this.updateMyDetail({
          full_name: this.full_name.val,
          email: this.email.val,
          password: this.new_password.val,
        });
      } catch (e) {
        console.log(e);
        this.$store.commit("auth/set_error", "Cannot update my detail");
      }
      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters({
      detail: "auth/get_my_detail",
    }),
  },
  async mounted() {
    await this.loadMyDetail();
    this.isLoading = false;
  },
};
</script>
<style scoped>
.container {
  margin: 10px 0 0 15px;
  border-top-left-radius: 10px;
  background-color: rgba(141, 143, 161, 0.1);
  font-weight: "Plus Jakarta Sans";
  padding: 10px 30px;
}

h1 {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.profile__cards {
  display: flex;
  gap: 20px;
}

.profile__cards--header {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
}

.profile__cards--field {
  margin-top: 10px;
  width: 600px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid #3d5cb7;
  border-radius: 10px;
  padding: 15px;
}

.controls {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.profile__cards-card-1 {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile__cards-card-1--header {
  font-weight: 500;
  font-size: 24px;
}

.profile__cards-card-1--para {
  font-weight: 400;
  font-size: 24px;
  color: #666;
}

.profile__cards-card-1--price {
  font-weight: 700;
  font-size: 42px;
}

svg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d5cb7;
  border-radius: 100%;
}

img {
  padding: 2.7px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  top: -30px;
  left: 75%;
}

.profile__cards-card1-btn {
  display: flex;
  gap: 10px;
  align-items: center;
}

form label {
  display: block;
}

form input {
  outline: none;
}

.invalid input {
  border: 1px solid red;
  color: red;
}

.invalid p {
  margin: 0;
  color: red;
}

/* LARGE */
.large_profile__cards {
  display: block;
}

.large_profile__cards-card-1 {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.large_profile__cards-card-1--header,
.large_profile__cards-card-1--para,
.large_profile__cards-card-1--price {
  margin: 10px;
}
.large_profile__cards-card-1--header {
  font-weight: 500;
  font-size: 24px;
}

.large_profile__cards-card-1--para {
  font-weight: 400;
  font-size: 24px;
  color: #666;
}

.large_profile__cards-card-1--price {
  font-weight: 700;
  font-size: 42px;
}

.large_profile__cards-card-2 {
  width: 500px !important;
}
.large_profile__cards--field {
  margin-top: 10px;
  width: 400px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid #3d5cb7;
  border-radius: 10px;
  padding: 15px;
}

.large_controls {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (width<=1250px) {
  .profile__cards-card-1,
  .profile__cards-card-2 {
    width: 500px !important;
  }
  .profile__cards-card-1--para {
    font-size: 20px;
  }
  .profile__cards--field {
    width: 400px;
  }
}
@media (width<=600px) {
  .large_profile__cards-card-1,
  .large_profile__cards-card-2 {
    width: 400px !important;
  }

  .large_profile__cards--field {
    width: 300px;
  }
  .large_profile__cards-card-1--para {
    font-size: 18px;
  }
  .large_profile__cards-card-1--header {
    font-size: 40px;
  }
  @media (width<=500px) {
    .large_profile__cards-card-1,
    .large_profile__cards-card-2 {
      width: 300px !important;
    }
    .large_profile__cards--field {
      width: 230px;
    }
  }
}
</style>
