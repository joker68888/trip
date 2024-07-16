 import dayjs from 'dayjs'
 export default function getMonthDay(date){
  return dayjs(date).format("MM月DD日")
 }

 export function getNextDay(date){
  return dayjs(date).add(1,"day").format("MM月DD日")
 }