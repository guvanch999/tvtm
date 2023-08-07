import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Vue3Mq } from "vue3-mq";
import { defineAsyncComponent } from "vue";

import BaseButton from "./components/UI/BaseButton";
import BaseCard from "./components/UI/BaseCard";
import i18n from "./i18n";

const BaseDialog = defineAsyncComponent(() => {
  import("./components/UI/BaseDialog");
});
const BaseSmall = defineAsyncComponent(() => {
  import("./components/UI/BaseSmall");
});
const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
app.use(Vue3Mq, {
  preset: "bootstrap4",
});
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);
app.component("base-small", BaseSmall);

app.mount("#app");
