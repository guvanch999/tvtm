<template>
  <div class="modal-bg">
    <div class="modal-card">
      <div class="container">
        <base-card class="add__container">
          <div>
            <!-- Adding Card -->
            <h2>{{ $t("add-card.h1") }}</h2>
            <div class="add">
              <form class="card__user-info">
                <div class="card__div">
                  <label>{{ $t("add-card.form.label-1") }}</label>
                  <p class="validation" v-if="!card">Nädogry kart nomer</p>
                  <input
                    v-model="cardModel.cardnumber"
                    class="user__info"
                    type="text"
                    id="number"
                    :class="{ invalid: !card }"
                    @blur="clearValidity('card')"
                  />
                </div>
                <div class="card__div">
                  <label>Telefon nomeri</label>
                  <p class="validation" v-if="!tel">Nädogry telefon nomer</p>
                  <input
                    v-model="cardModel.telnumber"
                    class="user__info"
                    type="text"
                    id="number"
                    :class="{ invalid: !tel }"
                    @blur="clearValidity('tel')"
                  />
                </div>
                <div class="card__div">
                  <label>{{ $t("add-card.form.label-2") }}</label>
                  <p class="validation" v-if="!sur">Doly familiýanyňyz ýazyň</p>
                  <input
                    v-model="cardModel.surname"
                    class="user__info"
                    type="text"
                    id="firstName"
                    :class="{ invalid: !sur }"
                    @blur="clearValidity('sur')"
                  />
                </div>
                <div class="card__div">
                  <label>{{ $t("add-card.form.label-3") }}</label>
                  <p class="validation" v-if="!ady">Doly adyňyzy ýazyň</p>
                  <input
                    v-model="cardModel.name"
                    class="user__info"
                    type="text"
                    id="lastName"
                    :class="{ invalid: !ady }"
                    @blur="clearValidity('ady')"
                  />
                </div>
                <div class="card__div">
                  <label>{{ $t("add-card.form.label-4") }}</label>
                  <p class="validation" v-if="!city">
                    Doly addresiňizi görkezin
                  </p>
                  <input
                    v-model="cardModel.adress"
                    class="user__info"
                    type="text"
                    id="city"
                    :class="{ invalid: !city }"
                    @blur="clearValidity('city')"
                  />
                </div>
                <div class="card__div">
                  <label>{{ $t("add-card.form.label-5") }}</label>
                  <p class="validation" v-if="!res">
                    Doly týuneriň modelini görkeziň
                  </p>
                  <input
                    v-model="cardModel.resiver"
                    class="user__info"
                    type="text"
                    id="model"
                    :class="{ invalid: !res }"
                    @blur="clearValidity('res')"
                  />
                </div>
                <div class="card__div">
                  <label>Srok:</label>
                  <p class="validation" v-if="!end">Doly möhletini belläň</p>
                  <input
                    v-model="cardModel.srok"
                    class="user__info"
                    type="number"
                    id="model"
                    :class="{ invalid: !end }"
                    @blur="clearValidity('end')"
                  />
                </div>

                <div class="card__div">
                  <label>Bellik:</label>
                  <p class="validation" v-if="!not">Bellik ýazyň</p>
                  <input
                    v-model="cardModel.note"
                    class="user__info"
                    type="text"
                    id="model"
                    :class="{ invalid: !not }"
                    @blur="clearValidity('not')"
                  />
                </div>
              </form>

              <div class="information__container">
                <!-- Balance -->
                <base-small class="box__one-card">
                  <h2 class="box__one--header-2">
                    <span class="box__one--span">{{
                      $t("add-card.balance")
                    }}</span>
                    {{ my_detail?.balans?.summ || 0 }} manat
                  </h2>
                  <div>
                    <p>{{ $t("add-card.off") }}{{ my_detail?.skidka || 0 }}%</p>
                    <p>
                      {{ $t("add-card.total")
                      }}<span class="box__one--span-2"
                        >{{ totalBalance }} TMT</span
                      >
                    </p>
                  </div>
                </base-small>

                <!-- Prices -->
                <base-small
                  class="box__two-card"
                  v-for="packet in packets"
                  :key="packet.id"
                  :class="
                    selectedPacket?.packet === packet.packet ? 'active' : ''
                  "
                  @click="selectedPacket = packet"
                >
                  <div class="price__about">
                    <h2 class="price__header">{{ packet.packet }}</h2>
                    <div class="chanels-price">
                      <p class="price__paragraph">
                        {{ packet.description }}
                      </p>
                      <div class="card-plan">
                        BIR AÝ
                        <span class="card-price">
                          <span class="span-1">{{ packet.price }}</span>
                          <span class="span-2">TMT</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </base-small>
              </div>
            </div>

            <!-- Button -->
            <div style="display: flex; width: 100%">
              <base-button
                @click="addCardHandler"
                class="add_btn"
                style="flex: 1"
              >
                <div class="btn__info">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8.5H13.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 16.5H8"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 16.5H14.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 6.25H22"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19.25 9V3.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                {{ $t("add-card.btn") }}
              </base-button>
            </div>
          </div>

          <img
            src="../../../assets/cross-svg.svg"
            alt="Cross icon"
            style="cursor: pointer"
            @click="closeDialog"
          />
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      selectedPacket: null,
      cardModel: {
        cardnumber: null,
        telnumber: null,
        name: null,
        surname: null,
        adress: null,
        resiver: null,
        note: null,
        srok: 1,
        packet: null,
      },
      card: true,
      tel: true,
      nam: true,
      sur: true,
      ady: true,
      city: true,
      res: true,
      not: true,
      end: true,
      totalBalance: 0,
      formIsValid: true,
    };
  },
  watch: {
    selectedPacket() {
      this.resetPrice();
    },
    "cardModel.srok"() {
      this.resetPrice();
    },
  },
  methods: {
    ...mapActions({
      loadPackets: "packets/loadPackets",
      createCard: "cards/createCard",
    }),
    clearValidity(input) {
      this[input] = true;
    },
    resetPrice() {
      if (this.selectedPacket) {
        this.totalBalance =
          (this.selectedPacket.price -
            this.selectedPacket.price * (this.my_detail.skidka / 100)) *
          (this.cardModel.srok ?? 0);
      }
    },
    validation() {
      this.formIsValid = true;
      if (this.cardModel.cardnumber === "") {
        this.card = false;
        this.formIsValid = false;
      }
      if (
        this.cardModel.telnumber === "" ||
        !this.phone_regex.test(this.cardModel.telnumber)
      ) {
        this.tel = false;
        this.formIsValid = false;
      }
      if (this.cardModel.surname === null) {
        this.sur = false;
        this.formIsValid = false;
      }
      if (this.cardModel.name === null) {
        this.ady = false;
        this.formIsValid = false;
      }
      if (this.cardModel.adress === null) {
        this.city = false;
        this.formIsValid = false;
      }
      if (this.cardModel.resiver === null) {
        this.res = false;
        this.formIsValid = false;
      }
      if (this.cardModel.note === null) {
        this.not = false;
        this.formIsValid = false;
      }
      if (this.cardModel.srok === null) {
        this.end = false;
        this.formIsValid = false;
      }
    },

    resetData() {
      this.cardModel = {
        cardnumber: null,
        telnumber: null,
        name: null,
        surname: null,
        adress: null,
        resiver: null,
        note: null,
        srok: null,
        packet: null,
      };
      this.selectedPacket = null;
    },
    async addCardHandler() {
      if (this.isLoading) return;
      this.validation();
      if (!this.formIsValid) return;
      if (!this.selectedPacket) {
        alert("Packet saylan");
        return;
      }
      this.isLoading = true;
      this.cardModel.packet = this.selectedPacket.packet;
      try {
        await this.createCard(this.cardModel);
        this.resetData();
        this.$emit("closeDialog");
      } catch (err) {
        this.$store.commit(
          "set_error",
          err?.response?.data?.message ??
            "Kard maglumatlaryny doredip bolmady. Maglumatlary barlan we tazeden synanshyn"
        );
      }
      this.isLoading = false;
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
  computed: {
    ...mapGetters({
      packets: "packets/get_packets",
      phone_regex: "get_phone_regex",
      my_detail: "auth/get_my_detail",
    }),
  },
  async mounted() {
    await this.loadPackets();
    console.log(this.my_detail);
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 35px;
  max-height: 80vh;
  overflow-y: auto;
}

.add__container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  gap: 20px;
}

.add {
  display: flex;
  align-items: flex-start;
  gap: 100px;
}

.card {
  border: 1px solid transparent;
}

.active {
  border: 1px solid #3d5cb7;
}

/* Balans */

.box__one-card {
  margin-top: 40px;
}

.box__one-card,
.box__two-card {
  margin-top: 10px;
}

.box__one--header-2 {
  font-size: 18px;
  font-weight: 600;
  line-height: 29px;
}

.box__one--span {
  color: #3d6cb7;
}

.box__one--span-2 {
  color: #3d6cb7;
}

/* Kart form */
.card__user-info {
  width: 500px;
  font-weight: 500;
  font-size: 14px;
}

.card__div {
  margin-top: 15px;
}

form {
  font-family: "Mulish";
}

label {
  display: block;
  margin-top: 10px;
  padding: 5px;
}

input {
  outline: none;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

/* Prices */
a {
  text-decoration: none;
  color: black;
}

.prices__container {
  display: flex;
}

.price__header {
  margin: 5px;
  font-weight: 700;
  font-size: 16px;
}

.price__paragraph {
  width: 200px;
  font-weight: 400;
  font-size: 14px;
  color: #555;
}

.chanels-price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  line-height: 34px;
  color: #3d6cb7;
}

.span-1 {
  color: black;
  font-size: 21px;
}

.span-2 {
  margin-left: 20px;
  color: #777;
  font-size: 21px;
}

/* Button */
.controls {
  display: flex;
  align-items: end;
  justify-self: flex-end;
  grid-column: 3;
}

.add_btn {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
}

.btn__info {
  display: flex;
  align-items: center;
  gap: 5px;
}

.modal-bg {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
}

.modal-card {
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
}

.validation {
  margin: 5px;
  color: red;
}

.invalid {
  color: red;
  border-color: 1px solid red;
}

.card:hover {
  cursor: pointer;
}
</style>
