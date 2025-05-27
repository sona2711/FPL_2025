import { Component, RequiredField , Delay } from "../decorators/decorator";



//1
@Component({
selector: "app-product",
template: "<h1>Product Component Loaded</h1>"
})
export class ProductComponent {
    constructor() {
        console.log("ProductComponent created!");
    }
}


//2
export class User {
    @RequiredField
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

//3
export class Greeter {
    @Delay(2000)
    greet() {
        console.log("Hello after 2 seconds!");
    }
}
    