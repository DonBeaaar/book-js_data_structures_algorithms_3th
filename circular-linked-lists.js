// @ts-check
import LinkedList, { defaultEquals } from "./linked-list";
import { Node } from "./models/linked-list-models";

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          //{1}
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current; //{2}
          current = this.getElementAt(this.size()); //{3} obtenemos el ultimo
          // update last element
          this.head = node; //{4}
          current.next = this.head; //{5}
        }
      } else {
        const previous = this.getElementAt(index - 1); //{6}
        node.next = previous.next; //{7}
        previous.next = node; //{8}
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head; //{1}
          current = this.getElementAt(this.size()); //{2}
          this.head = this.head.next; //{3}
          current.next = this.head; //{4}
          current = removed; //{5}
        }
      } else {
        //   no need to update the last item in circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }
}

/** Apuntes insert
 *  1. si lo queremos insertar de los primeros y no hay ninguno,
 *  le decimos que sea el head y que su siguente va a ser this.head (vo mismo)
 *  2. si ya hay elementos, le decimos que el siguente va a ser el current (apunta a this.head, primero)
 *  asi queda de los segundos
 *  3. como es circular, tenemos que actualizar la referencia al ultimo y lo buscamos
 *  4. le decimos que el head o primero va a ser el elemento que vamos a insertar
 *  5. y que el current.next, osea la referencia next del ultimo, va a ser el head (completar el circulo)
 *  6. si esta en el medio, buscamos el previo
 *  7. le decimos que el siguente al node va a ser el previous.next osea el que va a ir despues
 *  8. lo insertamos entre los dos y le decimos que el previous.next va a ser el node asi completamos (previous - node - current)
 *
 */

/** Apuntes removeAt
 *  Aca solo cambia la implementacion del segundo escenario 
 *  (elimina el primero y la lista tiene elementos)
 * 
 *  1. hacemos referencia al elemento que se remueve
 *  2. buscamos el ultimo, ya que le tenemos que actualizar el next
 *  3. cambiamos el head al head.next (osea nos saltamos el que habia antes) 
 *  tomara el valor del segundo que ahora es el primero
 *  4. al ultimo le decimos que el siguente es el this.head que ahora esta 
 *  con el valor que corresponde
 *  5. le asignamos el current al removed para retornarlo
 */