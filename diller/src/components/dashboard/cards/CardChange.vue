<template>
  <div class="change">
    <div class="change-box">
      <div class="change-1">
        {{ $t("card-change.form.label-1") }}
        <div class="change-1-field">{{ getDetail.cardnumber }}</div>
      </div>

      <div class="change-1" :class="{ invalid: !new_cardnumber.isValid }">
        <p v-if="!new_cardnumber.isValid">* Täze kart nomerinyzy giriziň</p>
        <label>{{ $t("card-change.form.label-2") }}</label>
        <input
          type="password"
          class="change-1-field"
          placeholder="xxxxxxxxxx"
          v-model="new_cardnumber.val"
          @blur="clearValidation('new_cardnumber')"
        />
      </div>

      <div class="change-1" :class="{ invalid: !reason.isValid }">
        <p v-if="!reason.isValid">* Sebäbini giriziň</p>
        <label>{{ $t("card-change.form.label-3") }}</label>
        <input
          class="change-1-field"
          :placeholder="`${$t('card-change.form.reason')}`"
          v-model="reason.val"
          @blur="clearValidation('reason')"
        />
      </div>
    </div>
    <div class="controls">
      <div>
        <base-button class="controls__btn-1">
          {{ $t("card-change.btn-1") }}
        </base-button>
        <base-button
          class="controls__btn-2"
          :class="{ active: isLoading }"
          @click="updateChangesHandler"
        >
          {{ $t("card-change.btn-2") }}
        </base-button>
      </div>
    </div>
    <the-request
      @close="closeRequest"
      :show="request.show"
      :valid="request.valid"
      :invalid="request.invalid"
    ></the-request>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TheRequest from "@/components/layout/TheRequest.vue";

export default {
  components: {
    TheRequest,
  },
  data() {
    return {
      request: {
        show: false,
        valid: false,
        invalid: false,
      },
      new_cardnumber: {
        val: "",
        isValid: true,
      },
      reason: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      updateChanges: "cards/updateCardNumber",
    }),
    validation() {
      if (this.new_cardnumber.val === "") {
        this.new_cardnumber.isValid = false;
        this.formIsValid = false;
      }
      if (this.reason.val === "") {
        this.reason.isValid = false;
        this.formIsValid = false;
      }
    },
    clearInputs() {
      this.new_cardnumber.val = "";
      this.reason.val = "";
    },

    clearValidation(input) {
      this[input].isValid = true;
    },
    closeRequest() {
      this.request.show = false;
    },
    async updateChangesHandler() {
      if (this.isLoading) return;
      this.isLoading = true;
      try {
        this.validation();
        if (!this.formIsValid) return;
        await this.updateChanges({
          change: {
            cardnumber: this.getDetail.cardnumber,
            new_cardnumber: this.new_cardnumber.val,
            reason: this.reason.val,
          },
        });
        this.request.show = true;
        this.request.valid = true;
      } catch (e) {
        console.log(e);
        this.$store.commit("set_error", "Cannot update card number");
        this.request.show = true;
        this.request.invalid = true;
      }
      this.isLoading = false;
      this.clearInputs();
    },
  },
  computed: {
    ...mapGetters({
      getDetail: "cards/get_card_information",
    }),
  },
};
</script>

<style scoped>
.change {
  font-family: "Mulish";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 35px;
  margin: 0;
  background-color: white;
}
.change label {
  display: block;
}

.change-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.change-1,
.change-2,
.change-3 {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
}
.change-1-field {
  font-size: 13px;
}

.change-1-field,
.change-2-field,
.change-3-field {
  color: #a5a5a5;
  margin-top: 10px;
  width: 600px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
}

.controls {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.controls__btn-1 {
  background-color: #e9b05c;
  border: 1px solid #e9b05c;
}

.controls__btn-1:hover,
.controls__btn-1:active {
  background-color: rgba(233, 176, 92, 0.26);
  border-color: rgba(233, 176, 92, 0.26);
}

.controls__btn-2 {
  position: relative;
}
.controls__btn-2:after {
  position: absolute;
  content: "";
  display: none;
  top: 50%;
  left: 10%;
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

.invalid p {
  color: red;
}
.invalid input {
  color: red;
  border-color: red;
}

@media (width<=720px) {
  .change-1-field,
  .change-2-field,
  .change-3-field {
    width: 500px;
  }
  @media (width<=620px) {
    .change-1-field,
    .change-2-field,
    .change-3-field {
      width: 400px;
    }
    @media (width<=520px) {
      .change-1-field,
      .change-2-field,
      .change-3-field {
        width: 300px;
      }
      @media (width<=420px) {
        .change {
          padding: 20px;
        }
        .change-1-field,
        .change-2-field,
        .change-3-field {
          width: 270px;
        }
      }
    }
  }
}
</style>
