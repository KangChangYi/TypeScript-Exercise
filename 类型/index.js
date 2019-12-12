"use strict";
// 类型比较简单
var isString = 'name';
var isNumber = 100;
var isBool = false;
// # 数组
var isNumberArr = [1, 2, 3]; // 数字组成的数组
// or
var isNumberArr2 = [1, 2, 3]; // 数字组成的数组
// # 元组
// 元祖中元素对应类型必须和声明时的顺序一致，仅用于定义已知类型和数量的数组
// bingo
var arr;
arr = ['1', 1, true];
// error
// arr = ['1', true, 1]
// arr[1].toFixed()  // error message 属性“toFixed”在类型“string”上不存在。你是否指的是“fixed”?
// #枚举类型
// 默认情况下枚举类型从 0 开始编号，同数组下标。
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var c = color.green;
// or  手动更改为从 100 开始编号
// enum color { red = 100, green, blue }
// or  全部手动赋值
// enum color { red = 'you', green = 'me', blue = 'she'}
// # any  可以是任何类型
var notSure = 4;
var anyArr = [1, '2', false];
// # void  表示没有任何类型，例如函数不返回值时
function warn() {
    console.log('this just a warn');
}
// # null  undefined 
// 同时 null 和 undefined 是任何类型的子类型，可以被赋值给任何类型。
var n = null;
var u = undefined;
// # never  表示永远都不存在的值的类型   无限循环或者抛错函数
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// # object 类型   表示非原始类型之外的类型 可以使用 Object.create() 等api
// # 类型断言  在需要根据变量类型进行下一步操作时使用
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
