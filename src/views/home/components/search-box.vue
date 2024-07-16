<script setup>
import useCityStore from '@/stores/modules/city';
import getMonthDay,{getNextDay} from '@/utils/get_date';
import { ref } from 'vue';
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
  //选择城市
  const cityStore=useCityStore()
  const {currentCity}=cityStore

  //入住，离开日期
  const startDate=ref(getMonthDay(new Date()))
  const endDate=ref(getNextDay(new Date()))
</script>

<template>
  <!-- 位置信息 -->
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>

  <!-- 入住时间 -->
   <div class="dataTime">
      <div class="start">
        <div class="data">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共一夜</div>
      </div>
      <div class="end">
        <span class="tip">离店</span>
        <span class="time">{{ endDate }}</span>
      </div>
   </div>
</template>


<style lang="less" scpoed>
//位置信息
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
//入住时间
.dataTime{
  display: flex;
  padding: 0 20px;
  margin:10px 0;

  .start{
    flex: 1;
    display: flex;
    align-items: center;
    .data{
      display: flex;
      flex-direction: column;
      // text-align: center;
      // align-items: center;
    }
    .stay{
      padding-left: 68px;
      font-size: 14px;
      color: #ccc;
    }
  }


  .tip{
    font-size: 13px;
    padding-bottom: 4px;
    color: #ccc;
  }
  

  .end{
    width: 80px;
    display: flex;
    flex-direction: column;
    // text-align: center;
    // align-items: center;

  }

}
</style>