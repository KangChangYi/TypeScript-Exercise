"use strict";
var toad = {
    name: 'toad',
    canLiveOnLand: true,
    canLiveInWater: true,
};
var z = { name: false };
function getList(isGet) {
    return isGet;
}
getList(false);
var arr123 = [false];
function asd(str) {
    return str;
}
asd('k');
// asd('w') // error
// # 数字字面量类型
function rollDie() {
    return 1;
    // return '2' // error
}
//  使用可辨识联合
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
//  使用可辨识联合 
// function area2(s: Shape2) : number { // this number will error
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//     }
// }
// # 索引类型
// 想要在 ts 中使用一下函数，获取列表的子集
// 需要使用 索引类型查询 和  索引访问
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['name']); // ok, string[]
