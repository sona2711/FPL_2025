import { ProductComponent , User , Greeter} from "./modules/module";
import { validate } from "./decorators/decorator";


const product = new ProductComponent();

const user = new User('');
console.log(validate(user));

const greeter = new Greeter();
greeter.greet(); 