import ZJRequest from "../request/index"

export function getCityAll (){
  return ZJRequest.get({
    url:"city/all"
  })
}