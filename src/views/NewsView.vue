<template>
  <div>
    <div v-for="user in users" :key="user">{{ user }}</div>
  </div>
</template>

<script>
import fetchNewsList from "@/api";

export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await fetchNewsList();
  }
}
</script>

<style scoped>

</style>