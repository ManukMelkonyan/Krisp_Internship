class Stack{
    constructor(){
        this.items = [];
        this.top = 0;
    }

    push(item){
        this.items.push(item);
        this.top++;
        return this;
    }

    pop(){
        if(this.top === 0) {
            return;
        }
        this.top--;
        return this.items.pop();
    }

    peek(){
        return this.items[this.top - 1];
    }

    length(){
        return this.top;
    }

    search(item){
        for(let i = this.top - 1; i >= 0; --i){
            if(this.items[i] === item){
                return i;
            }
        }

        return -1;
    }

    isEmpty(){
        return this.top === 0;
    }


    print(){
        for(let i = this.top - 1; i >= 0; i--){
            console.log(this.items[i]);
        }
    }
}


const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1).push(10).push(7);
console.log(stack.length());
console.log(stack.search(10));
stack.print();
console.log(stack.isEmpty());
console.log(stack.pop());
stack.print();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
stack.push(3);
console.log(stack.peek());
