import ajax from '@/utils/ajax';
import ajax_login from '@/utils/ajax_login';
// import {}

const baseUrl = 'https://chachapaofan.cn';

//接口地址  https://documenter.getpostman.com/view/6988539/S1Lu2UtH?version=latest#a3f1e8f0-49bd-4031-934a-d486a6fefe56
//接口地址  https://documenter.getpostman.com/view/7030776/S1EWNEp6?version=latest

/**
 *用户登录接口
 *
 * @param {*} data
 * @returns
 */
function userLogin (data) {
  return ajax_login (_setUrl ('/login/user'), data);
}

/**
 *志愿圈首页预览接口
 *
 * @param {*} data//分页
 * @returns
 */
function getInitData (data) {
  return ajax (_setUrl ('/message/index'), data);
}

/**
 *用户发圈预操作，换取id
 *
 * @param {*} data
 * @returns
 */
function getNew (data) {
  return ajax (_setUrl ('/message/new'), data, 'POST');
}

/**
 *用户发圈上传图片
 *
 * @param {
 *      filePath,//文件路径
 *      formData:{}//表单域之外携带的数据
 * } data
 * @returns
 */
function uploadFile (data) {
  let cookie = wx.getStorageSync('cookie');
  data.formData.session=cookie;
  return new Promise ((resolve, reject) => {
    wx.uploadFile ({
      url: _setUrl ('/picture/upload'),
      ...data,
      name: 'file',
      success: res => resolve (res),
      fail: err => reject (err),
    });
  });
}

/**
 *点赞接口
 *
 * @param {*} data
 * @returns
 */
function like (data) {
  return ajax (_setUrl ('/like'), data, 'PUT');
}

/**
 *取消点赞接口
 *
 * @param {*} data
 * @returns
 */
function unlike (data) {
  return ajax (_setUrl ('/unlike'), data, 'PUT');
}

/**
 *查询用户点赞状态
 *
 * @param {*} data
 * @returns
 */
function checkStatus (data) {
  return ajax (_setUrl ('/checkStatus'), data);
}

/**
 *查询新增点赞数
 *
 * @param {*} data
 * @returns
 */
function getLikeNumber(data){
    return ajax(_setUrl('/new/like/number'),data)
}

/**
 *查询该条圈的总赞数
 *
 * @param {*} data
 * @returns
 */
function getLikers (data) {
  return ajax (_setUrl ('/liker/number'), data);
}

/**
 *查询所有点赞该活动的人的信息
 *
 * @param {*} data
 * @returns
 */
function getLikersInfo (data) {
  return ajax (_setUrl ('/liker/info'), data);
}

/**
 *获取相关组织所有部门信息
 *
 * @param {*} data
 * @returns
 */
function getOrganizationInfo (data) {
  return ajax (_setUrl ('/organization/info'), data);
}

/**
 *部门回忆获取接口
 *
 * @param {*} data
 * @returns
 */
function getDepartMemory (data) {
  return ajax (_setUrl ('/memory/myDepartment'), data);
}

/**
 *（用户主页）小程序获取用户有关身份信息
 *
 * @param {*} data
 * @returns
 */
function getUserExactInfo (data) {
  return ajax (_setUrl ('/index/myInfo'), data);
}

/**
 *获取其他人主页信息
 *
 * @param {*} data
 * @returns
 */
function getOthersInfo (data) {
  return ajax (_setUrl ('/index/othersInfo'), data);
}

/**
 *删除一条志愿圈消息
 *
 * @param {*} data
 * @returns
 */
function deleteMessage (data) {
  return ajax (_setUrl ('/message/remove'), data);
}

/**
 *获得特定志愿圈消息具体信息
 *
 * @param {*} data
 * @returns
 */
function getSpecificMessage (data) {
  return ajax (_setUrl ('/message/detail'), data);
}

/**
 *获取个人主页志愿圈消息预览
 *
 * @param {*} data
 * @returns
 */
function getPersonMessagePreview (data) {
  return ajax (_setUrl ('/message/personal/indexPreview'), data);
}

/**
 *获取活动图片
 *
 * @param {*} data
 * @returns
 */
function getDepartPicture (data) {
  return ajax (_setUrl ('/picture/show'), data);
}

/**
 *各个部门报名人数
 *
 * @param {*} data
 * @returns
 */
function getMembersInDepart (data) {
  return ajax (_setUrl ('/wechat/enroll/departments/number'), data);
}

/**
 *总队报名人数
 *
 * @param {*} data
 * @returns
 */
function getMemberInAll () {
  return ajax (_setUrl ('/wechat/enroll/total/number'));
}

/**
 *部门招新数据（总人数、男女比例、跨部人数）
 *
 * @returns
 */
function getMembersDetail (data) {
  return ajax (_setUrl ('/wechat/enroll/department/data'), data);
}

/**
 *单个部门一面数据
 *
 * @param {*} data
 * @returns
 */
function getFirstViewInDepart (data) {
  return ajax (_setUrl ('/wechat/interview/first/department/data'), data);
}

/**
 *单个部门二面面试数据
 *
 * @param {*} data
 * @returns
 */
function getFinalViewInDepart (data) {
  return ajax (_setUrl ('/wechat    /interview/second/department/data'), data);
}

/**
 *总队面试数据
 *
 * @returns
 */
function getViewSourceInAll () {
  return ajax (_setUrl ('/wechat/interview/total/data'));
}

/**
 *各部门面试数据
 *
 * @returns
 */
function getViewSourceInDeparts () {
  return ajax (_setUrl ('/wechat/interview/departments/data'));
}

/**
 *一面打分
 *
 * @param {*} data
 * @returns
 */
function postFirstViewScore (data) {
  return ajax (_setUrl ('/wechat/interview/first/scoring'), data, 'POST');
}

/**
 *一面扫码查看新生简历
 *
 * @param {*} data
 * @returns
 */
function postFirstViewResume (data) {
  return ajax (_setUrl ('/wechat/interview/first/department/resume'), data);
}

/**
 *二面签到
 *
 * @param {*} data
 * @returns
 */
function postFinalViewPresence (data) {
  return ajax (_setUrl ('/wechat/interview/second/presence'), data);
}

/**
 *报名页面
 *
 * @param {*} data
 * @returns
 */
function postSign (data) {
  return ajax (_setUrl ('/wechat/enroll/apply'), data,'POST');
}

/**
 *新增点赞消息查询
 *
 * @param {*} data
 * @returns
 */
function getPersonPreview(data){
    return ajax(_setUrl('/message/personal/preview'),data)
}

/**
 *检查登录状态
 *
 * @param {*} data
 * @returns
 */
function checkSession(data){
    return ajax(_setUrl('/login/check/session'),data)
}


/**
 *生成接口地址，辅助函数
 *
 * @param {*} api接口地址
 * @returns
 */
function _setUrl (api) {
  return baseUrl + api;
}


export {
  userLogin,
  getNew,
  uploadFile,
  like,
  unlike,
  checkStatus,
  getLikers,
  getLikersInfo,
  getOrganizationInfo,
  getDepartMemory,
  getUserExactInfo,
  getOthersInfo,
  deleteMessage,
  getSpecificMessage,
  getPersonMessagePreview,
  getDepartPicture,
  getMembersInDepart,
  getMemberInAll,
  getMembersDetail,
  getFirstViewInDepart,
  getFinalViewInDepart,
  getViewSourceInAll,
  getViewSourceInDeparts,
  postFirstViewScore,
  postFirstViewResume,
  postFinalViewPresence,
  postSign,
  getInitData,
  getLikeNumber,
  getPersonPreview,
  checkSession
};
