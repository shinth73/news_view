<template>
  <p v-for="item in this.$store.state.news" :key="item">
    <a v-bind:href="item.url">
      {{ item.title }}
    </a>
    <small>
      {{item.time_ago}} by
      <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
    </small>
  </p>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>

</style>