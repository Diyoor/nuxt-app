<template>
  <div class="footer">
    <div class="link-content">
      <div>
        <h2>หมวดหมู่สินค้า</h2>
        <ul>
          <li>ผู้ชาย</li>
          <li>ผู้หญิง</li>
          <li>เด็ก</li>
          <li>ผู้สูงอายุ</li>
        </ul>
      </div>
      <div>
        <h2>ช่วยเหลือ</h2>
        <ul>
          <li>ติดตามสินค้า</li>
          <li>คืนสินค้า</li>
          <li>บริษัทขนส่ง</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h2>ช่องทางการติดต่อ</h2>
        <ul>
          <li>
            หากมีข้อสงสัย ? สามารถติดต่อได้ที่ 202 CDG House, Nanglinchi Road
            Chong Nonsi, Yannawa, Bangkok 10120
          </li>
          <li></li>
          <li>
            <div style="display: flex">
              <unicon
                name="facebook-f"
                fill="#ABABAB"
                icon-style="monochrome"
              />
              <unicon name="line" fill="#ABABAB" icon-style="monochrome" />
              <unicon name="telegram" fill="#ABABAB" icon-style="monochrome" />
              <unicon
                name="linkedin-alt"
                fill="#ABABAB"
                icon-style="monochrome"
              />
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2>รับข่าวสารใหม่ๆ</h2>
        <ul>
          <li>
            <input type="text" id="email" placeholder="diyoor@gmail.com" />
          </li>
          <li>
            <button type="button">Subscribe</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">
      <div>
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.footer {
  padding: 10px;
  color: aliceblue;
  height: auto;
  background-color: #222831;
}

.link-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.link-content div {
  width: 250px;
}

.footer-copyright {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #898989;
}

ul {
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

li {
  margin: 10px 0px 0px -40px;
  text-align: left !important;
  list-style: none;
  text-align: left;
}

input[type='text'] {
  border: transparent;
  background-color: transparent;
  padding: 5px;
  margin: 5px;
  outline: none;
  border-bottom: 2px solid;
  color: aliceblue;
  font-size: 18px;
}

button {
  cursor: pointer;
  width: 100px;
  padding: 5px;
  border: transparent;
  text-justify: auto;
  outline: none;
  color: aliceblue;
  background-color: blueviolet;
}

button:hover {
  margin-top: -2px;
}

button::after {
  margin: 0px;
}

@media screen and (max-width: 678px) {
  li {
    width: 50%;
  }
}
</style>
