# manipulable-queue

A **manipulable Queue ADT** written in TypeScript. This library provides a queue data structure designed not only for standard enqueue/dequeue operations, but also for **safe structural manipulation**, enabling advanced operations while preserving queue integrity.

---

## Features

* Generic Queue ADT (`Queue<T>`)
* Iterable (`for...of` support)
* Dual package support: **ESM** and **CommonJS**
* First-class TypeScript types
* Extra manipulation-oriented operations
* Clean and minimal API
* No external dependencies

---

## Installation

```bash
npm install manipulable-queue
```

---

## Usage

### Importing

#### ESM

```ts
import { Queue } from "manipulable-queue"
```

#### CommonJS

```js
const { Queue } = require("manipulable-queue")
```

---

##  Basic Example

```ts
const queue = new Queue<number>("numbers")

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue() // 1
queue.peek()    // 2
queue.last()    // 3

queue.front     // 2
queue.rear      // 3
```

---

## API Overview

### QueueADT<T>

#### Properties

* `front: T | undefined` — Returns the front element without removing it.
* `rear: T | undefined` — Returns the rear element without removing it.
* `size: number` — Number of elements in the queue.
* `name?: string` — Optional queue identifier.

#### Core Methods

* `enqueue(item: T): void` — Adds an element to the rear of the queue.
* `dequeue(): T | undefined` — Removes and returns the front element. Returns `undefined` if the queue is empty.
* `peek(): T | undefined` — Alias of `front`.
* `last(): T | undefined` — Alias of `rear`.
* `isEmpty(): boolean` — Checks whether the queue is empty.
* `clear(): void` — Removes all elements from the queue.

#### Utility Methods

* `toArray(): T[]` — Returns a shallow array copy of the queue contents.
* `toString(): string` — Returns a comma-separated string representation of the queue.

#### Iteration

```ts
for (const value of queue) {
  console.log(value)
}
```

---

## Extended Operations

The concrete `Queue<T>` implementation also provides additional manipulation methods:

* `removeRear(): T | undefined` — Removes and returns the rear element.
* `reverse(): void` — Reverses the queue in place.
* `rotate(k: number): void` — Rotates the queue by `k` positions. Supports negative values.

These operations preserve queue consistency, size, and ordering rules.

---

## Design Philosophy

Unlike traditional queue implementations that only expose minimal FIFO operations, **manipulable-queue** is designed for:

* Educational use (data structures and algorithms)
* Controlled experimentation
* Safe structural transformations

The goal is to allow explicit manipulation while preserving invariants such as size, order, and internal consistency.

---

## Error Handling

This library follows a **non-throwing default design**.

Queue operations return `undefined` when performed on an empty queue instead of throwing exceptions.

An `EmptyQueue` error class is provided for users who wish to implement stricter error handling or wrap the queue with custom guards:

```ts
import { EmptyQueue } from "manipulable-queue"

if (queue.isEmpty()) {
  throw new EmptyQueue()
}
```