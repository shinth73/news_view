<template>
  <div>
    <div v-for="user in users" :key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await api.fetchNewsList();
  }
}
</script>

<style scoped>

</style>