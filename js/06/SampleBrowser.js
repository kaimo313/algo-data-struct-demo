/**
 * 使用前后栈实现浏览器的前进后退。
 * https://github.com/wangzheng0822/algo/blob/master/javascript/08_stack/SampleBrowser.js
 * Author nameczz
 */
import * as Stack from "./StackBasedOnLinkedList.js"

export class SampleBrowser {
    constructor() {
        this.normalStack = new Stack['StackBasedLinkedList']()
        this.backStack = new Stack['StackBasedLinkedList']()
    }
    // 正常浏览页面
    pushNormal(name) {
        this.normalStack.push(name)
        this.backStack.clear()
    }
    // 后退
    back() {
        const value = this.normalStack.pop()
        if (value !== -1) {
            this.backStack.push(value)
        } else {
            console.log('无法后退')
        }
    }
    // 前进
    front() {
        const value = this.backStack.pop()
        if (value !== -1) {
            this.normalStack.push(value)
        } else {
            console.log('无法前进')
        }
    }
    // 打印栈内数据
    displayAllStack() {
        console.log('---后退页面---')
        this.backStack.display()
        console.log('---浏览页面---')
        this.normalStack.display()
    }
}