"use strict";
// # 为函数定义类型
function getInfoList(type, pageNo) {
    return type + pageNo;
}
// # 箭头函数定义类型
var mydd = function (x, y) {
    console.log(x, y);
    return 1;
};
mydd('1', 2);
// # 函数默认值  写了默认值则不需要制定类型
function myadd(firstName, lastName) {
    if (firstName === void 0) { firstName = 'k'; }
    return "" + firstName + lastName;
}
// 上面定义函数的格式，下面定义函数的具体实现
function f1(x, y) {
    return x + y;
}
f1(1, 2);
f1('a', 'b');
