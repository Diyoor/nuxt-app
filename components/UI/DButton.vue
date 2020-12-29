<template>
  <div>
    <button v-if="flat" class="flat">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    flat: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
.flat {
  border: solid;
}
</style>