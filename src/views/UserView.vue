<template>
  <p>name : {{ userInfo.id }}</p>
  <p>karma : {{ userInfo.karma }}</p>
  <p>created : {{ userInfo.created }}</p>
  <div></div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  async created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  },
}
</script>

<style scoped>

</style>