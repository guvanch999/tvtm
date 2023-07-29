<template>
  <div class="detail-container">
    <div class="detail-class">
      <label>Card number:</label>
      <strong>{{ client.cardnumber }}</strong>
    </div>
    <div class="detail-class">
      <label>Name:</label>
      <strong>{{ client.name }}</strong>
    </div>
    <div class="detail-class">
      <label>Surname:</label>
      <strong>{{ client.surname }}</strong>
    </div>
    <div class="detail-class">
      <label>Address:</label>
      <strong>{{ client.adress }}</strong>
    </div>
    <div class="detail-class">
      <label>Phone number:</label>
      <strong>{{ client.telnumber }}</strong>
    </div>
    <div class="detail-class">
      <label>Paket:</label>
      <strong>{{ client.packet }}</strong>
    </div>
    <div class="detail-class">
      <label>Srok:</label>
      <strong>{{ client.srok }}</strong>
    </div>
    <div class="detail-class">
      <label>Resiver:</label>
      <strong>{{ client.resiver }}</strong>
    </div>
    <div class="detail-class">
      <label>Date start:</label>
      <strong>{{ client.date_start }}</strong>
    </div>
    <div class="detail-class">
      <label>Date end:</label>
      <strong>{{ client.date_end }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      default: null
    }
  }
}
</script>


<style lang="scss" scoped>
.detail-container {
  border: 1px solid #9F9E9E;
  padding: 10px;
  border-radius: 3px;
}

.detail-class {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 5px;
  border-radius: 3px;
  color: black;
  background-color: rgba(210, 210, 210, 0.1);
}

</style>
