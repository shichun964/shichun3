/* es6总结*/
// 1. let关键字定义变量
// let 可以是{}都会有一个局部作用域
/* var t = 1
if (t) {
    var b = 20
}
console.log(b) */

/* var t = 1
if (t) {
    let b = 20
}
console.log(b) // b is not defined */

/* for (var i = 0; i < 10; i++) {
    
}
console.log(i) // 10 */

/* for (let i = 0; i < 10; i++) {
    
}
console.log(i) // i is not defined */

// 2. const定义常量
const a = 10 
a = 12 // 会报错

// 3. 字符串拓展 startsWith和endswidth
// srr.startsWith(c)  srr字符串是否以c开始  如果是 就返回true 否则返回false
var str = '我是中国人，我来自地球'
var b = str.startsWith('我是')

// 4. 模板字符串
var d = 'zy'
var e = '努力决定'+d+'成败'
var f = `努力决定${d}成败`

// 5. 字符填充padStart和padEnd
// str.padStart(填充完之后的字符总长度, 要填充的字符)
let j = '前端16就业班'
j.padStart(8, '黑')
// 6. 箭头函数 =>
// 箭头函数主要用于匿名函数中 多用于回调函数 特点 不会改变this指向问题
/* setTimeout(() => {
    console.log(666)
}, 1000); */
setTimeout(function() {
    console.log(888)
}, 1000);

// var fn = function (a) {}
// var fn = (a) => {} // 只有一个参数的时候 var fn = a => {}

// 7. 对象中定义函数和变量的快捷方式
var name = 56
var age = 666
/* var obj = {
    name: name,
    age: age,
    sayHi: function() {
        console.log(7777)
    }
} */
var obj = {
    name,
    age,
    sayHi() {
        console.log(7777)
    }
}
