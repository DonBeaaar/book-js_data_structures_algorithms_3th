// @ts-check
import LinkedList, { defaultEquals } from "./linked-list";
import { DoublyNode } from "./models/linked-list-models";

export default class DoublyLinkedList extends LinkedList {
  // {1}
  constructor(equalsFn = defaultEquals) {
    super(equalsFn); // {2}
    this.tail = undefined; // {3}
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) { // {1}
        if (this.head == null) { // {2}
          this.head = node;
          this.tail = node;
        } else {
          node.next = current; // {3}
          current.prev = node; // {4}
          this.head = node; // {5}
        }
      } else if (index === this.count) { // last item
        current = this.tail; // {6}
        current.next = node; // {7}
        node.prev = current; // {8}
        this.tail = node; // {9}
      } else { // insert in the middle
        const previous = this.getElementAt(index - 1); // {10}
        current = previous.next; // {11}
        node.next = current; // {12}
        previous.next = node; // {13}
        current.prev = node; // {14}
        node.prev = previous; // {15}
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index){
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      // eliminar el primer elemento
      if (index === 0) {
        this.head = current.next; //{1}
        if (this.count === 1) {
          this.tail = undefined; //{2}
        } else {
          this.head.prev = undefined; //{3}
        }
        // eliminar el ultimo item
      } else if(index === this.count - 1){
        current = this.tail; //{4}
        this.tail = current.prev; //{5}
        this.tail.next = undefined; //{6}
      } else {
        current = this.getElementAt(index); //{7}
        const previous = current.prev; //{8}
        // link previous with current's next - skip it to remove
        previous.next = current.next; //{9}
        current.next.prev = previous; //{10}
      }
      this.count --;
      return current.element;
    }

    return false;
  }
}

/** Apuntes del insert
 * 
 * 1. si quiere insertar de los primeros
 * 2. si no hay elementos en la lista, apuntamos a que va a ser el primero y el ultimo
 * 3. si hay, le referenciamos que el siguente va a ser el que antes estaba de primero (asi se "corre")
 * 4. al elemento siguente le decimos que el prev va a ser el node que vamos a insertar
 * 5. establecemos el node como el this.head, ahora el es el primero
 * 
 * 6. referenciamos a el ultimo elemento de la linked list
 * 7. le decimos que el siguente va a ser el node que vamos a insertar
 * 8. al node le decimos que su prev va a ser el elemento que antes era el ultimo
 * 9. establecemos el node como this.tail, para que sea el ultimo
 * 
 * 10. referenciamos a el elemento previo al index que queremos insertar el node
 * 11. referenciamos a el elemento que va a venir despues (previous - new - current) y que actualmente ocupa el index
 * 12. establecemos que el siguente del node va a ser el actual current
 * 13. establecemos que el siguente del elemento previo (.10) va a ser el node
 * 14. establecemos que el elemento anterior al ex current (.11) va a ser el node
 * 15. establecemos que el elemento previo al node va a ser el previous (.10) y asi completamos las cadenas y los links 
 */


/** Apuntes del removeAt
 *  1. si queremos eliminar el primero, ya saltamos el head al current.next y asi sacamos al primero
 *  2. si solo hay uno, definimos el tail (auxiliar para el ultimo) en undefined
 *  3. si hay mas de uno, decimos que this.head(primero).prev es undefined, asi le quitamos los dos links
 *  4. como queremos eliminar el ultimo, le decimos que current sea this.tail, que hace referencia al ultimo elemento
 *     (entonces ya lo tenemos en la ultima posicion)
 *  5. le decimos ahora que el this.tail, va a hacer referencia al current.prev osea el segundo last item
 *  6. ahora como tail apunta al segundo ultimo, y queremos eliminar el ultimo, le decimos que el next sea undefined
 *     para que ahora el segundo ultimo se transforme en el ultimo
 *  7. itereamos hasta encontrar el elemento en el indice que queremos eliminar
 *  8. definimos que el valor previo es el current.prev
 *  9. ahora nos lo tenemos que saltar, el previous.next es igual al current.next, osea nos saltamos el que eliminamos
 *  10. le decimos al current.next.prev que el anterior ahora va a ser el anterior al que eliminamos
 */