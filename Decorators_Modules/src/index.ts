 import { UserRole, PageRoute, Status , Login} from "./Interface_Type/interface_type";
 import { ISignupForm ,} from "./Interface_Type/interface_type";
 import { ApiResponse } from "./Interface_Type/interface_type";
 import { IMessage } from "./Interface_Type/interface_type";

 
 //1
 function getAllowedRoutes(role: UserRole) {
    let status: Status = "sucsess";
    let route : PageRoute = "./";

    if(status === "sucsess" ){
        switch (role){
            case 'Guest':
                route = "./";
                console.log(`Hello ${role}`);
                break;
            case "Admin":
                route = "./AdminPage";
                console.log(`Hello ${role}`);
                break;
            case "User":
                route = "./UserAccount";
                console.log(`Hello ${role}`);
            break;
        }
    } 
    return role
 }
console.log(getAllowedRoutes("User"));

//2
function validateSignupForm(form:ISignupForm) {
    const isValid: Boolean = form.username !== "" && form.email !== "" && form.password === form.confirmPassword
        
    if(isValid) return form;
    return  `Invalid data.Pleace fill correct data.`;
}

console.log(validateSignupForm({username:"epic2025", email: "sona@gmail.com", password: "123456", confirmPassword: "123456" }))



//3
function fetchData(): ApiResponse<Login>{
    //fetch
    return {
        status: "sucsess",
        data: {
            role: "Admin",
            route: "./AdminPage",  
        },
    }
}
console.log(fetchData());


//4.1
function getProperty<T extends object, Key extends keyof T>(obj: T, key: Key) {
    return obj[key];
}

console.log(getProperty({name: "JSON", age: 32 }, "age"));


//4.2
function mergeObjects<T extends object, J extends object>(a: T, b: J) {
    return Object.assign({}, a, b);
}


console.log(mergeObjects({name: "JSON", age: 32 },{username:"epic2025", email: "sona@gmail.com", password: "123456"}))



//5.1
export namespace StorageService {
    export function setItem(key: string, value: string){
        if(key && value){
            return localStorage.setItem(key, JSON.stringify(value));
        }
    }
    export function getItem(key: string): string | null{
        return localStorage.getItem(key);
    }
    export function clear(){
        return localStorage.clear();
    }
}
//5.2 https://github.com/sona2711/To_Do_App.git
//I changed the process of adding tasks only in form.ts. I haven't tried it in the filter part.



// 6

export namespace MessageCenter{
    const messageStorage : IMessage[] = [];

    export function send<T extends IMessage>(newMessage: T): void{
        messageStorage.push(newMessage);

    }
    export function getAll(): IMessage[]{
        return messageStorage;

    }
    
    export function removeById (id: number) {
        const messageIndex =  messageStorage.findIndex((message) =>  message.id === id);
        if(messageIndex > -1){
            messageStorage.splice(messageIndex, 1);
        }
        return messageStorage;
    }
    

    export function edit(id: number, newText: string){
        messageStorage.find((message)=> {
            if(message.id === id){
                message.body = newText;
            }
        })
        return messageStorage

    }
    export function getDrafts():IMessage[]{
        return messageStorage.filter((message)=> message.status === "scheduled")
    }

    
}

MessageCenter.send({
    id: 12,
    status: "scheduled",
    body: "Programming is a way of life"
})
MessageCenter.send({
    id: 25,
    status: "delivered",
    body: "Programming is a way of life"
})
MessageCenter.send({
    id: 6,
    status: "sent",
    body: "Programming is a way of life"
})

console.log(MessageCenter.getAll());
console.log(MessageCenter.edit(6, "Typescript"));
console.log(MessageCenter.getDrafts());
