<script setup>
import navbar from "./components/nav-bar.vue"
import searchBox from "./components/search-box.vue"
</script>

<template>
  <div class="home">
    <navbar></navbar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <search-box></search-box>
  </div>
</template>


<style lang="less" scpoed>
  .banner{
    img{
      width: 100%;
    }
  }


</style>