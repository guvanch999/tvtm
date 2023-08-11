<template>
  <base-card v-if="show" class="success">
    <svg
      v-if="valid"
      fill="green"
      width="70px"
      height="70px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"
      />
    </svg>

    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg
      v-else-if="!valid && invalid"
      width="70px"
      height="70px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
    >
      <title>cross-circle</title>
      <desc>Created with Sketch Beta.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <g
          id="Icon-Set-Filled"
          sketch:type="MSLayerGroup"
          transform="translate(-570.000000, -1089.000000)"
          fill="red"
        >
          <path
            d="M591.657,1109.24 C592.048,1109.63 592.048,1110.27 591.657,1110.66 C591.267,1111.05 590.633,1111.05 590.242,1110.66 L586.006,1106.42 L581.74,1110.69 C581.346,1111.08 580.708,1111.08 580.314,1110.69 C579.921,1110.29 579.921,1109.65 580.314,1109.26 L584.58,1104.99 L580.344,1100.76 C579.953,1100.37 579.953,1099.73 580.344,1099.34 C580.733,1098.95 581.367,1098.95 581.758,1099.34 L585.994,1103.58 L590.292,1099.28 C590.686,1098.89 591.323,1098.89 591.717,1099.28 C592.11,1099.68 592.11,1100.31 591.717,1100.71 L587.42,1105.01 L591.657,1109.24 L591.657,1109.24 Z M586,1089 C577.163,1089 570,1096.16 570,1105 C570,1113.84 577.163,1121 586,1121 C594.837,1121 602,1113.84 602,1105 C602,1096.16 594.837,1089 586,1089 L586,1089 Z"
            id="cross-circle"
            sketch:type="MSShapeGroup"
          ></path>
        </g>
      </g>
    </svg>
    <h1 class="valid" v-if="valid">{{ $t("the-success.h1-valid") }}</h1>
    <h1 class="invalid" v-else-if="!valid && invalid">
      {{ $t("the-success.h1-invalid") }}
    </h1>

    <h2 v-if="valid">{{ $t("the-success.h2-valid") }}</h2>
    <h2 v-else-if="!valid && invalid">{{ $t("the-success.h2-invalid") }}</h2>
    <base-button class="valid__btn" v-if="valid" @click="closeSuccess">{{
      $t("the-success.btn")
    }}</base-button>
    <base-button
      class="invalid__btn"
      v-else-if="!valid && invalid"
      @click="closeSuccess"
      >{{ $t("the-success.btn") }}</base-button
    >
  </base-card>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    valid: {
      type: Boolean,
      required: true,
      default: false,
    },
    invalid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    closeSuccess() {
      this.$emit("closeSuccess");
    },
  },
};
</script>

<style scoped>
.success {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  text-align: center;
}

.success h1 {
  font-size: 24px;
}
.success h2 {
  color: #a8a8a8;
  font-size: 20px;
}
.valid {
  color: green;
}
.invalid {
  color: red;
}

.valid__btn {
  background-color: green;
  border-color: green;
}
.invalid__btn {
  background-color: red;
  border-color: red;
}

@media (width<=550px) {
  .success {
    width: 400px !important;
  }
  @media (width<=500px) {
    .success {
      width: 350px !important;
    }
    @media (width<=450px) {
      .success {
        width: 300px !important;
      }
    }
  }
}
</style>
