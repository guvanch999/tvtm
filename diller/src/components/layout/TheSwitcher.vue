<template>
  <div class="locale-changer">
    <select name="languages" id="languages">
      <option value="tkm" @click="setLocale('tk')">Türkmen(TKM)</option>
      <option value="rus" @click="setLocale('ru')">Rus(RU)</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>

<style scoped>
select {
  border: none;
  background-color: transparent;
  font-weight: 700;
}
</style>
