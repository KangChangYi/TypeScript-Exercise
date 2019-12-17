// # 数字枚举

// 1.  其余成员从1 开始自增长
enum numberDirc  {
    mons = 1,
    tus,
    desb,
}

enum res {
    No = 1,
    Yes = 2
}

// # 使用枚举的属性来访问枚举成员（或枚举的名字）
function respond(rec:string, message: res):void { 

}
respond('1', 1)

// # 字符串枚举
enum stringDirc  {
    mons = 'up',
    tus = 'down',
    desb = 'left'
}
stringDirc.mons

// # 异构枚举， 枚举可以混合字符串和数字成员，非特殊情况不推荐这样做
enum diffDirc  {
    mons = 'up',
    num = 1
}
diffDirc.mons


// # 反向映射，可以通过枚举属性的值映射 对应的属性名
let a = diffDirc[diffDirc.num]

// cosnt 枚举
const enum Enum {
    A = 1,
    B = A * 2
}
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

interface Direct {
    sring: Directions.Left
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// 外部枚举
// 外部枚举用来描述已经存在的枚举类型的形状。
declare enum Enum2 {
    A = 1,
    B,
    C = 2
}
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，
// 没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。