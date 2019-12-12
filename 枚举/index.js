"use strict";
// # 数字枚举
// 1.  其余成员从1 开始自增长
var numberDirc;
(function (numberDirc) {
    numberDirc[numberDirc["mons"] = 1] = "mons";
    numberDirc[numberDirc["tus"] = 2] = "tus";
    numberDirc[numberDirc["desb"] = 3] = "desb";
})(numberDirc || (numberDirc = {}));
var res;
(function (res) {
    res[res["No"] = 1] = "No";
    res[res["Yes"] = 2] = "Yes";
})(res || (res = {}));
// # 使用枚举的属性来访问枚举成员（或枚举的名字）
function respond(rec, message) { }
respond('1', res.No);
// # 字符串枚举
var stringDirc;
(function (stringDirc) {
    stringDirc["mons"] = "up";
    stringDirc["tus"] = "down";
    stringDirc["desb"] = "left";
})(stringDirc || (stringDirc = {}));
stringDirc.mons;
// # 异构枚举， 枚举可以混合字符串和数字成员，非特殊情况不推荐这样做
var diffDirc;
(function (diffDirc) {
    diffDirc["mons"] = "up";
    diffDirc[diffDirc["num"] = 1] = "num";
})(diffDirc || (diffDirc = {}));
diffDirc.mons;
// # 反向映射，可以通过枚举属性的值映射 对应的属性名
var a = diffDirc[diffDirc.num];
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，
// 没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
