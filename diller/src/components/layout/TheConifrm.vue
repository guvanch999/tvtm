<template>
  <base-card class="confirm">
    <div class="confirm__info">
      <svg
        width="70px"
        height="70px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.3027 13.3942C10.2316 13.7147 10.5038 14 10.8479 14H13.0406C13.2979 14 13.5151 13.8351 13.6064 13.6061C13.697 13.3789 14.0117 12.9674 14.254 12.7518C14.4827 12.5112 14.7213 12.2848 14.9563 12.0618C15.8824 11.183 16.754 10.356 16.754 8.91047C16.754 6.40301 14.582 5 12.2707 5C10.5038 5 8.06416 5.80604 7.58396 8.50363C7.48716 9.04737 7.94773 9.5 8.50002 9.5H9.91229C10.4388 9.5 10.8312 9.07642 11.0121 8.582C11.1863 8.10604 11.5379 7.7551 12.2707 7.7551C13.6066 7.7551 13.6064 9.22371 12.8346 10.1843C12.5434 10.5467 12.2023 10.8677 11.8648 11.1853C11.1798 11.8298 10.5098 12.4602 10.3027 13.3942ZM13.9999 17C13.9999 18.1046 13.1045 19 11.9999 19C10.8954 19 9.99994 18.1046 9.99994 17C9.99994 15.8954 10.8954 15 11.9999 15C13.1045 15 13.9999 15.8954 13.9999 17Z"
          fill="#3d5cb7"
        />
      </svg>

      <div>
        <h1>{{ $t("the-confirm.h1") }}</h1>
        <h2>{{ $t("the-confirm.h2") }}</h2>
      </div>
    </div>
    <div class="confirm__controls">
      <base-button @click="closeConfirm">{{
        $t("the-confirm.btn-1")
      }}</base-button>
      <base-button
        class="load__btn"
        @click="confirm"
        :class="{ active: active }"
        >{{ $t("the-confirm.btn-2") }}</base-button
      >
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    closeConfirm() {
      this.$emit("closeConfirm");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style>
/* PARENT CONTAINER */
.confirm {
  width: 700px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
/* iNFO */
.confirm__info {
  gap: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.confirm__info h1 {
  font-size: 24px;
}
.confirm__info h2 {
  font-size: 20px;
}

/* BUTTONS */
.confirm__controls {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.load__btn {
  position: relative;
}
.load__btn:after {
  position: absolute;
  content: "";
  display: none;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}
.active:after {
  display: block;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@media (width<=790px) {
  .confirm {
    width: 600px !important;
  }
  @media (width<=690px) {
    .confirm {
      width: 500px !important;
    }
    @media (width<=590px) {
      .confirm {
        width: 400px !important;
      }
      @media (width<=490px) {
        .confirm {
          width: 300px !important;
        }
        .confirm__info h1 {
          font-size: 20px;
        }
        .confirm__info h2 {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
