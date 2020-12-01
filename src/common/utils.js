// 函数防抖: 解决refresh频繁刷新
export function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 将时间戳转换为指定格式的时间
 * @param {Date} date Date时间戳对象
 * @param {String} fmt 要转换的时间格式
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

/**
 * 对函数进行节流
 * @param {Function} func 要进行节流的函数
 * @param {Number} delay 节流的时间
 */
export function throttle(func, delay) {
  // flag形成了闭包
  let flag = true;
  return function(...arg) {
    if (flag) {
      flag = false
      setTimeout(() => {
        func.apply(this, arg);
        flag = true
      }, delay);
    }
  };
}
