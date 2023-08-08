<template>
  <div style="position: fixed;top:0;left: 0;right: 0;min-height: 100vh;background-color: rgba(0,0,0,0.1);z-index: 999">
    <div style="position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%)">
      <v-card class="cardClass">
        <v-card-title class="card-title-class">
          Ýagdaý saýlaň
          <v-spacer/>
          <span @click="$emit('closeDialog')"
                class="mdi mdi-close closeCoverEffect"></span>
        </v-card-title>
        <v-list flat class="listClass">
          <v-list-item-group
            v-model="selectedStatus"
            color="indigo"
          >
            <v-list-item
              v-for="(item, i) in filteredStatuses"
              :key="i"
              :value="item.value"
              active-class="active-class-for-item"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox
                  :input-value="selectedStatus===item.value"
                  class="checkboxClass"
                ></v-checkbox>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-card-actions>
          <v-spacer/>
          <v-btn depressed small @click="$emit('closeDialog')">Bes et</v-btn>
          <v-btn
            :disabled="!!!selectedStatus"
            small
            depressed
            style="color: white;background-color: green"
            @click="$emit('chooseStatus',selectedStatus)">
            Ugratmak
          </v-btn>
        </v-card-actions>
        <loading-component v-if="isLoading"/>
      </v-card>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import LoadingComponent from "./LoadingComponent";

export default {
  components: {LoadingComponent},
  props: {
    currentStatus: {
      type: String,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedStatus: null
    }
  },
  computed: {
    ...mapGetters({
      statuses: "get_status_colors"
    }),
    filteredStatuses() {
      let filtered = []
      for (let prop in this.statuses) {
        if (this.currentStatus !== prop) {
          filtered.push({
            name: this.statuses[prop].label,
            value: prop
          })
        }
      }
      return filtered
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.cardClass {
  width: 30vw;
  border-radius: 11px !important;
  position: relative;
}

.card-title-class {
  background-color: #6FC276;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

.listClass {
  margin: 0 15px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #8d8c8c;
}

.checkboxClass {
  border-radius: 11px;
  color: black;
}

.active-class-for-item {
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.negative-custom-btn {
  border: none;
  color: black;
  border-radius: 6px;
}

.negative-custom-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.send-btn-class {
  border-radius: 6px;
}

.btn-disabled-class {
  background-color: rgba(0, 0, 0, 0.1) !important;
  color: rgba(45, 45, 45, 0.4) !important;
  border: 1px solid transparent !important;
}

</style>
