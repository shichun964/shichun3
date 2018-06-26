/* es6总结回顾 */
// 1. let关键字定义变量
/* for(let i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i, 'for循环外面') */
// 2. const定义常量
/* const PI = 3.1415926
PI = 2
console.log(PI) */
// 3. 变量的结构赋值
/* let obj = {name: '张三', age: 18}
let {name, age, gender} = obj
console.log(name, age, gender) */
// 4. 字符串拓展 startsWith和endswidth
/* let flag = 'happy new year!'.startsWith('happ')
console.log(flag) */
// 5. 模板字符串
/* let age = 18
let str = `我是中国人,我今年${age}岁`
console.log(str) */
// 6. 字符填充padStart和padEnd
/* let at = '是一个小小'
let desc = at.padStart(6, '我').padEnd(7, '鸟')
console.log(desc) */
// 7. 函数拓展 参数默认值
/* function fn (name) {
    name = name || '张三'
    console.log(name)
}
function fn (name='zhangsan') {
    console.log(name)
}
fn() */
// 8. 展开运算符
/* let arr1 = [45, 56]
let arr2 = [67, 78]
// 合并arr1和arr2
let arr3 = [...arr1, ...arr2]
console.log(arr3) */
// 9. 箭头函数
// 箭头函数主要用于匿名函数中 多用于回调函数 特点 不会改变this指向问题
// (a, b) => {}
// 10. 对象中定义函数和变量的快捷方式
/* let name = '张三'
let age = 18
// let person = {
//     name: name,
//     age: age
// }
let person = {
    name,
    age
}
console.log(person) */