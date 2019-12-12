"use strict";
var p1 = { x: 1, y: 2 };
// p1.x = 23  error
// 还有只读数组
var rOnlyArr = [1, 2, 3, 4];
// 参数名不需要和接口定义名匹配，但是其参数类型的顺序需要一致
var myFunc;
myFunc = function (name, age) {
    return !name && !age;
};
// 也可以不指定类型名，ts 会自动判断
myFunc = function (name, age) {
    return !name && !age;
};
var objArr = ['1', '2'];
// function printLabel (labelValue: LabelValue) : LabelValue1 {
//     return labelValue
// }
// printLabel({ label: '123', colorrrr: '1' , size: 15})
