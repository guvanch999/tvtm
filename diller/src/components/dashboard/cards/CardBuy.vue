<template>
  <MqResponsive target="lg-">
    <div class="large_buy">
      <div class="box__one">
        <h1 class="large_box__header">{{ $t("card-buy.h1") }}</h1>
        <base-small
          class="large_box__one-card"
          v-for="packet in packets"
          :key="packet.id"
        >
          <h2 class="box__one--header-1">{{ packet.packet }}</h2>
          <p class="box__one--paragraph">
            <!--            {{ $t("card-buy.p") }} 09.07.2023 - 09.10.2023-->
          </p>
        </base-small>
        <base-small class="large_box__one-card">
          <h2 class="box__one--header-2">
            <span class="box__one--span">{{ $t("card-buy.p-2") }}</span> 560
            manat
          </h2>
          <div>
            <p>{{ $t("card-buy.p-3") }} 15%</p>
            <p>
              {{ $t("card-buy.p-4")
              }}<span class="box__one--span-2">36 TMT</span>
            </p>
          </div>
        </base-small>
      </div>

      <div class="box__two">
        <h1 class="large_box__header">{{ $t("card-buy.h2") }}</h1>
        <div class="box__cards">
          <base-small
            class="card"
            v-for="packet in packets"
            :key="packet.id"
            :class="selectedPacket === packet.packet ? 'active' : ''"
            @click="selectedPacket = packet.packet"
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

        <div class="controls">
          <form>
            <p v-if="false" class="box__two--error">
              Üns beriň! Bukjany üýtgetmek, diňe öňki bukjaňyzyň möhleti dolan
              bolsa rugsat berilýär!
            </p>
            <label>{{ $t("card-buy.label") }}</label>
            <input type="number" />
          </form>
          <div>
            <base-button @click="buyOrExtendHandler" class="box__two--btn-2"
              >{{ $t("card-buy.btn") }}
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </MqResponsive>

  <MqResponsive target="xl">
    <div class="buy">
      <div class="box__one">
        <h1 class="box__header">{{ $t("card-buy.h1") }}</h1>
        <base-small
          class="box__one-card"
          v-for="packet in packets"
          :key="packet.id"
        >
          <h2 class="box__one--header-1">{{ packet.packet }}</h2>
          <p class="box__one--paragraph">
            <!--            {{ $t("card-buy.p") }} 09.07.2023 - 09.10.2023-->
          </p>
        </base-small>
      </div>

      <div class="box__two">
        <h1 class="box__header">{{ $t("card-buy.h2") }}</h1>
        <div class="box__cards">
          <base-small
            class="card"
            v-for="packet in packets"
            :key="packet.id"
            :class="selectedPacket === packet.packet ? 'active' : ''"
            @click="selectedPacket = packet.packet"
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

        <div class="controls">
          <form>
            <p v-if="false" class="box__two--error">
              Üns beriň! Bukjany üýtgetmek, diňe öňki bukjaňyzyň möhleti dolan
              bolsa rugsat berilýär!
            </p>
            <label>{{ $t("card-buy.label") }}</label>
            <input type="number" v-model="srok" />
          </form>
          <div>
            <base-button @click="buyOrExtendHandler" class="box__two--btn-2"
              >{{ $t("card-buy.btn") }}
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </MqResponsive>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { MqResponsive } from "vue3-mq";

export default {
  components: {
    MqResponsive,
  },
  data() {
    return {
      isLoading: false,
      selectedPacket: null,
      srok: 0,
    };
  },
  methods: {
    ...mapActions({
      buyOrExtend: "cards/buyOrExtend",
      loadPackets: "packets/loadPackets",
    }),
    async buyOrExtendHandler() {
      this.isLoading = true;
      try {
        await this.buyOrExtend({
          card_id: this.card.id,
          body: {
            packet: this.selectedPacket,
            srok: this.srok,
          },
        });
        this.selectedPacket = null;
        this.srok = 0;
      } catch (e) {
        this.$store.commit("set_error", "Cannot handle request");
      }
      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters({
      card: "cards/get_card_information",
      packets: "packets/get_packets",
    }),
  },

  async mounted() {
    await this.loadPackets();
  },
};
</script>
<style scoped>
.buy {
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 35px;
  margin: 0;
  background-color: white;
}

.box__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 10px;
  margin-bottom: 20px;
}

.box__header {
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
}

.box__one--header-1 {
  color: #3d6cb7;
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

.box__one--header-1,
.box__one--paragraph {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box__one-card {
  margin-top: 30px;
}

.price__header {
  margin: 5px;
  font-weight: 700;
  font-size: 20px;
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

p {
  max-width: 400px;
}

.price {
  margin: 35px 0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  display: block;
  padding: 10px;
  border: 1px solid #3d6cb7;
  border-radius: 10px;
  width: 300px;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.box__two--error {
  color: red;
  font-weight: 600;
  font-size: 14px;
}

.box__two--btn-1 {
  border: 1px solid #e9b05c;
  background-color: #e9b05c;
}

.box__two--btn-1:hover,
.box__two--btn-1:active {
  background-color: rgba(233, 176, 92, 0.26);
  border-color: rgba(233, 176, 92, 0.26);
}

.card:hover {
  cursor: pointer;
}

.card {
  border: 1px solid transparent;
}

.active {
  border: 1px solid #3d5cb7;
}

@media (width<=1750px) {
  .box__cards {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width<=750px) {
    .large_box__one-card {
      width: 400px !important;
    }

    .box__cards {
      grid-template-columns: repeat(1, 1fr);
    }
    .controls {
      gap: 20px;
    }
    @media (width<=590px) {
      .controls {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}

/* LARGE */
.large_buy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.large_box__header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.large_box__one-card {
  margin-bottom: 10px;
  width: 500px;
}
</style>
