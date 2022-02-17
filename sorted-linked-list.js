// @ts-check
import LinkedList, { defaultEquals } from "./linked-list";

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    //{1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; //{2}
}

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, comprareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = comprareFn; //{3}
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }

    return i;
  }
}

/** Apuntes definicion de la clase
 *
 *  Como esta es una que compara, creamos por defecto una funcion para comparar
 *  1. si son iguales retorna 0
 *  2. si el primero es menor que el segundo -1 y si es mayor 1
 */
