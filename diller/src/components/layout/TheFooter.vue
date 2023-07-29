<template>
  <footer>
    <nav>
      <ul class="logo">
        <img
          src="../../assets/tv-yzyndan.svg"
          alt=""
          style="width: 60%; height: 60%"
        />
        <li>
          <p class="para">{{ $t("footer.p") }}</p>
          <p></p>
        </li>
      </ul>

      <ul>
        <h1>{{ $t("footer.ul.li-1") }}</h1>
        <li>{{ $t("footer.ul.li-2") }}</li>
        <li>{{ $t("footer.ul.li-3") }}</li>
        <li>{{ $t("footer.ul.li-4") }}</li>
      </ul>

      <ul>
        <h1>{{ $t("footer.ul-2.li-1") }}</h1>
        <li>+99365656565</li>
        <li>logotv@gmail.com</li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  background-color: #3d5cb7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mulish";
}

footer nav {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer img {
  margin-top: 15px;
  margin-bottom: 40px;
}

footer h1 {
  margin-bottom: 50px;
}

li {
  margin-bottom: 25px;
  font-family: "Mulish";
  font-weight: 700;
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
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
