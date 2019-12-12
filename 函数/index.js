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
