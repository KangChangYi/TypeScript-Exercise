"use strict";
// 在没有明确指出类型时， ts 会在声明地方自动推断为对应的类型
var x = 3;
// x = '3'  error
// ts 会自动考虑所有元素的类型，并给出一个兼容所有候选类型的类型
var y = [0, 1, null];
// 上下文类型   按上下文归类  
// 在表达式所处位置处判断其类型  这里需要手动指定其为 any类型
// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.button);  //<- Error
// };
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
