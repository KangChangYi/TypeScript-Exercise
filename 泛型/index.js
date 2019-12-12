"use strict";
// # 泛型用于定义可重用的方法
// 通过添加类型变量 T 动态设置函数的参数、返回值等类型。
function ident(arg) {
    return arg;
}
var output = ident('123');
// 或者使用更普遍的方法 类型推论  （ts 自动识别变量类型）
// output = ident(123)
// 可修改为 T类型的 数组，而不是直接 T
function ident2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var output2 = ident2(['123']);
var func = ident2;
