<script setup>
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';


  const router=useRouter()
  //路由跳转
  function cityClick(){
    router.push("/city")
  }


  //获取地址
  function positionClick(){
    navigator.geolocation.getCurrentPosition(res=>{
      console.log("获取位置成功",res)
      const { latitude, longitude } = res.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },error=>{
      console.log("获取位置失败",error)
      switch(error.code) {
              case error.PERMISSION_DENIED:
                console.log("用户拒绝了地理定位请求。");
                break;
              case error.POSITION_UNAVAILABLE:
                console.log("位置信息不可用。");
                break;
              case error.TIMEOUT:
                console.log("请求用户位置超时。");
                break;
              case error.UNKNOWN_ERROR:
                console.log("未知错误。");
                break;
      }
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  )
  }

  const cityStore=useCityStore()
  const {currentCity}=cityStore
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>


<style lang="less" scpoed>
.location{
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 18px;
  margin: 10px 0;

  .city{
    flex: 1;
    color: #333;
  }

  .position{
    display: flex;
    width: 100px;
    color: #666;

    img{
      width: 18px;
      height: 18px;
      margin-left: 6px;
    }
  }
}
</style>