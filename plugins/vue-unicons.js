import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import {
  uniFacebookFMonochrome,
  uniLinkedinAltMonochrome,
  uniLineMonochrome,
  uniTelegramMonochrome,
} from 'vue-unicons/src/icons'
import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([
  uniFacebookFMonochrome,
  uniLinkedinAltMonochrome,
  uniLineMonochrome,
  uniTelegramMonochrome,
])
Vue.use(Unicon)
