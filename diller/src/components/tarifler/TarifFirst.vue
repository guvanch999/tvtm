<template>
  <div class="container">
    <div>
      <h1>
        {{ $t("home.home-1.h1") }}
        <span>{{ $t("home.home-1.span-1") }}</span>
      </h1>
      <img src="../../assets/TV.png" alt="Logo image" />
      <h2>
        {{ $t("home.home-1.h2") }}
        <span>{{ $t("home.home-1.span-2") }}</span>
      </h2>
      <p>
        {{ $t("home.home-1.p") }}
        <span>{{ $t("home.home-1.span-2") }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container div {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container h1 {
  font-family: "Jakarta PLus Sans", sans-serif;
  font-size: 38px;
  line-height: 46px;
  color: #3d5cb7;
  text-align: center;
}

.container h2,
p {
  font-family: "Nunito";
  font-weight: 400;
  text-align: center;
}

.container h2 {
  font-size: 40px;
  line-height: 48px;
}
.container p {
  color: #777;
  line-height: 30px;
}

@media (width<=1200px) {
  img {
    height: 80%;
    width: 80%;
  }
  @media (width<=900px) {
    .container h2 {
      font-size: 35px;
    }
    @media (width<=800px) {
      .container h2 {
        font-size: 30px;
      }
    }
    @media (width<=680px) {
      .container h2 {
        font-size: 25px;
      }
      @media (width<=600px) {
        .container h2 {
          font-size: 20px;
        }
      }
      @media (width<=450px) {
        .container h2 {
          font-size: 18px;
        }
        .container p {
          font-size: 14px;
        }
        @media (width<=400px) {
          .container h2 {
            font-size: 16px;
          }
          .container p {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
