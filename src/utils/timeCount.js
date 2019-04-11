function timestampCount (dataStamp) {
  let _date = new Date ();
  let dataDate = new Date (dataStamp);
  return `若干天前`;
}

function stampToDate (timestamp) {
  let _date = new Date (timestamp);
  return `${_date.getFullYear ()}-${_date.getMonth () + 1}-${_date.getDay ()}`;
}

// 辅助函数

//时间戳计算过期时间
//时间戳转真实时间
export {timestampCount, stampToDate};
