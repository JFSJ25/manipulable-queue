/**
 * Queue Abstract Data Type (ADT).
 *
 * Defines the minimal contract for a generic FIFO queue.
 * This interface is non-throwing by design: operations that
 * cannot be performed safely return `undefined`.
 *
 * @typeParam T - Type of elements stored in the queue.
 */
export interface QueueADT<T> extends Iterable<T> {
  /**
   * Optional queue identifier.
   * Useful for debugging or descriptive purposes.
   */
  readonly name?: string

  /**
   * Returns the front element of the queue without removing it.
   * @returns The front element, or `undefined` if the queue is empty.
   */
  get front(): T | undefined

  /**
   * Returns the rear element of the queue without removing it.
   * @returns The rear element, or `undefined` if the queue is empty.
   */
  get rear(): T | undefined

  /**
   * Number of elements currently stored in the queue.
   */
  get size(): number

  /**
   * Checks whether the queue is empty.
   * @returns `true` if the queue has no elements.
   */
  isEmpty(): boolean

  /**
   * Inserts an element at the rear of the queue.
   * @param item - Element to enqueue.
   */
  enqueue(item: T): void

  /**
   * Removes and returns the front element of the queue.
   * @returns The removed element, or `undefined` if the queue is empty.
   */
  dequeue(): T | undefined

  /**
   * Alias for {@link front}.
   * Returns the front element without removing it.
   */
  peek(): T | undefined

  /**
   * Alias for {@link rear}.
   * Returns the rear element without removing it.
   */
  last(): T | undefined

  /**
   * Removes all elements from the queue.
   */
  clear(): void

  /**
   * Returns a shallow array copy of the queue contents,
   * preserving insertion order.
   */
  toArray(): T[]

  /**
   * Returns a string representation of the queue.
   */
  toString(): string
}
