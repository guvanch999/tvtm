<template>
  <base-card v-if="show" class="request">
    <svg
      v-if="valid"
      width="70px"
      height="70px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.482 1.99989C13.1608 1.99885 13.7632 1.99793 14.3196 2.2284C14.876 2.45887 15.3014 2.88551 15.7806 3.36624C16.7302 4.31875 17.6813 5.26983 18.6338 6.21942C19.1145 6.69867 19.5412 7.12401 19.7716 7.68041C20.0021 8.23682 20.0012 8.83926 20.0001 9.51807C19.9963 12.034 20 14.5499 20 17.0659C20.0001 17.9524 20.0001 18.7162 19.9179 19.3278C19.8297 19.9833 19.631 20.6117 19.1213 21.1214C18.6117 21.631 17.9833 21.8298 17.3278 21.9179C16.7161 22.0001 15.9523 22.0001 15.0658 22H8.9342C8.0477 22.0001 7.28388 22.0001 6.67221 21.9179C6.0167 21.8298 5.38835 21.631 4.87868 21.1214C4.36902 20.6117 4.17028 19.9833 4.08215 19.3278C3.99991 18.7162 3.99995 17.9524 4 17.0659L4.00001 7.00004C4.00001 6.97802 4 6.95607 4 6.93421C3.99995 6.04772 3.99991 5.28391 4.08215 4.67224C4.17028 4.01673 4.36902 3.38838 4.87869 2.87872C5.38835 2.36905 6.0167 2.17031 6.67221 2.08218C7.28387 1.99994 8.04769 1.99998 8.93418 2.00003C10.1168 2.0001 11.2994 2.00171 12.482 1.99989ZM15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L12.1299 16.2843C11.5059 16.9083 10.4941 16.9083 9.87008 16.2843L8.29289 14.7071C7.90237 14.3166 7.90237 13.6834 8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929L11 14.5858L14.2929 11.2929C14.6834 10.9024 15.3166 10.9024 15.7071 11.2929Z"
        fill="green"
      />
    </svg>

    <svg
      v-else-if="!valid && invalid"
      width="70px"
      height="70px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.2071 10.2929C9.81658 9.90237 9.18342 9.90237 8.79289 10.2929C8.40237 10.6834 8.40237 11.3166 8.79289 11.7071L10.5858 13.5L8.79289 15.2929C8.40237 15.6834 8.40237 16.3166 8.79289 16.7071C9.18342 17.0976 9.81658 17.0976 10.2071 16.7071L12 14.9142L13.7929 16.7071C14.1834 17.0976 14.8166 17.0976 15.2071 16.7071C15.5976 16.3166 15.5976 15.6834 15.2071 15.2929L13.4142 13.5L15.2071 11.7071C15.5976 11.3166 15.5976 10.6834 15.2071 10.2929C14.8166 9.90237 14.1834 9.90237 13.7929 10.2929L12 12.0858L10.2071 10.2929ZM12.482 1.99989C13.1608 1.99885 13.7632 1.99793 14.3196 2.2284C14.876 2.45887 15.3014 2.88551 15.7806 3.36624C16.7302 4.31875 17.6813 5.26983 18.6338 6.21942C19.1145 6.69867 19.5412 7.12401 19.7716 7.68041C20.0021 8.23682 20.0012 8.83926 20.0001 9.51807C19.9963 12.034 20 14.5499 20 17.0659C20.0001 17.9524 20.0001 18.7162 19.9179 19.3278C19.8297 19.9833 19.631 20.6117 19.1213 21.1214C18.6117 21.631 17.9833 21.8298 17.3278 21.9179C16.7161 22.0001 15.9523 22.0001 15.0658 22H8.9342C8.0477 22.0001 7.28388 22.0001 6.67221 21.9179C6.0167 21.8298 5.38835 21.631 4.87868 21.1214C4.36902 20.6117 4.17028 19.9833 4.08215 19.3278C3.99991 18.7162 3.99995 17.9524 4 17.0659L4.00001 7.00004C4.00001 6.97802 4 6.95607 4 6.93421C3.99995 6.04772 3.99991 5.28391 4.08215 4.67224C4.17028 4.01673 4.36902 3.38838 4.87869 2.87872C5.38835 2.36905 6.0167 2.17031 6.67221 2.08218C7.28387 1.99994 8.04769 1.99998 8.93418 2.00003C10.1168 2.0001 11.2994 2.00171 12.482 1.99989Z"
        fill="red"
      />
    </svg>

    <h1 class="valid" v-if="valid">Siziň düzedişiňiz nobata goýuldy!</h1>
    <h1 class="invalid" v-else-if="!valid && invalid">
      Siziň düzedişiňiz nobata goýulmady!
    </h1>
    <h2 v-if="valid">
      Düzedişiňiz administrator tarapyndan barlagdan geçýança garaşmagyňyzy
      haýyşt edýäris
    </h2>
    <h2 v-else-if="!valid && invalid">
      Düzedişiňizi täzeden girizmegiňizi haýyşt edýäris
    </h2>
    <base-button
      @click="closeRequest"
      :class="{ valid__btn: valid, invalid__btn: !valid && invalid }"
      >Dowam ed</base-button
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
    closeRequest() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.request {
  font-family: "Mulish";
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.request h1 {
  font-size: 24px;
}
.request h2 {
  font-size: 20px;
}

.request h2 {
  color: #a8a8a8;
}
.valid {
  color: green;
}

.invalid {
  color: red;
}

.valid__btn {
  background-color: green !important;
  border-color: green !important;
}
.valid__btn:hover {
  background-color: rgba(50, 205, 50, 0.4) !important;
  border-color: rgba(50, 205, 50, 0.4) !important;
}

.invalid__btn {
  background-color: red !important;
  border-color: red !important;
}

.invalid__btn:hover {
  background-color: rgba(194, 24, 7, 0.5) !important;
  border-color: rgba(194, 24, 7, 0.5) !important;
}

@media (width<=650px) {
  .request h1 {
    font-size: 22px;
  }
  .request h2 {
    font-size: 18px;
  }
  @media (width<=600px) {
    .request h1 {
      font-size: 18px;
    }
    .request h2 {
      font-size: 16px;
    }
    @media (width<=550px) {
      .request h1 {
        font-size: 16px;
      }
      .request h2 {
        font-size: 14px;
      }
      button {
        padding: 10px !important;
      }
      @media (width<=450px) {
        .request h1 {
          font-size: 14px;
        }
        .request h2 {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
