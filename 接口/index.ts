
// # 接口定义，定义在 LabelValue 中的属性为必填
interface LabelValue {
    label: string;
    color: string;
    size: number;
}

// # 可选属性，label 和 color 非必须
interface LabelValue2 {
    label?: string;
    color?: string;
    size: number;
}

// # 只读属性
interface Point {
    readonly x:number;
    readonly y:number;
}

let p1: Point = { x: 1 , y: 2 }
// p1.x = 23  error

// 还有只读数组
let rOnlyArr: ReadonlyArray<number> = [1, 2, 3, 4]
// rOnlyArr[1] = '1' // error

// # 额外属性具有任意数量的其他属性
interface createSquare {
    label?: number,
    [propName: string]: any
}

// # 函数类型接口 
interface SearchFunc {
    (name: string, age: number): boolean
}

// 参数名不需要和接口定义名匹配，但是其参数类型的顺序需要一致
let myFunc: SearchFunc;
myFunc = function(name: string, age: number) {
    return !name && !age
}
// 也可以不指定类型名，ts 会自动判断
myFunc = function(name, age) {
    return !name && !age
}

// # 可索引的类型，给索引设置 readonly 防止给索引赋值
interface Dictionary {
    readonly [index: number]: string;
}

let objArr: Dictionary = ['1', '2']
// function printLabel (labelValue: LabelValue) : LabelValue1 {
//     return labelValue
// }

// printLabel({ label: '123', colorrrr: '1' , size: 15})
