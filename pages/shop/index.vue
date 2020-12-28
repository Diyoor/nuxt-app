<template>
  <div>
    <section class="container">
      <ul>
        <li>ผู้ชาย</li>
        <li>ผู้หญิง</li>
        <li>เด็ก</li>
        <li>ผู้สูงอายุ</li>
      </ul>
    </section>
    <section class="container">
      <div class="items-section">
        <div class="item-card" v-for="item in 8" :key="item">
          <img
            src="https://libreshot.com/wp-content/uploads/2020/07/red-nature-background-D71_0512-free-image.jpg"
            alt=""
            height="300"
          />
          <div class="item-card--title">Title</div>
          <div class="item-card--content">170 ฿</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.items-section {
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
}

.item-card {
  border: solid 1px #efefef;
  cursor: pointer;
  margin: 10px;
  width: 20%;
  overflow: hidden;
}

.item-card:hover {
  box-shadow: 1px 1px 5px #222831;
}

.item-card--title {
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
}

.item-card--content {
  font-size: 14px;
  padding: 5px;
}

ul {
  display: flex;
  justify-content: flex-start;
  width: 60%;
}

li {
  list-style: none;
  margin: 0px 5px;
  font-size: 14px;
}
</style>