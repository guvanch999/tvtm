<template>
  <footer>
    <div class="logo">
      <img
        src="../../assets/tv-yzyndan.svg"
        alt="Logo icon"
        style="width: 150px; min-width: 100px"
      />
    </div>

    <!-- <ul>
        <h1>{{ $t("footer.ul.li-1") }}</h1>
        <li>{{ $t("footer.ul.li-2") }}</li>
        <li>{{ $t("footer.ul.li-3") }}</li>
        <li>{{ $t("footer.ul.li-4") }}</li>
      </ul> -->

    <div>
      <div class="contact">
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
.contact {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media (width<=800px) {
  .contact {
    display: block;
  }
  @media (width<=560px) {
    footer {
      display: block;
    }
  }
}
</style>
