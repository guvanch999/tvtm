<template>
  <div>
    <MqResponsive target="md-">
      <div>
        <div v-if="isLoading"></div>
        <div v-else class="md_card-info">
          <div class="price_container">
            <div class="md_price">
              <h1 class="price__header-1">Aktiw bukja</h1>
              <div class="price__about">
                <div class="md_price__header">
                  <h2>{{ current_packet?.packet }}</h2>
                  <img
                    src="../../../assets/tv-yzyndan.svg"
                    alt="Pursat TV Icon"
                    style="width: 100px; height: 10%; max-width: 200px"
                  />
                </div>
                <div class="md_chanels__price">
                  <p>
                    {{ current_packet?.description }}
                  </p>
                  <div class="card-plan">
                    BIR AÝ
                    <span class="card-price">
                      <span class="span-1">{{ current_packet?.price }}</span>
                      <span class="span-2">TMT</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="md_date">
              Mohleti
              <div class="user__info">
                {{ `${new Date(card.date_start * 1000)?.toLocaleDateString()}` }}
                - {{ `${new Date(card.date_end * 1000)?.toLocaleDateString()}` }}
              </div>
            </div>
          </div>

          <form class="card__user-info" style="margin: 0; padding: 0">
            <div class="card__div">
              <label>{{ $t("card-about.form.label-1") }}</label>
              <p class="validation" v-if="!tel">Nädogry telefon belgi</p>

              <input
                class="user__info"
                type="number"
                :placeholder="`${cardModel.telnumber}`"
                v-model="cardModel.telnumber"
                :class="{ invalid: !tel }"
                @blur="clearValidity('tel')"
              />
            </div>

            <div class="card__div">
              <label>{{ $t("card-about.form.label-2") }}</label>
              <p class="validation" v-if="!sur">Doly familiýaňyzy tassyklaň</p>

              <input
                class="user__info"
                type="text"
                :placeholder="`${cardModel.surname}`"
                v-model="cardModel.surname"
                :class="{ invalid: !sur }"
                @blur="clearValidity('sur')"
              />
            </div>

            <div class="card__div">
              <label>{{ $t("card-about.form.label-3") }}</label>
              <p class="validation" v-if="!nam">Doly ayňyzy ýazyň</p>

              <input
                class="user__info"
                type="text"
                :placeholder="`${cardModel.name}`"
                v-model="cardModel.name"
                :class="{ invalid: !nam }"
                @blur="clearValidity('nam')"
              />
            </div>

            <div class="card__div">
              <label>
                {{ $t("card-about.form.label-4") }}
              </label>
              <p class="validation" v-if="!city">Doly addresiňizi ýazyň</p>

              <input
                class="user__info"
                type="text"
                :placeholder="`${cardModel.adress}`"
                v-model="adress"
                :class="{ invalid: !city }"
                @blur="clearValidity('city')"
              />
            </div>

            <div class="card__div">
              <label>{{ $t("card-about.form.label-5") }} </label>
              <p class="validation" v-if="!res">Doly týunerň belgisini ýazyň</p>

              <input
                class="user__info"
                type="text"
                :placeholder="cardModel.resiver"
                v-model="resiver"
                :class="{ invalid: !res }"
                @blur="clearValidity('res')"
              />
            </div>

            <div class="md_buttons">
              <base-button @click="reactivateCardHandler" class="btn-1"
                >{{ $t("card-about.btn-1") }}
              </base-button>
              <base-button @click="saveChangesHandler"
                >{{ $t("card-about.btn-2") }}
              </base-button>
            </div>
          </form>
        </div>
      </div>
    </MqResponsive>

    <MqResponsive target="lg-xl">
      <div>
        <div v-if="isLoading"></div>
        <div v-else class="card-info">
          <form class="card__user-info">
            <div class="card__div">
              <label>{{ $t("card-about.form.label-1") }}</label>
              <p class="validation" v-if="!tel">Nädogry telefon belgi</p>
              <input
                class="user__info"
                type="number"
                :placeholder="`${cardModel.telnumber}`"
                v-model="cardModel.telnumber"
                :class="{ invalid: !tel }"
                @blur="clearValidity('tel')"
              />
            </div>

            <div class="card__div">
              <label>{{ $t("card-about.form.label-2") }}</label>
              <p class="validation" v-if="!sur">Doly familiýaňyzy ýazyň</p>
              <input
                class="user__info"
                type="text"
                :placeholder="`${cardModel.surname}`"
                v-model="cardModel.surname"
                :class="{ invalid: !sur }"
                @blur="clearValidity('sur')"
              />
            </div>

            <div class="card__div">
              <label>{{ $t("card-about.form.label-3") }}</label>
              <p class="validation" v-if="!nam">Doly ayňyzy ýazyň</p>
              <input
                class="user__info"
                type="text"
                :placeholder="`${cardModel.name}`"
                v-model="cardModel.name"
                :class="{ invalid: !nam }"
                @blur="clearValidity('nam')"
              />
            </div>

            <div class="card__div">
              <label>
                {{ $t("card-about.form.label-4") }}
              </label>

              <p class="validation" v-if="!city">Doly addresiňizi ýazyň</p>
              <input
                class="user__info"
                type="text"
                :placeholder="`${cardModel.adress}`"
                v-model="cardModel.adress"
                :class="{ invalid: !city }"
                @blur="clearValidity('city')"
              />
            </div>

            <div class="card__div">
              <label>{{ $t("card-about.form.label-5") }} </label>
              <p class="validation" v-if="!res">Doly týunerň belgisini ýazyň</p>
              <input
                class="user__info"
                type="text"
                :placeholder="cardModel.resiver"
                v-model="cardModel.resiver"
                :class="{ invalid: !res }"
                @blur="clearValidity('res')"
              />
            </div>
          </form>

          <div class="price_container">
            <div class="price">
              <h1 class="price__header-1">Aktiw bukja</h1>
              <div class="price__about">
                <div class="price__header">
                  <h2>{{ current_packet?.packet }}</h2>
                  <img
                    src="../../../assets/tv-yzyndan.svg"
                    alt="Pursat TV Icon"
                    style="width: 100px; height: 10%; max-width: 200px"
                  />
                </div>
                <div class="chanels-price">
                  <p>
                    {{ current_packet?.description }}
                  </p>
                  <div class="card-plan">
                    BIR AÝ
                    <span class="card-price">
                      <span class="span-1">{{ current_packet?.price }}</span>
                      <span class="span-2">TMT</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              Mohleti
              <div class="user__info">
                {{ `${new Date(card.date_start * 1000).toLocaleDateString()}` }}
                - {{ `${new Date(card.date_end * 1000).toLocaleDateString()}` }}
              </div>
            </div>

            <div class="buttons">
              <base-button @click.prevent="reactivateCardHandler" class="btn-1"
                >{{ $t("card-about.btn-1") }}
              </base-button>
              <base-button @click.prevent="saveChangesHandler"
                >{{ $t("card-about.btn-2") }}
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </MqResponsive>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MqResponsive,
  },
  data() {
    return {
      isLoading: false,
      cardModel: {
        telnumber: null,
        name: "",
        surname: "",
        cardnumber: "",
        address: "",
        resiver: "",
        note: "",
      },
      tel: true,
      sur: true,
      nam: true,
      city: true,
      res: true,
      formIsValid: true,
    };
  },
  methods: {
    ...mapActions({
      loadCard: "cards/loadCardInformation",
      updateCardDetail: "cards/updateCardDetail",
      reactivateCard: "cards/reactivateCard",
      loadPackets: "packets/loadPackets",
    }),
    clearValidity(input) {
      this[input] = true;
    },
    validation() {
      if (
        this.cardModel.telnumber === "" ||
        this.cardModel.telnumber != Number
      ) {
        this.tel = false;
        this.formIsValid = false;
      }
      if (this.cardModel.surname === "") {
        this.sur = false;
        this.formIsValid = false;
      }
      if (this.cardModel.name === "") {
        this.nam = false;
        this.formIsValid = false;
      }
      if (this.cardModel.address === "") {
        this.city = false;
        this.formIsValid = false;
      }
      if (this.cardModel.resiver === "") {
        this.res = false;
        this.formIsValid = false;
      }
    },

    resetData() {
      this.cardModel = {
        telnumber: null,
        name: null,
        surname: null,
        cardnumber: null,
        adress: null,
        resiver: null,
        note: null,
        packet: null,
        srok: null,
      };
      if (this.card) {
        for (let prop in this.cardModel) {
          this.cardModel[prop] = this.card[prop];
        }
      }
    },
    async saveChangesHandler() {
      this.isLoading = true;
      // this.validation();
      // if (!this.formIsValid) return;
      try {
        console.log(this.card);
        await this.updateCardDetail({
          card_id: this.card.id,
          card: this.cardModel,
        });
      } catch (e) {
        this.$store.commit("set_error", "Cannot update card detail");
      }
      this.isLoading = false;
    },
    async reactivateCardHandler() {
      this.isLoading = true;
      try {
        await this.reactivateCard({ card_id: this.card.id });
      } catch (e) {
        this.$store.commit("set_error", "Cannot reactivate card");
      }
      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters({
      card: "cards/get_card_information",
      packets: "packets/get_packets",
    }),
    current_packet() {
      return this.packets.find((pac) => pac.packet === this.card.packet);
    },
  },
  async mounted() {
    this.resetData();
    if (!this.packets || !this.packets.length) {
      this.loadPackets();
    }
  },
};
</script>

