import { createRouter, createWebHistory } from "vue-router";
import { h, resolveComponent } from "vue";

// LAYOUT
import TheRegister from "../src/components/layout/TheRegister";
import TheLogin from "../src/components/layout/TheLogin";

//PAGES
import TvHome from "./pages/TvHome";
// import TvTarifler from "./pages/TvTarifler";
import TvDashboard from "./pages/TvDashboard";
import NotFound from "./pages/NotFound";

//COMPONENTS
import TvNews from "./components/dashboard/TvNews";
import TvProfile from "./components/dashboard/TvProfile";
import TvBalance from "../src/components/dashboard/TvBalance";

//CARDS
import TvCards from "./components/dashboard/TvCards";
import CardDetails from "./components/dashboard/cards/CardDetails";
import CardAbout from "./components/dashboard/cards/CardAbout";
import CardSubscription from "./components/dashboard/cards/CardSubscription";
import CardActive from "./components/dashboard/cards/CardActive";
import CardBuy from "./components/dashboard/cards/CardBuy";
import CardChange from "./components/dashboard/cards/CardChange";
import i18n from "./i18n";
// import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: `/${i18n.global.locale}/home`,
    },
    {
      path: "/:lang",
      component: {
        render() {
          return h(resolveComponent("router-view"));
        },
      },
      children: [
        { path: "/", redirect: "/home" },
        {
          path: "home",
          component: TvHome,
        },
        // { path: "tarifler", component: TvTarifler },
        { path: ":notFound(.*)", component: NotFound },

        {
          path: "dashboard",
          component: TvDashboard,
          meta: { requiresAuth: true },

          children: [
            //DASHBOARD/COMPONENTS
            { path: "news", component: TvNews },
            { path: "cards", component: TvCards },
            {
              path: `/:lang/cards/:c1`, //${i18n.global.locale}
              component: CardDetails,
              children: [
                {
                  path: `/:lang/cards/:c1/about`,
                  component: CardAbout,
                },
                {
                  path: `/:lang/cards/:c1/subscription`,
                  component: CardSubscription,
                },
                {
                  path: `/:lang/cards/:c1/active`,
                  component: CardActive,
                },
                {
                  path: `/:lang/cards/:c1/buy`,
                  component: CardBuy,
                },
                {
                  path: `/:lang/cards/:c1/change`,
                  component: CardChange,
                },
              ],
            },
            { path: "profile", component: TvProfile },
            { path: "balance", component: TvBalance },
          ],
        },

        //LAYOUT
        {
          path: "register",
          component: TheRegister,
          meta: { requiresAuth: true },
        },
        {
          path: "login",
          component: TheLogin,
          meta: { requiresAuth: true },
        },
      ],
      //PAGES
    },
  ],
});

router.beforeEach((to, _, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "tk";
  }
  i18n.global.locale = language;
  next();

  // if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
  //   next("/auth");
  // } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
  //   next("coaches");
  // } else {
  //   next();
  // }
});
export default router;
