
// # 为函数定义类型
function getInfoList(type: number, pageNo: number) : number {
    return type + pageNo
}

// # 箭头函数定义类型
let mydd: (type: string, age:number) => number = 
    function(x: string, y: number): number {
        console.log(x, y)
        return 1
    }

mydd('1', 2)

// # 函数默认值  写了默认值则不需要制定类型
function myadd (firstName = 'k', lastName: string) :string {
    return `${firstName}${lastName}`
}
type MessageType = "string" | "image" | "audio";
type Message = {
    id: number;
    type: MessageType;
    content: string;
  };

// # 函数重载
function f1(x: number, y: number): number;
function f1(x: string, y: string): string;

// 上面定义函数的格式，下面定义函数的具体实现
function f1(x: any, y: any): any {
    return x + y;
}
f1(1, 2);
f1('a', 'b');