<template>
  <div>
    <div v-if="!!error" class="alert-container">
      <div style="border-right: 1px solid #ddd">
        <img src="../assets/error.png" alt="Error icon" />
      </div>
      <div>
        <h1 style="margin: 0; padding: 0; color: white">
          Ýalňyşlyk ýüze çykdy
        </h1>
        <p style="margin: 10px; padding: 0; color: white; font-size: 22px">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      set_error: "set_error",
    }),
    close_error() {
      setTimeout(() => {
        this.set_error(null);
      }, 3000);
    },
  },
  computed: {
    ...mapGetters({
      error: "get_error",
    }),
  },
  watch: {
    error() {
      if (this.error) {
        this.close_error();
      }
    },
  },
};
</script>

<style>
.alert-container {
  position: fixed;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 999;
  top: 1%;
  right: 1%;
  min-width: 40%;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: rgba(255, 51, 51, 0.9);
}
</style>
