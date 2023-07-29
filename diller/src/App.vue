<template>
  <div>
    <router-view></router-view>
    <error-component />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;800&display=swap");

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap");

* {
  box-sizing: border-box;
}

html {
  margin: 0;
}

body {
  margin: 0;
  height: 100%;
}
</style>
<script>
import ErrorComponent from "@/components/ErrorComponent";

export default {
  components: { ErrorComponent },
};
</script>
