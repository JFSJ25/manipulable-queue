import { QueueADT } from "./QueueADT"

/**
 * Extension of the Queue ADT that exposes controlled
 * structural manipulation operations.
 *
 * These methods allow transformations while preserving
 * queue invariants such as size and order consistency.
 *
 * @typeParam T - Type of elements stored in the queue.
 */
export interface ManipulableQueue<T> extends QueueADT<T> {
  /**
   * Removes and returns the rear element of the queue.
   * @returns The removed element, or `undefined` if the queue is empty.
   */
  removeRear(): T | undefined

  /**
   * Reverses the order of the queue in place.
   */
  reverse(): void

  /**
   * Rotates the queue by `k` positions.
   *
   * Positive values rotate forward, negative values rotate backward.
   * Rotation is normalized internally.
   *
   * @param k - Number of positions to rotate.
   */
  rotate(k: number): void
}
