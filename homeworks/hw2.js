//task 1
function bind(fn, context, args) {
    return fn.apply(context, [...args]);
}

const foo = function(){
    return`Hello ${this.name}, please note your id:${this.id} and  password:${this.password}.`;
};
const user = {
    name: "Ann",
    id: 27,
    password: "JS",
};
const keys = ["name", "id", "password"];
        

const bindedFunction = bind(foo, user, keys);
console.log(bindedFunction);


//task 2 
const o = {
    counter: 0,
    get magicProperty(){
        return ++this.counter;
    },
    set magicProperty(value){
        this.counter = value;
        const date = new Date();
        console.log(`${date} -- ${this.counter}`);
    }
}
o.magicProperty = 5; // 'Sat Mar 22 2025 23:29:43 GMT+0400 (Armenia Standard Time) -- 5'
console.log(o.magicProperty); // 6
console.log(o.magicProperty); // 7
console.log(o.magicProperty); // 8


//task 3
const calc = (a, b) => {
    let result = 0;
    return function(symbol){
        if(!a && !b) return "Incorect numbers!!";
        result =  symbol === "+"? a+b: 
        symbol === "-" ? a-b: 
        symbol === "*" ? a * b :
        symbol === "/" && a > 0 ? a/b: "incorect symbol";
    
        return result;
    }
}

console.log(calc(1,2)('+')); // 3
console.log(calc(1,2)('/')) ; // 0.5


//task 4
function sum2(x, y) { // 2 parameters
    return x + y;
}
function sum4(a, b, c, d) { // 4 parameters
    return a + b + c + d;
}

function curry(fn){
    if(typeof fn !== "function" || fn.length === 0) return "Wrong parametr!!Try again";
    let count = [];

    function getAllArgs(param) {
        count.push(param);
        if(count.length < fn.length){
            return getAllArgs;
        }
        return fn.call(this, ...count);
    }
    return getAllArgs;
}


console.log(curry(sum2)(1)(2)); // 2 calls, after first wrapping call, returns 3
console.log(curry(sum4)(2)(3)(4)(5)); // 4 calls, after first wrapping call, returns 14



//task 5 

const MakePerson = (firstName, lastName) =>({
    first: firstName,
    last: lastName
    });

const newPerson  = new MakePerson("Jack", "Bind");
console.log(newPerson);

//task 6
function sleep(seconds){
    const dateSec = new Date().getSeconds();
    const interval = dateSec + seconds;

    while (interval > new Date().getSeconds()) return;
}

console.log(new Date()); // 2025-03-28T10:43:02.463Z
console.log(sleep(9));
console.log(new Date()); // 2025-03-28T10:43:11.000Z


//task 7
const getCounter = (count)=>{
    const obj = {
        count: count,
        log(){
            console.log(this.count);
            return this;
        },
        add(num){
            this.count += num;
            return this
        },
        reset(){
            this.count = 0;
            return this
        }
    };
    return obj;

}

let c = getCounter(5);

console.log(
    c.log() // 5 <- should outputs the result
    .add(4)// <- shoild add some value to the result
    .log() // 9
    .add(3)
    .log() // 12
    .reset()// <- resets the result
    .log() // 0
    .add(8)
    .log()); //8
