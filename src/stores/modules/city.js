import {defineStore} from 'pinia'
import {getCityAll} from '@/services/index'

const useCityStore=defineStore("city",{
  state: () => ({
    allCity: {},

    currentCity:{cityName:"上海"},
  }),

  actions:{
    async fechAllCity(){
      const res=await getCityAll()
      this.allCity=res.data
      // console.log(this.allCity)
    }
  }
})

export default useCityStore