// 交叉类型
// 交叉类型使用 & 定义   可以认为是两个类型的集合
type landAnimal = {
    name: string
    canLiveOnLand: true
  }
  type waterAnimal = {
    name: string
    canLiveInWater: true
  }
  // 交叉类型：两栖动物
  type amphibian = landAnimal & waterAnimal
  let toad: amphibian = {
    name: 'toad',
    canLiveOnLand: true,
    canLiveInWater: true,
  }

// 联合类型  联合类型使用 | 符号分割属性
interface xxx {
    name: string | number | boolean
}
let z: xxx = { name: false }

// 使用用户自定义类型保护 保证不会出错
// function isAnimal(pet: Fish | Bird): pet is Fish {
//     return (<Fish>pet).swim !== undefined
// }


// 类型别名     官方提示** 尽量使用接口代替类型别名
// 使用 type 给一个类型起一个新名字
type isNumber = boolean
function getList(isGet:isNumber) {
    return isGet
}
getList(false)
type isArr = Array<isNumber>
let arr123: isArr = [ false ]

// # 字符串字面量类型
// 字符串字面量类型 配合类型别名、联合类型，达到类似枚举类型字符串的功能
type string2 = 'k' | 'c' | 'y'
function asd(str: string2) {
    return str
}
asd('k')
// asd('w') // error

// # 数字字面量类型
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    return 1
    // return '2' // error
}


// # 可辨识联合
// 类型别名 包含了 那些类型的联合 就成为了一个联合
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;
//  使用可辨识联合
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

// 新需求： 给类型别名 新增一个项的时候，需要switch 报错，提示我们添加对应的判断
interface Circle2 {
    kind: "Circle2";
    radius: number;
}

type Shape2 = Square | Rectangle | Circle | Circle2;
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
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}
interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};

let strings: string[] = pluck(person, ['name']); // ok, string[]