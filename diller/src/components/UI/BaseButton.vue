<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 12px 30px;
  font: inherit;
  background-color: #3d5cb7;
  border: 1px solid #3d5cb7;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgba(61, 92, 183, 0.26);
  border-color: rgba(61, 92, 183, 0.26);
  color: black;
}

.gold:active,
.gold:hover {
  background-color: rgba(203, 182, 0, 0.26);
  border-color: rgba(203, 182, 0, 0.26);
}
.gold {
  background-color: #cbb600;
  border-color: #cbb600;
}
</style>
