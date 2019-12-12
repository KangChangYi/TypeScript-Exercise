// 类型比较简单

let isString:string =  'name'

let isNumber:number = 100

let isBool:boolean = false

// # 数组
let isNumberArr:number[] = [1, 2, 3]  // 数字组成的数组
// or
let isNumberArr2:Array<number> = [1, 2, 3]  // 数字组成的数组

// # 元组
// 元祖中元素对应类型必须和声明时的顺序一致，仅用于定义已知类型和数量的数组
// bingo
let arr: [string, number, boolean];  
arr = ['1', 1, true]
// error
// arr = ['1', true, 1]
// arr[1].toFixed()  // error message 属性“toFixed”在类型“string”上不存在。你是否指的是“fixed”?

// #枚举类型
// 默认情况下枚举类型从 0 开始编号，同数组下标。
enum color { red, green, blue }
let c: color = color.green

// or  手动更改为从 100 开始编号
// enum color { red = 100, green, blue }

// or  全部手动赋值
// enum color { red = 'you', green = 'me', blue = 'she'}


// # any  可以是任何类型
let notSure: any = 4
let anyArr: any[] = [1, '2', false]

// # void  表示没有任何类型，例如函数不返回值时
function warn(): void {
    console.log('this just a warn')
}

// # null  undefined 
// 同时 null 和 undefined 是任何类型的子类型，可以被赋值给任何类型。
let n: null = null;
let u: undefined = undefined

// # never  表示永远都不存在的值的类型   无限循环或者抛错函数
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// # object 类型   表示非原始类型之外的类型 可以使用 Object.create() 等api

// # 类型断言  在需要根据变量类型进行下一步操作时使用
function getLength(something: string | number) :number {
    if ((<string>something).length) {
        return (<string>something).length
    } else {
            return something.toString().length;
    }
}


