// 要实现curryAdd(1)(2)(3)(4)
function curryAdd() {
  // 参数复用
  const _cacheArgs = Array.prototype.slice.call(arguments);
  // 利用闭包缓存参数
  const _result = function () {
    _cacheArgs.push(...arguments);
    return _result;
  };
  _result.toString = function () {
    return _cacheArgs.reduce(function (a, b) {
      return a + b;
    });
  };
  return _result;
}
// console.log(curryAdd(1)(2)(3)(4, 5).toString());

// 简单封装
function currying(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const sum = (a, b, c, d) => {
  return a + b + c + d;
};

console.log(currying(sum)(1)(2)(3)(4));
