// # 泛型用于定义可重用的方法

// 通过添加类型变量 T 动态设置函数的参数、返回值等类型。
function ident<T>(arg: T) : T {
    return arg;
}

let output = ident<string>('123')

// 或者使用更普遍的方法 类型推论  （ts 自动识别变量类型）
// output = ident(123)

// 可修改为 T类型的 数组，而不是直接 T
function ident2<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

let output2 = ident2(['123'])

 
let func: (arg:string[]) => string[] = ident2

