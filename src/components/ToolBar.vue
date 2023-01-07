<template>
  <div class="text-white p-3 bg-green-600">
    <router-link to="/news">News</router-link>
    |
    <router-link to="/ask">Ask</router-link>
    |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>
.router-link-exact-active {
  color: red
}
</style>