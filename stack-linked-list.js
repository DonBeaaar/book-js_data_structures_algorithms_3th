// @ts-check

import DoublyLinkedList from "./doubly-linked-list";

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList(); //{1}
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.removeAt(this.size() - 1); //{2}
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.getElementAt(this.size() - 1);
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }
  toString() {
    return this.items.toString();
  }
}

/** Apuntes de la clase
 *  1. le decimos que los items van a ser un objeto de DoublyLinkedList para acceder a sus metodos
 *  de ahi para adelante toda la implementacion del stack es en base a eso
 *  2. el contador va mas adelantado, por eso restamos 1
 */
