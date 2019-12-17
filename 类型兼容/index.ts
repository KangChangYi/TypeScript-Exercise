// 类型兼容性，

// ts 的结构化类型系统如果 x 要兼容 y ，则 y 至少包含 x 的属性。
interface Named {
    name:string
}
let x2: Named;
let y2 = { name: '123' ,age:12}
x2 = y2