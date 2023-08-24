<template>
  <div class="container">
    <h1 class="head">{{ $t("search.h1") }}</h1>
    <base-card class="search__card">
      <div class="search__block">
        <form class="search__form">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.3952 15.9761C19.852 12.8209 19.63 8.25612 16.7295 5.3556C13.5887 2.2148 8.49642 2.2148 5.35561 5.3556C2.2148 8.49642 2.2148 13.5887 5.35561 16.7295C8.25614 19.63 12.821 19.8519 15.9762 17.3952C15.9897 17.4106 16.0039 17.4257 16.0186 17.4403L20.2838 21.7055C20.6764 22.0982 21.313 22.0982 21.7056 21.7055C22.0981 21.3129 22.0981 20.6764 21.7056 20.2838L17.4404 16.0186C17.4256 16.0039 17.4105 15.9898 17.3952 15.9761ZM15.2426 6.75737C17.5858 9.10051 17.5858 12.8995 15.2426 15.2427C12.8995 17.5858 9.1005 17.5858 6.75736 15.2427C4.41421 12.8995 4.41421 9.10051 6.75736 6.75737C9.1005 4.41421 12.8995 4.41421 15.2426 6.75737Z"
              fill="#777"
            />
          </svg>
          <input
            type="search"
            :placeholder="$t('search.search-placeholder')"
            v-model="card_id"
          />
        </form>
        <base-button @click="get_user_info">{{
          $t("search.btn-1")
        }}</base-button>
      </div>

      <base-card class="info__block" v-if="card_info">
        <div class="info__block--1">
          <form class="info__form">
            <div>
              {{ $t("search.form.label-1") }}
              <p>{{ card_info?.cardnumber || "" }}</p>
            </div>
            <div>
              {{ $t("search.form.label-2") }}
              <p>{{ card_info?.telnumber || "" }}</p>
            </div>
            <div>
              {{ $t("search.form.label-3") }}
              <p>{{ card_info?.surname || "" }}</p>
            </div>
            <div>
              {{ $t("search.form.label-4") }}
              <p>{{ card_info?.name || "" }}</p>
            </div>
            <div>
              {{ $t("search.form.label-5") }}
              <p>{{ card_info?.adress || "" }}</p>
            </div>
          </form>

          <div>
            <base-card class="packet__block">
              <h1 class="packet__header">Aktiw bukja</h1>
              <div class="packet__about">
                <div class="packet__header--2">
                  {{ card_info.activ_packet }}
                  <img
                    src="../../assets/tv-yzyndan.svg"
                    alt="Pursat TV Icon"
                    style="width: 100px; height: 10%; max-width: 200px"
                  />
                </div>
                <div class="price__block">
                  <p>{{ packetDesc ?? "Saylanmadyk" }}</p>
                  <div class="price__info">
                    BIR AÝ
                    <span class="price__price">
                      50
                      <span class="span-2">TMT</span>
                    </span>
                  </div>
                </div>
              </div>
            </base-card>
            <div>
              {{ $t("search.term") }}
              <div class="packet__term">
                {{
                  `${new Date(
                    card_info.date_start * 1000
                  ).toLocaleDateString()}`
                }}
                -
                {{
                  `${new Date(card_info.date_end * 1000).toLocaleDateString()}`
                }}
              </div>
            </div>
          </div>
        </div>

        <div class="packets__block">
          <base-small
            class="packet"
            v-for="packet in packets"
            :key="packet.packet"
            :class="{ active: selectedPacket === packet.packet }"
            @click="selectPacket(packet)"
          >
            <h1 class="packets__header">
              {{ packet.packet }}
            </h1>
            <div class="packets__info">
              <p class="packets__description">{{ packet.description }}</p>
              <span class="packets__span"
                >BIR AY
                <div class="packets__price">
                  <span class="packets__span--1">{{ packet.price }}</span>
                  <span class="packets__span--2">TMT</span>
                </div>
              </span>
            </div>
          </base-small>
        </div>
        <div class="controls">
          <div class="term">
            {{ $t("card-buy.label") }}
            <select name="term" id="term" v-model="srok">
              <optgroup>
                <option v-for="term in terms" :key="term" :value="term">
                  {{ term }}
                </option>
              </optgroup>
            </select>
          </div>

          <base-button
            class="buy__btn"
            @click="buyNewPacket"
            :class="{ active: isLoading }"
            >{{ $t("search.btn-2") }}</base-button
          >
        </div>
      </base-card>
    </base-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      card_id: null,
      srok: 1,
      selectedPacket: null,
      terms: [...Array(12).keys()].map((i) => i + 1),
    };
  },
  methods: {
    ...mapActions({
      loadPackets: "packets/loadPackets",
      getInfo: "search/getInfo",
      buyPacket: "search/buyPacket",
    }),
    async get_user_info() {
      try {
        await this.getInfo({
          card_id: this.card_id,
        });
        this.card_id = "";
        console.log(this.card_info);
      } catch (e) {
        console.log(e);
        this.$store.commit("set_error", "Kart maglumatyny tapmak amala aşmady");
      }
    },
    selectPacket(packet) {
      this.selectedPacket = packet.packet;
    },
    async buyNewPacket() {
      if (this.isLoading) return;

      this.isLoading = true;
      try {
        this.buyPacket({
          body: {
            cardnumber: this.card_info.cardnumber,
            packet: this.selectedPacket,
            srok: this.srok,
          },
        });
      } catch (e) {
        console.log(e);
        this.$store.commit("set_error", "Paket satyn almak amala aşmady");
      }
      this.isLoading = false;
      this.selectedPacket = null;
      this.srok = 1;
    },
  },
  computed: {
    ...mapGetters({
      packets: "packets/get_packets",
      card_info: "search/get_card_info",
    }),
    packetDesc() {
      const packet = this.packets.find(
        (pack) => this.card_info?.activ_packet === pack.packet
      );
      return packet?.description;
    },
  },
  async mounted() {
    await this.loadPackets();
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  margin: 10px 0 0 15px;
  border-radius: 10px;
  background-color: rgba(141, 143, 161, 0.1);
  font-weight: 500;
  padding: 10px 30px;
  font-family: "Mulish", sans-serif;
}

