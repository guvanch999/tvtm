<template>
  <li class="general__li">
    <ul>
      <li>
        <div class="valid" v-if="active"></div>
        <div class="invalid" v-else></div>
      </li>
      <li>
        <router-link to="/">{{ id }}</router-link>
      </li>
      <li>{{ expires }}</li>
      <li>{{ owner }}</li>
      <li>{{ contact }}</li>
      <li>{{ mark }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["active", "id", "expires", "owner", "contact", "mark"],
};
</script>

<style scoped>
ul {
  padding: 10px 0 10px 15px;
  list-style: none;
  display: flex;
  gap: 140px;
  border-bottom: 2px solid #f3f4f5;
}
.valid {
  height: 23px;
  width: 23px;
  background-color: green;
  border-radius: 5px;
}

.invalid {
  height: 23px;
  width: 23px;
  background-color: orange;
  border-radius: 5px;
}

a {
  text-decoration: none;
  color: #3d5cb7;
  border-bottom: 1px solid #3d5cb7;
}
</style>
