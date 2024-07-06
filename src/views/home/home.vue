<script setup>
import navbar from "./components/nav-bar.vue"

</script>

<template>
  <div class="home">
    <navbar></navbar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>


<style lang="less" scpoed>
  .banner{
    img{
      width: 100%;
    }
  }

  .location{
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 18px;
    margin: 10px 0;

    .city{
      flex: 1;
    }

    .position{
      display: flex;
      width: 100px;

      img{
        width: 18px;
        height: 18px;
        margin-left: 6px;
      }
    }
  }
</style>