<template>
  <div class="container">
    <div>
      <h1>{{ $t("home.home-2.h1") }}</h1>
      <ul>
        <li class="partner-1">
          <img
            src="../../assets/Client-1.png"
            alt="Logo image of partner company"
          />
        </li>
        <li class="partner-2">
          <img
            src="../../assets/Client-2.png"
            alt="Logo image of partner company"
          />
        </li>
        <li class="partner-3">
          <img
            src="../../assets/Client-3.png"
            alt="Logo image of partner company"
          />
        </li>
        <li class="partner-4">
          <img
            src="../../assets/Client-4.png"
            alt="Logo image of partner company"
          />
        </li>
        <li class="partner-5">
          <img
            src="../../assets/Client-5.png"
            alt="Logo image of partner company"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container div {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

h1 {
  position: relative;
  font-family: "Nunito";
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
}

h1::after {
  content: "";
  position: absolute;
  background: #3d5cb7;
  height: 2px;
  top: 150%;
  width: 20%;
  left: 40%;
}
.partner-2 {
  grid-column: 3;
}
.partner-3 {
  grid-column: 5;
}
.partner-4 {
  grid-column: 2;
}
.partner-5 {
  display: flex;
  align-items: center;
  grid-column: 4;
}

@media (width<=1200px) {
  .container ul {
    gap: 15px;
  }
  .partner-1 {
    grid-column: 2;
  }
  .partner-3 {
    grid-column: 4;
  }
  .partner-4 {
    display: flex;
    justify-content: flex-end;
  }
  @media (width<=950px) {
    .partner-3 {
      grid-column: 2;
      grid-row: 2;
    }
    .partner-4 {
      grid-column: 3;
      grid-row: 2;
    }
    .partner-5 {
      grid-column: 2;
      grid-row: 3;
    }
    @media (width<=700px) {
      .container ul {
        display: block;
      }
      .container h1 {
        font-size: 35px;
      }
      .container li {
        margin-top: 15px;
      }
      .partner-4 {
        justify-content: center;
      }
      .partner-5 {
        display: flex;
        justify-content: center;
      }
      @media (width<=600px) {
        .container h1 {
          font-size: 30px;
        }
        @media (width<=500px) {
          .container h1 {
            font-size: 25px;
          }
        }
        @media (width<=410px) {
          .container h1 {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
