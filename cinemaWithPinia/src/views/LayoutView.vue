<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import FooterView from "@/views/FoterView.vue";
</script>

<template>
  <div class="container">
    <Navbar/>
    <RouterView/>
    <FooterView/>
  </div>
</template>

<style scoped>

</style>