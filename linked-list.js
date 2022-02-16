// @ts-check
import { Node } from "./models/linked-list-models";

function defaultEquals(a, b) {
  return a === b;
}

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    //{1}
    this.count = 0; // {2}
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element); // ${1}
    let current;
    if (this.head == null) {
      // ${2}
      this.head = node;
    } else {
      current = this.head; // ${3}
      while (current.next !== null) {
        // ${4}
        current = current.next;
      }
      current.next = node; // ${5}
    }

    this.count++;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      //{1}
      let current = this.head;

      if (index === 0) {
        //{2}
        this.head = current.next;
      } else {
        // let previous;
        // for (let i = 0; i < index; i++) { //${3}
        //   previous = current;
        //   current = current.next;
        // }
        // // link previous with current's next: skip to remove
        // previous.next = current.next; //${4}

        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element; //${5}
    }

    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current; // {1}
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); // {2}
        const current = previous.next; // {3}
        node.next = current; // {4}
        previous.next = node; // {5}
      }
      this.count++;
      return true;
    }

    return false;
  }

  indexOf(element) {
    let current = this.head; // {1}
    for (let i = 0; i < this.count && current != null; i++) {
      // {2}
      if (this.equalsFn(element, current.element)) {
        // {3}
        return i;
      }
      current = current.next; // {4}
    }

    return -1; // {5}
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }

    return undefined;
  }
}

/** Apuntes class */
// 1 = Si se quiere implementar una funcion para comparar la igualdad, de forma personalizada si no se usa la que esta por defecto
// 2 = Contador interno

/** Apuntes push method */
// 1. el elemento que queremos agregar lo hacemos de tipo Node (guarda a si mismo, y su referencia)
// 2. si la lista esta vacia, simplemente agregamos el node como head
// 3. asignamos a current el valor del head (ya que la lista no estaba vacia)
// 4. como no tenemos la referencia del ultimo, tenemos que iterar hasta que la referencia al siguente sea vacia, y eso signifique el final del linked list
// 4.1 nos vamos moviendo de posicion a la siguente hasta que encontremos la referencia vacia
// 5. cuando encontramos esa referencia vacia, le asignamos al next (referencia) el node, que tiene su element y su siguente referencia vacia, asi se posiciona al final de la lista
//    esperando al siguente

/** Apuntes removeAt - eliminar por indice */
// 1. validamos que el indice sea un numero valido
// 2. si el elemento a eliminar es el primero, lo eliminamos y dejamos su remplazo al siguente elemento
// 3. si esta en otra posicion iteramos hasta la posicion previa del index,
// current hace referencia al elemento que estamos iterando
// previous hace referencia al elemento anterior a current
// mientras estamos antes, hacemos que previous sea el actual y el current, hacemos que avance en la lista
// 4. una vez que llegamos a la posicion deseada, asignamos el valor previous.next con el current.next
//  y lo que hacemos es "saltarnos" ese elemento y se elimina (se perdera en la memoria y estara disponible para el garbage collector)

/** Apuntes insert */
// 1. asignamos this.head como siguente al elemento (si ya hay alguno, se pone despues)
// y despues asignamos el elemento como primero (head)
// 2. buscamos el valor previo al elemento
// 3. linkeamos el siguente elemento, el que vendra despues, asi tenemos (antes - elemento - despues)
// 4. al elemento le asignamos que el next value va a ser el que obtuvimos en el punto 3
// 5. lo ubicamos despues del elemento previo, punto 2, asi lo ponemos al medio

/** Apuntes indexOf */
// 1. usamos la variable auxiliar (para iterar) y empezamos por el primer elemento
// 2. iteramos hasta que el contador termine (linked list se acabe) o el current se null (evitar errores)
// 3. vemos si es igual y retornamos la posicion en la que se encuentra
// 4. hacemos que avance al siguente elemento
// 5. si no encuentra ninguna retorna -1
