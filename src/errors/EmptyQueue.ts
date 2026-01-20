/*
 * Error representing an invalid operation on an empty queue.
 *
 * This error is not thrown by default by the queue implementation,
 * but is provided for who wish to enforce stricter
 * error-handling policies.
 */
export class EmptyQueue extends Error {
  constructor(message = "The queue is empty") {
    super(message)
    this.name = "EmptyQueue"
  }
}
