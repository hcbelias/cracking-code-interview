// Reference 
// Sarah Chima Atuonwu - https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

/**
 * JS Linked list implementation for studies
 */
export default class LinkedList {
	/**
	 * 
	 * @param {*} head Reference 
	 */
	constructor(head) {
		this.head = head;
	}
	/**
	 * Returns list size
	 * @returns {number} List size
	 */
	size() {
		let count = 0; 
		let node = this.head;

		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}
	/**
	 * Clears reference
	 */
	clear() {
		this.head = null;
	}
	/**
	 * Get last reference
	 * @returns Last reference
	 */
	getLast() {
		let lastNode = this.head;

		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}
		return lastNode;
	}
	/**
	 * Get first reference
	 * @returns First reference
	 */
	getFirst() {
		return this.head;
	}
}