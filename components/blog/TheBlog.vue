<template>
  <div class="blog-item">
    <div class="blog-image">
      <img
        src="https://image.freepik.com/free-photo/front-view-delicious-cake-concept_23-2148769292.jpg"
        alt=""
        width="100%"
        height="480"
      />
      <div class="blog-mark">
        <div class="blog-mark--day">20</div>
        <div class="blog-mark--my">ก.ย. 63</div>
      </div>
    </div>
    <div class="blog-title">Blog Title</div>
    <div class="blog-text">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.
    </div>
    <div class="blog-tag">by Admin | Food,Glass,Candy | 99 Comments</div>
  </div>
</template>

<style scoped>
.blog-item {
  padding: 5px;
  margin: 10px 0px;
  width: 100%;
}

.blog-image {
  position: relative;
}

.blog-mark {
  position: absolute;
  top: 0px;
  margin: 10px;
  border: solid 1px #fff;
  height: 120px;
  width: 120px;
  background-color: aliceblue;
  overflow: hidden;
}
.blog-mark--day {
  height: 70px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}
.blog-mark--my {
  height: 60px;
  font-size: 20px;
  text-align: center;
}

.blog-title {
  font-weight: bold;
  font-size: 30px;
  margin: 10px 0px;
}

.blog-text {
  margin-top: 10px;
  width: 100%;
  font-size: 13px;
  font-weight: 200;
  text-align: justify;
}

.blog-tag {
  margin-top: 15px;
  font-size: 13px;
}
</style>