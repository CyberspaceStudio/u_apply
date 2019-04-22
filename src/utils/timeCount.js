function timestampCount (dataStamp) {
  let _date = new Date ();
  let dataDate = new Date (dataStamp);
  return `若干天前`;
}

function stampToDate (timestamp) {
  let _date = new Date (timestamp);
  return `${_date.getFullYear ()}-${_date.getMonth () + 1}-${_date.getDay ()}`;
}

function generateTimeSelector (startYear) {
  let _date = new Date ();
  let trulyYear = _date.getFullYear ();
  let trulyMonth = _date.getMonth () + 1;
  let res = [];
  if (startYear == trulyYear) {
    res.push (initRes (startYear, `${startYear}/${trulyMonth}`));
    if (trulyMonth > 9) {
      res = [...res, ...initMonthList (startYear, trulyMonth, 9)];
      return res;
    } else {
      res = [...res, ...initMonthList (startYear, trulyMonth, 1)];
    }
  } else {
    res.push (initRes (startYear, `${startYear}/9`));
    res = [...res, ...initMonthList (startYear, 9, 1)];
  }
  res.push (initRes (startYear - 1, `${startYear - 1}/12`));
  res = [...res, ...initMonthList (startYear - 1, 12, 9)];
  return res;
}

function generatorYearSelector () {
  let _date = new Date ();
  let res = [];
  let trulyYear = _date.getFullYear ();
  let endYear = trulyYear - 5;
  for (let i = trulyYear; i >= endYear; i--) {
    res.push ({data: `${i}`, dataToString: `${i - 1}-${i}`});
  }
  return res;
}

function initCurrYear () {
  let _date = new Date ();
  return _date.getFullYear ().toString ();
}

function initCurrMonth(){
  let _date = new Date ();
  return (_date.getMonth ()+1).toString ();
}
// 辅助函数

function initMonthList (year, startMonth, endMonth) {
  let res = [];
  for (let i = startMonth; i >= endMonth; i--) {
    res.push (initRes (monthMap[i], `${year}/${i}`));
  }
  return res;
}

function initRes (data, dataInstring) {
  return {
    data,
    dataInstring,
  };
}

let monthMap = [
  '占位符',
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SPT',
  'OCT',
  'NOV',
  'DEC',
]; //月份映射表

//时间戳计算过期时间
//时间戳转真实时间
//生成时间轴
//生成当前年份
//生成当前月份
//生成年份轴
export {
  timestampCount,
  stampToDate,
  generateTimeSelector,
  initCurrYear,
  initCurrMonth,
  generatorYearSelector,
};