<style scoped>
.card-info {
  font-family: "Mulish";
  display: flex;
  justify-content: space-around;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 35px;
  margin: 0;
  background-color: white;
}

.card__user-info {
  font-weight: 500;
  font-size: 14px;
}

.card__div {
  margin-bottom: 10px;
}

.user__info {
  width: 500px;

  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

form input {
  color: #a8a8a8;
}

.card-plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  line-height: 34px;
  color: #3d6cb7;
}

.span-1 {
  color: black;
}

.span-2 {
  margin-left: 20px;
  color: #777;
}

.card-number {
  margin-bottom: 35px;
}

.price__header-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #3d6cb7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
}

.price__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price__about {
  padding: 0 20px;
}

.chanels-price {
  display: flex;
}

p {
  max-width: 400px;
}

.price {
  margin: 35px 0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.buttons {
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  margin-top: 50px;
}

.btn-1 {
  background-color: #e39827;
  border-color: #e39827;
}

.validation {
  margin: 5px;
  color: red;
}

.invalid {
  color: red;
  border-radius: 1px solid red;
}

form label {
  display: block;
}

form input {
  outline: none;
}

@media (width<=1250px) {
  .card-info {
    gap: 20px;
  }

  .user__info {
    width: 450px;
  }

  .price_container {
    width: 450px;
  }

  @media (width<=1050px) {
    .user__info {
      width: 400px;
    }

    .price_container {
      width: 450px;
    }

    p {
      font-size: 14px;
    }

    @media (width<=560px) {
      .price_container {
        width: 400px;
      }

      button {
        padding: 15px !important;
      }

      @media (width<=500px) {
        .price_container {
          width: 350px;
        }

        .user__info {
          width: 100%;
        }

        button {
          padding: 10px !important;
        }

        @media (width<=450px) {
          .price_container {
            width: 300px;
          }
          .md_card-info .user__info {
            width: 100%;
          }
        }
      }
    }
  }

  /* MEDIUM */
  .md_card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 15px;
    margin: 0;
    background-color: white;
  }

  .md_price {
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .md_buttons {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 50px;
  }

  .md_date {
    margin-top: 10px;
    padding: 5px;
  }

  .md_price__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .md_price__header h2 {
    font-size: 20px;
  }

  .md_chanels__price {
    display: flex;
  }

  .md_chanels__price p {
    font-size: 12px;
  }
}
</style>
