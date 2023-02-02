/**
 * 基于链表实现的栈。
 * https://github.com/wangzheng0822/algo/blob/master/javascript/08_stack/StackBasedOnLinkedList.js
 * Author: nameczz
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

export class StackBasedLinkedList {
    constructor() {
        this.top = null
    }
    push(value) {
        const node = new Node(value)
        if (this.top === null) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
    }
    pop() {
        if (this.top === null) {
            return -1
        }
        const value = this.top.element
        this.top = this.top.next
        return value
    }
    // 为了实现浏览器前进后退
    clear() {
        this.top = null
    }
    display() {
        if (this.top !== null) {
            let temp = this.top
            while (temp !== null) {
                console.log(temp.element)
                temp = temp.next
            }
        }
    }
}
