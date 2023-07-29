<template>
  <section>
    <the-header></the-header>
    <tarif-first></tarif-first>
    <tarif-second></tarif-second>
    <tarif-third></tarif-third>
    <!-- <tarif-fourth></tarif-fourth> -->
    <the-footer></the-footer>
  </section>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import TarifFirst from "../components/tarifler/TarifFirst";
import TarifSecond from "../components/tarifler/TarifSecond";
import TarifThird from "../components/tarifler/TarifThird";
// import TarifFourth from "../components/tarifler/TarifFourth";
export default {
  components: {
    TarifFirst,
    TarifSecond,
    TarifThird,
    // TarifFourth,
    TheHeader,
    TheFooter,
  },
};
</script>
