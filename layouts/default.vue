<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <global-error-component/>
  </v-app>
</template>

<script>
import GlobalErrorComponent from "../components/GlobalErrorComponent";
export default {
  name: 'DefaultLayout',
  components: {GlobalErrorComponent},
  data() {
    return {
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-view-list',
          title: 'Dillerler',
          to: '/dillers'
        },
        {
          icon: 'mdi-newspaper-variant-multiple',
          title: 'Tazelikler',
          to: '/news'
        },
        {
          icon: 'mdi-credit-card-multiple-outline',
          title: 'Kardlar',
          to: '/clients'
        },
        {
          icon: 'mdi-package-variant',
          title: 'Paketler',
          to: '/packets'
        },
        {
          icon: 'mdi-cog-outline',
          title: 'Settings',
          to: '/settings'
        },
      ],
      miniVariant: false,
      title: 'AlemTVTM admin'
    }
  }
}
</script>
