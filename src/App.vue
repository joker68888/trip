<script setup>
import tabbar from "@/components/tabbar/tabbar.vue"
import { useRoute } from "vue-router";

const route=useRoute()
</script>

<template>
  <div class="app">

    <router-view></router-view>
    <tabbar v-if="!route.meta.hideTabbar"></tabbar>
  </div>
</template>

<style scoped>

</style>
