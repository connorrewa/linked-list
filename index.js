import LinkedListFactory from "./LinkedList.js";

const list = LinkedListFactory();

list.append(1);
list.append(10);
list.append(-1);
list.append(40);
list.append(-123);

console.log(list.toString());
console.log(list.pop());
console.log(list.toString());

list.append('dog');
list.append('cat');
console.log(list.toString())


list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());