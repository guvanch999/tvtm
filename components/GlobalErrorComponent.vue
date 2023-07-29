<template>
  <div>
    <div
      v-if="!!message"
      style="position: fixed;z-index: 99999;width: 90%;left: 5%;color: white;top:10px;padding: 10px 12px;border-radius: 4px;"
      :style="{'background-color':color}">
      {{ message }}
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  props: {
    color: {
      type: String,
      default: "#fa3434"
    },
  },
  watch: {
    message() {
      if (this.message) {
        const cntx = this
        setTimeout(function () {
          cntx.closeError()
        }, 3000)
      }
    }
  },
  methods: {
    closeError() {
      this.$store.commit('set_error', null)
    }
  },
  computed: {
    ...mapGetters({
      message: 'get_error'
    })
  }
}
</script>
