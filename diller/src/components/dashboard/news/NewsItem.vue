<template>
  <mq-responsive target="sm-">
    <li>
      <div class="responsive_header">
        <img id="news-item-logo" src="../../../assets/tv-yzyndan.svg" alt="Pursat Tv Icon" />
        <div>
          <h1>{{ title }}</h1>
          <div class="responsive_date">{{ date }}</div>
        </div>
      </div>
      <div>
        <div v-html="text"></div>
      </div>
    </li>
  </mq-responsive>
  <mq-responsive target="md-xl">
    <li>
      <div class="header">
        <div>
          <h1>{{ title }}</h1>
          <p class="date">{{ date }}</p>
        </div>
        <img
          src="../../../assets/tv-yzyndan.svg"
          alt="Pursat TV Icon"
          style="width: 200px; height: 10%; max-width: 200px"
        />
      </div>
      <p v-html="text"></p>
    </li>
  </mq-responsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
export default {
  components: {
    MqResponsive,
  },
  props: ["title", "date", "text"],
};
</script>

<style scoped>
li {
  font-family: "Mulish";
  padding: 10px 30px;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
}

h1 {
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date,
p {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
}

.date {
  color: #a8a8a8;
}

.responsive_header {
  display: block;
}
.responsive_date {
  color: #a8a8a8;
}

@media (width<=800px) {
  #news-item-logo{
    width: 150px;
  }
  h1{
    font-size: 16px;
  }
}
@media (width<=490px) {
  #news-item-logo{
    width: 100px;
  }
  h1{
    font-size: 20px;
    line-height: 15px;
  }
  .responsive_date{
    font-size: 16px;

  }
}
</style>
