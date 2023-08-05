<template>
  <footer>
    <div class="logo">
      <img
        src="../../assets/tv-yzyndan.svg"
        alt=""
        style="width: 60%; height: 60%"
      />
    </div>

    <!-- <ul>
        <h1>{{ $t("footer.ul.li-1") }}</h1>
        <li>{{ $t("footer.ul.li-2") }}</li>
        <li>{{ $t("footer.ul.li-3") }}</li>
        <li>{{ $t("footer.ul.li-4") }}</li>
      </ul> -->

    <div>
      <div style="display: flex; align-items: center; gap: 20px">
        <p>{{ $t("footer.phone") }} +99365656565</p>
        <p>{{ $t("footer.email") }} pursattv@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding: 30px;
  background-color: #3d5cb7;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Mulish";
}

@media (width<=1200px) {
  footer nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
  @media (width<=950px) {
    footer nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
