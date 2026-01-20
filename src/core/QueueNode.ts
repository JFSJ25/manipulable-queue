/**
 * Internal node representation for the queue.
 *
 * This class is intentionally minimal and is not
 * exposed through the public API.
 *
 * @internal
 * @typeParam T - Type of the stored value.
 */
export class QueueNode<T> {
  constructor(
    /* Value stored in the node. */
    public value: T,

    /* Reference to the next node in the queue. */
    public next: QueueNode<T> | null = null
  ) { }
}
