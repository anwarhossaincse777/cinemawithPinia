<script setup>
import MovieCard from "@/components/MovieCard.vue";
import {onMounted} from "vue";
import {useMovieStore} from "@/stores/movie";

const movieList=useMovieStore();

onMounted(() => {
  movieList.getMovies();
});

</script>

<template>
  <h1 class="fw-bold" v-if="movieList.isLoading">Loading.....</h1>
  <div class="col-md-4" v-else>
    <MovieCard
        v-for="movie in movieList.filterMovies"
        :key="movie.id"
        :movie="movie"
    />
  </div>
</template>

<style scoped>

</style>