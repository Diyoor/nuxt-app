<template>
  <div class="container">
    <div>
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
    </div>
    <div>
      <p class="status-code">{{ error.statusCode }}</p>
    </div>
    <div>
      <nuxt-link to="/">
        <h1>Go Home</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['error'],
  layout: 'error',
})
</script>

<style scoped>
.status-code {
  font-size: 125px;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}
</style>

