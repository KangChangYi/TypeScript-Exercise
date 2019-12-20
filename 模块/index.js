"use strict";
// # 模块
// TS 1.5+ 以后，内部模块称为 “命名空间”。而外部模块称为 “模块”
Object.defineProperty(exports, "__esModule", { value: true });
// 导出并重命名
// export { person as person2 } 
var p = {
    isArr: function (s) {
        return !s;
    }
};
var p2 = {
    isArr: function (s) {
        return !s;
    }
};
// # 默认导出
// declare let $: jquery;
// export default $;
