export const getAssetURL=(image)=>{
  //参数一：相对路径
  //参数二：绝对路径
  return new URL(`../assets/img/${image}`,import.meta.url).href
}