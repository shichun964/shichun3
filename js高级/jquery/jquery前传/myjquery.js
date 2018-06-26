/* 1. jquery前传 */

function $(selector) {
    var doms = document.querySelectorAll(selector)
    Array.prototype.push.apply(this, doms)
}

$.prototype = {
    addClass: function(name) {
        // 隐式遍历
        for (let i = 0; i < this.length; i++) {
            this[i].classList.add(name)  
        }
        return this
    },
    removeClass: function(name) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.remove(name)  
        }
        return this
    }
}