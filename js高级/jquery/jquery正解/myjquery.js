/* 1. jquery前传 */
function $(selector) {
    return new $.prototype.init(selector)
}

$.fn = $.prototype = {
    init: function(selector) {
        var lists = document.querySelectorAll(selector);
        [].push.apply(this, lists);
        return this
    },
    addClass: function(name) {
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
$.prototype.init.prototype = $.prototype

