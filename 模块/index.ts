// # 模块
// TS 1.5+ 以后，内部模块称为 “命名空间”。而外部模块称为 “模块”

// ## 导出声明
export interface person {
    isArr(s:string):boolean
}

// 导出并重命名
// export { person as person2 } 
let p:person = {
    isArr(s) {
        return !s
    }
}

// 导入 index2 重新导出的模块
import { perso } from "./index2"

let p2:perso= {
    isArr(s) {
        return !s
    }
}

// # 默认导出
// declare let $: jquery;
// export default $;

