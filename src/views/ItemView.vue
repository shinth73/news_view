<template>
  <div class = "p-4">
    <section>
      <div class="flex items-center pb-2">
        <div>
          <font-awesome-icon class="text-4xl" icon="fa-user"/>
        </div>
        <div class="pl-3">
          <div>
            <router-link :to="`/user/${fetchedItem.user}`">
              {{ fetchedItem.user }}
            </router-link>
          </div>
          <div class="text-xs">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2 class="text-2xl pb-3">{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <div v-html="fetchedItem.content">
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK_ITEM', this.$route.params.id);
  }
}
</script>

<style scoped>

</style>