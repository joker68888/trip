<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const currentIndex=ref(0)
const router=useRouter()

  function itemClick(index,path){
    currentIndex.value=index
    // console.log(path)
    router.push(path)
  }

</script>

<template>
  <div class="tabbar">
    <div class="tabbar-item" 
         @click="itemClick(0,'/home')"
         :class="{active:currentIndex===0}"
     >
      <img v-if="currentIndex!==0" src="@/assets/img/tabbar/tab_home.png" alt="">
      <img v-else src="@/assets/img/tabbar/tab_home_active.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tabbar-item"
         @click="itemClick(1,'/favor')"
         :class="{active:currentIndex===1}"
    >
      <img v-if="currentIndex!==1" src="@/assets/img/tabbar/tab_favor.png" alt="">
      <img v-else src="@/assets/img/tabbar/tab_favor_active.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
  </div>
</template>


<style lang="less" scpoed>
  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    border-top: 2px solid #f3f3f3;
    font-size: 14px;

    .tabbar-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      margin-bottom: 2px;

      &.active{
        color: #ff9854;
      }

      img{
        width: 43px;
        margin-bottom: 2px;
        margin-top: 8px;
      }
    }
  }
</style>