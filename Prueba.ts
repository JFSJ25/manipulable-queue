import { Queue } from "./src/core/Queue"
// import { removeDuplicates } from "./src/algorithms/removeDuplicates"
// import { removeRear } from "./src/algorithms/removeRear"
// import { removeRear, removeDuplicates } from './algorithms/Algorithms'

const queue = new Queue<string>("Cola String");

queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
queue.enqueue("D")

console.log(queue.name)

// queue.mostrarEstadoCola()

console.log(queue.dequeue())

// queue.mostrarEstadoCola()

console.log(queue.toString())
// console.log(queue.toArray()) 
// queue.print()

console.log(...queue)

// removeRear(queue)
// removeDuplicates(queue)
// queue.print()

// console.log(queue.getFront())
// console.log(queue.getRear())
// console.log(queue.print())