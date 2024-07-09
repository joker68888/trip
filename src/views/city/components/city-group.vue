<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

  const props= defineProps({
    currentData:{
      type:Object,
      default:()=>({})
    }
  })

const listIndex=computed(()=>{
  const list=props.currentData.cities.map(item=>item.group)
  list.unshift("#")
  return list
})

const router=useRouter()
const cityStore=useCityStore()

function clickCity(city){
  // console.log(city)
  cityStore.currentCity=city

  router.back()
}

</script>

<template>
  <div class="city-group">
    <!-- <template v-for="item in currentData?.cities">
        <div class="group-item">
          <h2 class="text">标题：{{ item.group }}</h2>
          <div class="list">
            <template v-for="(iten,indey) in item.cities" :key="indey">
              <div class="city">{{ iten.cityName }}</div>
            </template>
          </div>
        </div>
      </template> -->

    <van-index-bar :sticky="false" highlight-color="#ff9854" :index-list="listIndex" >
      <van-index-anchor index="热门" />
      <div class="hot">
        <template v-for="(city,index) in currentData?.hotCities" >
          <div class="city" @click="clickCity(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(item,index) in currentData?.cities" :key="index">
        <van-index-anchor :index="item.group" />
      <div class="liss">
        <template v-for="(iten,indey) in item.cities" :key="indey" >
          <div class="cityName" ><van-cell :title="iten.cityName"  @click="clickCity(iten)" /></div>
        </template>
      </div>
      </template>

    </van-index-bar>


  </div>




</template>


<style lang="less" scpoed>
.hot{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  .city{
    width: 80px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 14px;
    background-color: #fff4ec;
    text-align: center;
    margin-bottom: 10px;

  }
}

</style>