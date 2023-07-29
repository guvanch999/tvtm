<template>
  <div class="change">
    <div class="change-box">
      <div class="change-1">
        {{ $t("card-change.form.label-1") }}
        <div class="change-1-field">210000002</div>
      </div>

      <div class="change-2">
        {{ $t("card-change.form.label-2") }}

        <div class="change-2-field">XXXXXXXXX</div>
      </div>

      <div class="change-3">
        {{ $t("card-change.form.label-3") }}

        <div class="change-2-field">Sebäbi,</div>
      </div>
    </div>
    <div class="controls">
      <div>
        <base-button class="controls__btn-1">
          {{ $t("card-change.btn-1") }}
        </base-button>
        <base-button class="controls__btn-2">
          {{ $t("card-change.btn-2") }}
        </base-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.change {
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
