<script setup>
import { ref } from 'vue';
// import { useRouter } from 'vue-router'

const currentIndex=ref(0)
// const router=useRouter()

//   function itemClick(index,path){
//     currentIndex.value=index
//     // console.log(path)
//     router.push(path)
//   }

  const tabbarData=[
    {
      path:"/home",
      image:"tabbar/tab_home.png",
      imageActive:"tabbar/tab_home_active.png",
      text:"首页"
    },
    {
      path:"/favor",
      image:"tabbar/tab_favor.png",
      imageActive:"tabbar/tab_favor_active.png",
      text:"收藏"
    },
    {
      path:"/order",
      image:"tabbar/tab_order.png",
      imageActive:"tabbar/tab_order_active.png",
      text:"订单"
    },
    {
      path:"/message",
      image:"tabbar/tab_message.png",
      imageActive:"tabbar/tab_message.png",
      text:"消息"
    },
  ]

  import {getAssetURL} from "@/utils/load_assets"
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item,index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path" >
          <span>{{ item.text }}</span>
          <template #icon="props">
           <img :src="props.active ? getAssetURL(item.imageActive) : getAssetURL(item.image)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

    <!-- <template v-for="(item,index) in tabbarData" :key="index">
      <div class="tabbar-item" 
          @click="itemClick(index,item.path)"
          :class="{active:currentIndex===index}"
      >
        <img v-if="currentIndex!==index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div> 
  </template>   -->
  </div>
</template>


<style lang="less" scpoed>

  // .tabbar{
  //   position: fixed;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   display: flex;
  //   border-top: 2px solid #f3f3f3;
  //   font-size: 14px;

  //   .tabbar-item{
  //     flex: 1;
  //     display: flex;
  //     flex-direction: column;
  //     text-align: center;
  //     align-items: center;
  //     margin-bottom: 2px;

  //     &.active{
  //       color:var(--primary-color)
  //     }

      // img{
     // width: 43px;
      //   margin-bottom: 2px;
      //   margin-top: 8px;
      // }
  //   }
  // }
  .van-tabbar-item{
    font-size: 14px;
    img{
      height: 27px;
    }
  }
</style>