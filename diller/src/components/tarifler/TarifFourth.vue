<template>
  <div class="container">
    <div class="container-info">
      <div>
        <h1>Need help?</h1>
        <ul>
          <li class="list-item">
            <img src="../../assets/help-1.png" alt="Telephone icon" />
            <div class="span-div">
              <span>+99365656565</span><span class="span">Support Hotline</span>
            </div>
          </li>

          <li class="list-item">
            <img src="../../assets/help-2.png" alt="Envelope icon" />
            <div>
              <span class="span-div">help@logotv@mail.com</span
              ><span class="span">Support Email</span>
            </div>
          </li>
          <router-link to="/"> Support <span>&#8594;</span></router-link>
        </ul>
      </div>

      <ul>
        <li>
          <div class="list-div">
            <h2>{{ header }}</h2>
            <span v-if="paragraph" @click="close">&Cross;</span>
            <span @click="open" v-else>&plus;</span>
          </div>
          <p v-if="paragraph">{{ para }}</p>
        </li>
        <li>
          <div class="list-div">
            <h2>{{ header }}</h2>
            <span v-if="paragraph">&Cross;</span>
            <span v-else>&plus;</span>
          </div>
          <p v-if="paragraph">{{ para }}</p>
        </li>
        <li>
          <div class="list-div">
            <h2>{{ header }}</h2>
            <span v-if="paragraph">&Cross;</span>
            <span v-else>&plus;</span>
          </div>
          <p v-if="paragraph">{{ para }}</p>
        </li>
        <li>
          <div class="list-div">
            <h2>{{ header }}</h2>
            <span v-if="paragraph">&Cross;</span>
            <span v-else>&plus;</span>
          </div>
          <p v-if="paragraph">{{ para }}</p>
        </li>
        <li>
          <div class="list-div">
            <h2>{{ header }}</h2>
            <span v-if="paragraph">&Cross;</span>
            <span v-else>&plus;</span>
          </div>
          <p v-if="paragraph">{{ para }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paragraph: false,
    };
  },
  methods: {
    open() {
      this.paragraph = !this.paragraph;
    },
    close() {
      this.paragraph = !this.paragraph;
    },
  },
  computed: {
    header() {
      return "Lorem, ipsum dolor sit amet consectetur adipisicing";
    },
    para() {
      return "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, architecto suscipit. Quos, eum expedita in, quisquam fugiat eaque ratione fuga harum totam vel esse eligendi vero, molestiae eius ducimus id!";
    },
  },
};
</script>

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
  font-family: "Plus Jakarta Sans",sans-serif;
  font-weight: 500;
  line-height: 23px;
}
.container ul {
  list-style: none;
  margin: 20px 0;
  padding: 0;
}

.container h1 {
  font-size: 60px;
}
.container h2 {
  font-size: 16px;
  font-weight: 500;
}
.container p {
  color: #777;
  font-size: 14px;
}

.container a {
  text-decoration: none;
  color: #3d5cb7;
  line-height: 16px;
}
.container span {
  cursor: pointer;
}

.container-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.list-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
}

.list-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.span-div {
  display: flex;
  flex-direction: column;
}
.span {
  font-size: 13px;
  color: #777;
}
</style>
