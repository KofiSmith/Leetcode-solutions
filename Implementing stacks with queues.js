function MyStack(){
    this.container1 = []
    this.container2 = []
    this.push = push
    this.pop = pop
    this.top = peek
    this.empty = empty
}

function push(x){
    
    while(this.container1.length!=0){
        this.container2.push(this.container1.shift())
    }
    this.container1.push(x)
    while(this.container2.length !=0){
        this.container1.push(this.container2.shift())
    }
}

function pop(){
    return this.container1.shift()
}
function peek(){
    return this.container1[0]
}

function empty(){
    if(this.container1.length==0){
        return true
    }else{
        return false
    }
}

