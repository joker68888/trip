<script setup>
// import { getCityAll } from '@/services/index';
// import axios from 'axios';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import cityGroup from './components/city-group.vue'

  const searchValue=ref("")

  //取消按钮路由跳转
  const router=useRouter()
  function onCancel(){
    router.back()
  }

  //tab页面切换
  const tabActive=ref("")

  // 获取数据
  // const allCity=ref({})
  // getCityAll().then(res=>{
  //   allCity.value=res.data
  // })
  //简陋的axios
  // axios.get("http://123.207.32.32:1888/api/city/all").then(res=>{
  //   console.log(res.data)
  // })
  //使用了pinia的数据
  const cityStore=useCityStore()
  cityStore.fechAllCity()
  const {allCity}=storeToRefs(cityStore)
// console.log(allCity)

  //获取选中标签的数据
  const currentData=computed(()=>allCity.value[tabActive.value])

</script>

<template>
  <div class="city" >

    <div class="top">
      <!-- 搜索框 -->
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        shape="round"
        show-action                     
        @cancel="onCancel"
      />

      <!-- tab页面的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854"> 
        <template v-for="(value,key,index) in allCity" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>

    </div>

    <div class="content">
      <!-- <cityGroup :currentData="currentData"></cityGroup> -->
       <template v-for="(value,key,index) in allCity">
        <!-- <h2 v-show="tabActive===key">{{ key }}</h2> -->
      <cityGroup v-show="tabActive===key" :currentData="value"></cityGroup>

       </template>
    </div>

  </div>
</template>


<style lang="less" scpoed>
.city{
//   .top{
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//   }

// .content{
//   margin-top: 98px;
// }
.top{
  position: relative;
  z-index: 9;
}


  .content{
    height: calc(100vh - 98px);
    overflow-y: auto; 
  }
}
</style>