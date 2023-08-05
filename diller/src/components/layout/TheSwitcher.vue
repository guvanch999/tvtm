<template>
  <div class="locale-changer">
    <select name="languages" id="languages" @change="setLocale()">
      <option value="tk">Türkmen(TKM)</option>
      <option value="ru">Rus(RU)</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale() {
      const select = document.getElementById("languages").value;
      if (select === "tk") {
        this.$i18n.locale = select;
      }
      if (select === "ru") {
        this.$i18n.locale = select;
      }
    },
  },
};
</script>

<style scoped>
select {
  border: none;
  background-color: transparent;
  font-weight: 700;
  outline: none;
}
</style>
