<template>
  <div>
    <div class="landing-blog">Blogs</div>
    <div class="blogs-content">
      <section class="blog-lists">
        <TheBlog v-for="n in 3" :key="n" />
      </section>
      <section class="blog-other">
        <section>
          <div class="search">
            <input id="search" type="text" />
            <button>ค้นหา</button>
          </div>
        </section>
        <section>
          <div>
            <p>Categories</p>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kid</li>
              <li>Elder</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <p>Featured Products</p>
          </div>
        </section>
        <section>
          <div>
            <p>Archive list</p>
          </div>
        </section>
        <section>
          <div>
            <p>tags</p>

            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<style scoped>
.landing-blog {
  background-image: url('~assets/images/blogs.jpg');
  background-size: cover;
  background-position: top;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
  text-shadow: 1px 1px 5px #222;
  font-weight: bold;
}

.blogs-content {
  display: flex;
  justify-content: center;
  margin: 30px;
  align-self: center;
}

.blog-lists {
  width: 55%;
  padding: 10px;
}

.blog-other {
  margin-top: 30px;
  padding: 10px;
  width: 15%;
}
</style>
