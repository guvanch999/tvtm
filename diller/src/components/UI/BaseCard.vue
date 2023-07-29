<template>
  <div class="card" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 35px;
  margin: 20px auto;
}

.card-blue {
  box-shadow: 8px 2px 16px rgba(61, 92, 183, 0.26);
  max-width: 30rem;
}

.card-gold {
  box-shadow: 8px 2px 16px rgba(203, 182, 0, 0.26);
  max-width: 30rem;
}
</style>