.head {
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
}

/* Search field */
.search__card {
  background-color: white;
}

.search__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.search__form {
  width: 100%;
  padding: 10px;
  background-color: rgba(141, 143, 161, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}
.search__form input {
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
}
.search__form input::placeholder {
  font-size: 16px;
}

/* Information Form */
.info__block--1 {
  display: flex;
  justify-content: space-around;
  gap: 30px;
}

.info__form {
  width: 500px;
}

.info__form p {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #a8a8a8;
  font-size: 14px;
}

/* Packet information */
.packet__block {
  padding: 0 !important;
}
.packet__header {
  margin: 0;
  text-align: center;
  font-size: 16px;
  color: white;
  padding: 10px;
  background-color: #3d5cb7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.packet__about {
  padding: 35px;
}
.packet__header--2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}

.price__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  width: 400px;
}
.price__info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #3d5cb7;
}
.price__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #000;
}
.span-2 {
  color: #777;
}

.packet__term {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

/* Packets block */
.packets__block {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.packets__header {
  margin: 0;
  font-size: 20px;
}

.packets__description {
  width: 300px;
}

.packets__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.packets__span {
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.packets__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #3d5cb7;
}

.packets__span--1 {
  font-size: 20px;
}
.packets__span--2 {
  font-size: 20px;
  color: #777;
}

.active {
  border: 1px solid #3d5cb7;
}
/* Button */
.controls {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.term {
  padding: 10px;
  border: 1px solid #3d5cb7;
  border-radius: 10px;
}

.buy__btn {
  position: relative;
}
.buy__btn:after {
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

/* Media */
@media (width <= 1790px) {
  .packets__block {
    gap: 10px;
  }
  .packets__description {
    width: auto;
  }
  @media (width<=1350px) {
    .packets__description {
      font-size: 14px;
    }
    .packet__about {
      padding: 10px;
    }
    @media (width<=1200px) {
      p {
        width: 300px;
      }
    }
    @media (width<=960px) {
      p {
        width: 250px;
      }
      .packets__block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      @media (width<=850px) {
        p {
          width: 200px;
        }
      }
      @media (width<=780px) {
        .packets__block {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .info__block--1 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .packet {
          margin-top: 10px;
        }
        .packets__description {
          width: auto;
        }
        .info__form {
          width: auto;
        }
        .info__form p {
          width: 500px;
        }
        p {
          width: auto;
        }
        @media (width<=680px) {
          .info__form p {
            width: 400px;
          }
          .controls {
            gap: 10px;
          }
          .controls button,
          .term {
            padding: 10px !important;
          }
        }
        @media (width<=580px) {
          .info__form p {
            width: 340px;
          }
          @media (width<=520px) {
            .info__form p {
              width: 300px;
            }
            .head {
              font-size: 22px;
            }
            @media (width<=450px) {
              .container {
                margin: 0;
                padding: 5px;
              }
              .head {
                font-size: 20px;
                padding-left: 10px;
              }
              .info__form p {
                width: 250px;
              }
              .packets__description {
                font-size: 13px;
              }
              p {
                font-size: 13px;
              }
              .term {
                font-size: 13px;
              }
              .term select {
                width: 30px;
              }
              .buy__btn {
                font-size: 14px;
              }
              @media (width<=400px) {
                .controls button,
                .controls .term {
                  padding: 9px !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
