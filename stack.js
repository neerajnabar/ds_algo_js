// stack 
/* 
Operations:
    push
    pop
    peek
    length 
*/

class Stack {
    constructor(size) {
        this.size = size;
        this.stack = [];
    }

    pop() {
        const retVal = this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
        this.stack = this.stack.slice(0,this.stack.length-1);
        return retVal;
    }

    push(value) {
        this.stack = [...this.stack, value];
    }

    peek(index) {

    }

    length() {
        return this.stack.length;
    }

    getStack() {
       return this.stack; 
    }
}

const myStack = new Stack();
myStack.push(42);
myStack.push(39);
myStack.push(Math.floor(Math.random() * 100))

console.log(myStack.getStack());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());