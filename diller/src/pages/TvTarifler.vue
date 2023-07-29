<template>
  <base-dialog invalid>
    <template #header>{{ $t("dialog.valid-header") }}</template>
    <template #default>
      <p class="dialog-paragraph">{{ $t("dialog.valid-par") }}</p>
      <span class="dialog-price">
        TMT 432<span class="dialog-span">.00</span>
      </span>
    </template>
  </base-dialog>
  <the-header registered></the-header>
  <div class="container">
    <base-card class="card">
      <h1>Standart</h1>
      <div class="general-info">
        <div class="first-info">
          <div class="card-info">
            <div class="card-plan">
              <input type="checkbox" />
              BIR AÝ
              <span class="card-price price-1">
                <span>40</span>
                <span class="span">TMT</span>
              </span>
            </div>

            <div class="card-plan thick">
              <input type="checkbox" />
              BIR ÝYL
              <span class="card-price price-1">
                <span>432</span>
                <span class="span">TMT</span>
              </span>
            </div>
          </div>

          <p>
            Biziň ulanyjylarymyz üçin aýratynlyklarymyz, hiliň ýokarylygy we
            köpdürliligi bilen tapawutlanýar
          </p>

          <ul>
            <li>
              <img src="../assets/Check-blue.png" alt="Check image" />
              <h1>SD + HD hilli 120 kanal</h1>
            </li>
            <li>
              <img src="../assets/Check-blue.png" alt="Check image" />
              <h1>Çagalar üçin 5 kanal</h1>
            </li>
            <li>
              <img src="../assets/Check-blue.png" alt="Check image" />
              <h1>Kinofilm üçin 12 kanal</h1>
            </li>
            <li>
              <img src="../assets/Check-blue.png" alt="Check image" />
              <h1>7 sany sport kanallary</h1>
            </li>
            <li>
              <img src="../assets/Check-blue.png" alt="Check image" />
              <h1>12 gündelik kanallary</h1>
            </li>
            <li>
              <img src="../assets/Check-blue.png" alt="Check image" />
              <h1>20 HD hilli kanallar</h1>
            </li>
            <li>
              <img src="../assets/Check-blue.png" alt="Check image" />
              <h1>We başgada dürli daşary ýurt kanallary</h1>
            </li>
          </ul>
        </div>

        <img src="../assets/chanels.png" alt="Chanels image" class="chanels" />
      </div>
      <base-button>{{ $t("prices.btn") }}</base-button>
    </base-card>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mulish";
}
.card {
  width: 60%;
}

.general-info {
  display: flex;
  justify-content: space-between;
}

.card-info {
  display: flex;
}

.first-info {
  max-width: 450px;
}
.card-plan {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  line-height: 34px;
}

input {
  position: absolute;
  top: 0;
  left: 10px;
  accent-color: #3d5cb7;
}

.card-price {
  font-size: 30px;
  line-height: 51px;
}
.container ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.container li {
  display: flex;
  gap: 50px;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
}

.container p {
  font-weight: 400;
  line-height: 22px;
  padding: 20px 10px;
  color: #777;
  border-bottom: 2px solid #ddd;
}
.span {
  margin-left: 20px;
  color: #777;
}

.card-price.price-1 {
  color: #3d5cb7;
}

.card-price.price-2 {
  color: #cbb600;
}

.card-plan.thick {
  border-left: 2px solid #ddd;
}

.container button {
  margin-top: 20px;
  width: 100%;
  background-color: #e0e0e0;
  color: black;
  border-color: #e0e0e0;
}

.dialog-paragraph {
  color: #777;
  font-family: "Plus Jakarta Sans";
  font-size: 21px;
  font-weight: 400;
}

.dialog-price {
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 50px;
}

.dialog-span {
  font-size: 32px;
  color: #777;
}

@media (width<=1750px) {
  .chanels {
    width: 80%;
    height: 80%;
  }
}
</style>
