const FILE_PATH='http://localhost:8080'

function getUserInfo(){
  return new Promise((resolve,reject)=>{
    wx.getUserInfo({
      success:res=>resolve(res),
      fail:err=>resolve(err)
    })
  })
}
function getLocation(){
  return new Promise((resolve,reject)=>{
    wx.getLocation({
      type:'wgs84',
      success:res=>resolve(res),
      fail:err=>reject(err)
    })
  })
}
function scanCode(){
  return new Promise((resolve,reject)=>{
    wx.scanCode({
      success:res=>resolve(res),
      fail:err=>reject(err)
    })
  })
}
/* 
@params{
  title:模态框标题
  content：模态框内容主体
}
*/
function showModal(title,content){
  return new Promise((resolve,reject)=>{
    wx.showModal({
      title,
      content,
      success:res=>resolve(res),
      fail:err=>reject(err)
    })
  })
}
function showToast(title='提示',icon='none',duration=1500){
  return new Promise((resolve,reject)=>{
    wx.showToast({
      title,
      icon,
      duration,
      success:res=>resolve(res),
      fail:err=>reject(err)
    })
  })
}
/* 
@params{
  url:页面路由
  params:参数对象
}
*/
function jumpTo(url,params={}){
  function paramsChange(params){
    if(params===undefined){
      return '';
    }
    let str='?'
    Object.keys(params).forEach((item)=>{
      str+=`${item}=${params[item]}&` 
    })
    str=str.slice(0,-1);
    return str;
  }
  wx.navigateTo({
    url:`${url}${paramsChange(params)}`
  })
}
/* 
@params{
  url:接口地址
  method:请求方式
  data:传输数据
  dataType：返回数据格式
}
*/
function request({url,method='GET',data={},dataType='json'}){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:`${FILE_PATH}${url}`,
      method,
      data,
      dataType,
      success:res=>resolve(res),
      fail:err=>reject(err)
    })
  })
}


export {
  getUserInfo,
  scanCode,
  showModal,
  showToast,
  getLocation,
  jumpTo,
  request
}