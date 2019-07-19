// index.ts

let str: "Lion" = "Lion";
const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am Lion " + str;
document.body.appendChild(h1);

const list1: number[] = [1, 2, 3];
const list2: number[] = list1;
list2[0] = 2;
// console.log(list1);
// console.log(list2);

let u: void;
let n: null = null;

let obj: object;
obj = { name: "Lion" };
// console.log(obj.name); // error

function getKeys(o: object) {
  return Object.keys(o); // 会以列表的形式返回obj中的值
}
getKeys({ a: "a" }); // ['a']
// getKeys(123); // error 类型“123”的参数不能赋给类型“object”的参数
let tuple: [string, number, boolean];
tuple[0].split(":"); // right 类型"string"拥有属性"split"
// tuple[1].split(":"); // error 类型“number”上不存在属性“split”
// tuple = ["a", 2, false, "x"]; // error 不能将类型“[string, number, string]”分配给类型“[string, number]”。 属性“length”的类型不兼容。

let arr: Array<[string, number, boolean]>;
arr = [["a", 2, false], ["a", 2, false]];

let arr2: Array<string | number | boolean>;
arr2 = [1, "a", false];
