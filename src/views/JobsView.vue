<template>
  <div>
    <p v-for="job in this.$store.state.jobs" :key="job">
      <a :href="job.url"> {{ job.title }}</a>
      <small>{{ job.time_ago }} , {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>