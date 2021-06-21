import Person from './Person';
import { add, sub} from './lib';

let p = new Person("A", 22);

console.log(p.getName());

console.log("hello world!");

console.log(add(4,5));
console.log(sub(4,5));