<template>
  <header>
    <nav>
      <div class="helper-section">
        <div>ส่งฟรีเมื่อซื้อครบ 1000 บาท</div>
        <ul>
          <li class="helper">
            <nuxt-link to="/help">ช่วยเหลือ & FAQs</nuxt-link>
          </li>
          <hr />
          <li class="helper">
            <nuxt-link to="/account">บัญชีของฉัน</nuxt-link>
          </li>
          <hr />
          <li class="helper"><nuxt-link to="/menu3">ภาษาไทย</nuxt-link></li>
          <hr />
          <li class="helper"><nuxt-link to="/menu4">THB</nuxt-link></li>
        </ul>
      </div>
      <section>
        <div class="app-bar">
          <div>
            <h1>APP NAME</h1>
          </div>
          <ul>
            <li>
              <nuxt-link class="app-bar--list" to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link class="app-bar--list" to="/shop">Shop</nuxt-link>
            </li>
            <li>
              <nuxt-link class="app-bar--list" to="/menu2">Blogs</nuxt-link>
            </li>
            <li>
              <nuxt-link class="app-bar--list" to="/menu3">About</nuxt-link>
            </li>
            <li>
              <nuxt-link class="app-bar--list" to="/menu4">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  </header>
</template>

<style scoped>
.helper-section {
  padding: 5px 20px;
  height: 30px;
  background-color: #222831;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: aliceblue;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin: 0px 5px;
  font-size: 10px;
}

li.helper {
  text-decoration: none;
  color: aliceblue;
}

a {
  color: aliceblue;
  text-decoration: none;
}

.app-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.app-bar--list {
  display: inline-block;
  cursor: pointer;
  color: #222831;
  font-size: 13px;
  font-weight: bold;
}

.nuxt-link-exact-active {
  color: #222831;
}

.nuxt-link-active {
  color: aqua;
}

h1 {
  font-size: 20px;
}
</style>