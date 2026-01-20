import { ManipulableQueue } from "../interfaces/ManipulableQueue"
import { QueueNode } from "./QueueNode"

/**
 * Linked-list based implementation of a manipulable queue.
 *
 * This implementation provides O(1) enqueue and dequeue
 * operations and supports safe structural transformations.
 *
 * @typeParam T - Type of elements stored in the queue.
 */
export class Queue<T> implements ManipulableQueue<T> {
  #front: QueueNode<T> | null = null
  #rear: QueueNode<T> | null = null
  #size = 0

  /**
   * Optional queue identifier.
   */
  readonly name?: string

  constructor(name?: string) {
    this.name = name
  }

  /** @inheritdoc */
  get front(): T | undefined {
    return this.#front?.value
  }

  /** @inheritdoc */
  get rear(): T | undefined {
    return this.#rear?.value
  }

  /** @inheritdoc */
  get size(): number {
    return this.#size
  }

  /** @inheritdoc */
  isEmpty(): boolean {
    return this.#size === 0
  }

  /** @inheritdoc */
  enqueue(item: T): void {
    const node = new QueueNode(item)

    if (!this.#front) {
      this.#front = node
    } else {
      this.#rear!.next = node
    }

    this.#rear = node
    this.#size++
  }

  /** @inheritdoc */
  dequeue(): T | undefined {
    if (!this.#front) return undefined

    const value = this.#front.value
    this.#front = this.#front.next

    if (!this.#front) {
      this.#rear = null
    }

    this.#size--
    return value
  }

  /** @inheritdoc */
  peek(): T | undefined {
    return this.#front?.value
  }

  /** @inheritdoc */
  last(): T | undefined {
    return this.#rear?.value
  }

  /** @inheritdoc */
  clear(): void {
    this.#front = this.#rear = null
    this.#size = 0
  }

  /*
   * Returns an iterator over the queue elements
   * from front to rear.
   */
  *[Symbol.iterator](): Iterator<T> {
    let current = this.#front
    while (current) {
      yield current.value
      current = current.next
    }
  }

  /** @inheritdoc */
  toArray(): T[] {
    return [...this]
  }

  /** @inheritdoc */
  toString(): string {
    return this.toArray().join(", ")
  }

  /** @inheritdoc */
  removeRear(): T | undefined {
    if (!this.#front) return undefined

    if (this.#front === this.#rear) {
      const value = this.#front.value
      this.clear()
      return value
    }

    let current = this.#front
    while (current.next !== this.#rear) {
      current = current.next!
    }

    const value = this.#rear!.value
    current.next = null
    this.#rear = current
    this.#size--
    return value
  }

  /** @inheritdoc */
  reverse(): void {
    let prev: QueueNode<T> | null = null
    let current = this.#front

    this.#rear = this.#front

    while (current) {
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.#front = prev
  }

  /** @inheritdoc */
  rotate(k: number): void {
    if (this.#size <= 1 || k === 0) return

    k = ((k % this.#size) + this.#size) % this.#size
    if (k === 0) return

    for (let i = 0; i < k; i++) {
      const value = this.dequeue()!
      this.enqueue(value)
    }
  }
}
