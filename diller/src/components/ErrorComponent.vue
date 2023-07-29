<template>
  <div>
    <div v-if="!!error" class="alert-container">
      <strong class="alert-error-text">{{ error }}</strong>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      set_error: "set_error",
    }),
    close_error() {
      setTimeout(() => {
        this.set_error(null)
      }, 3000)
    }
  },
  computed: {
    ...mapGetters({
      error: "get_error",
    }),
  },
  watch: {
    error() {
      if (this.error) {
        this.close_error()
      }
    },
  },
};
</script>

<style>
.alert-container {
  position: fixed;
  z-index: 999;
  top: 10px;
  right: 35%;
  background-color: #ac3838;
  padding: 10px 12px;
  border-radius: 4px;
  min-width: 30%;
  text-align: center;
}

.alert-error-text {
  font-size: 22px;
  color: white;
}
</style>
