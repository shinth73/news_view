<template>
  <div>
    <p v-for="item in this.$store.state.ask" :key="item">
      <router-link :to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>
        {{ item.time_ago }} by {{ item.user }}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>