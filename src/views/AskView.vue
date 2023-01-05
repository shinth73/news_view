<template>
  <div>
    <div v-for="item in ask" :key="item">{{ item.title }}</div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  data() {
    return {
      ask: []
    }
  },
  async created() {
    this.ask = await api.fetchAskList();
  }
}
</script>

<style scoped>

</style>