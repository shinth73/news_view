<template>
  <div>
    <div v-for="job in jobs" :key="job">{{ job.title }}</div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  data() {
    return {
      jobs: []
    }
  },
  async created() {
    this.jobs = await api.fetchJobsList();
  }
}
</script>

<style scoped>

</style>