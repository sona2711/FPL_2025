//1
type Config = {
    selector:string;
    template: string
}

export function Component(config: Config){
    return function(constructor: Function){
        const elem = document.createElement(config.selector);
        elem.innerHTML = config.template;
        console.log(elem);
    }

}


//2
const validation:any = {};

export function RequiredField(target: any, propertyName: string){
        validation[propertyName] = "required";
 }

export function validate(obj: any){
    for(const prop in obj){
        if(validation[prop] === "required" && !obj[prop]){
            console.log(`Error: ${prop} is required`);
            return false;
        }
    }
    return true;
}

//3
export function Delay(value: number){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function Timeout(args:string){
            setTimeout(() => {
                originalMethod.apply(this, args);
        }, value);
        };
    };
}

