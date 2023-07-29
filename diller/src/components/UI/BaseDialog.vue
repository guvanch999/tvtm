<template>
  <teleport to="body">
    <dialog open v-if="show">
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <div class="valid" v-if="valid">
          <img src="../../assets/base-check.png" alt="Valid check icon" />
        </div>
        <div class="invalid" v-else>
          <img src="../../assets/base-cross.png" alt="Invalid check icon" />
        </div>
        <slot> </slot>
        <div class="controls-valid" v-if="valid">
          <base-button link to="/">{{ $t("dialog.valid-btn-1") }}</base-button>
          <base-button link to="/">{{ $t("dialog.valid-btn-2") }}</base-button>
        </div>

        <div v-else>
          <base-button link to="/">{{
            $t("dialog.invalid-btn-1")
          }}</base-button>
          <base-button link to="/">{{
            $t("dialog.invalid-btn-2")
          }}</base-button>
        </div>
      </section>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    valid: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 60px;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
header {
  width: 100%;
  padding: 10px;
  font-family: "Mulish";
  font-weight: 700;
  font-size: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

a {
  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  margin: 20px 20px 0 0;
}

.valid {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: green;
  border-radius: 100%;
  max-width: 100px;
}
.invalid {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: red;
  border-radius: 100%;
  max-width: 100px;
}
</style>
