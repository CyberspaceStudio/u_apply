
function getUserInfo () {
  return new Promise ((resolve, reject) => {
    wx.getUserInfo ({
      success: res => resolve (res),
      fail: err => reject (err),
    });
  });
}
function getLocation () {
  return new Promise ((resolve, reject) => {
    wx.getLocation ({
      type: 'wgs84',
      success: res => resolve (res),
      fail: err => reject (err),
    });
  });
}
function scanCode () {
  return new Promise ((resolve, reject) => {
    wx.scanCode ({
      success: res => resolve (res),
      fail: err => reject (err),
    });
  });
}
/* 
@params{
  title:模态框标题
  content：模态框内容主体
}
*/
function showModal (title, content = '') {
  wx.showModal ({
    title,
    content,
  });
}

function showToast (title = '提示', icon = 'none', duration = 1500) {
  wx.showToast ({
    title,
    icon,
    duration,
  });
}
function showLoading(title='请稍等'){
  wx.showLoading({
    title
  })
}

function hideLoading(){
  wx.hideLoading()
}
/* 
@params{
  url:页面路由
  params:参数对象
}
*/
function jumpTo (url, params = {}) {
  function paramsChange (params) {
    if (params === undefined) {
      return '';
    }
    let str = '?';
    Object.keys (params).forEach (item => {
      str += `${item}=${params[item]}&`;
    });
    str = str.slice (0, -1);
    return str;
  }
  wx.navigateTo ({
    url: `${url}${paramsChange (params)}`,
  });
}

/* 
  检查用户授权情况
*/
function checkScope () {
  return new Promise ((resolve, reject) => {
    wx.getSetting ({
      success: res => resolve (res),
      fail: err => reject (err),
    });
  });
}

function switchTab (path) {
  wx.switchTab ({
    url: path,
  });
}

function setStorageSync (key,value) {
    wx.setStorageSync (key, value,)
}

function getStorageSync(key){
  return wx.getStorageSync(key)
}

function login (){
  return new Promise((resolve,reject)=>{
    wx.login({
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
  switchTab,
  request,
  checkScope,
  setStorageSync,
  login,
  getStorageSync,
  showLoading,
  hideLoading
};
