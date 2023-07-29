<template>
  <div>
    <v-card-title>Card histories:</v-card-title>
    <v-tabs
      color="deep-purple accent-4"
    >
      <v-tab>Subscription history</v-tab>
      <v-tab>Activity history</v-tab>
      <v-tab-item>
        <SubscriptionHistory :client="client"/>
      </v-tab-item>
      <v-tab-item>
        <ActivityHistory :client="client"/>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import SubscriptionHistory from "./SubscriptionHistory";
import ActivityHistory from "./ActivityHistory";

export default {
  components: {ActivityHistory, SubscriptionHistory},
  props: {
    client: {
      type: Object,
      default: null
    }
  },

}
</script>
