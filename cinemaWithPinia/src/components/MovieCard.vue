<script setup>

import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
defineProps({
  movie:Object
})

</script>

<template>
  <div class="card" style="width: 18rem;">
    <img :src="movie.poster" class="card-img-top" :alt="movie.title">
    <div class="card-body">

      <RouterLink  :to="{name:'moveDetails',params:{id:movie.id}}" class="btn btn-primary">{{movie.title}}</RouterLink>

      <span class="mr-4">{{ movie.year }}</span>
      <span>{{ movie.runtime }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>