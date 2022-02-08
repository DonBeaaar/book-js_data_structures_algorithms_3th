// @ts-check
class Stack {
  constructor() {
    // Nos ayudara a trackear el largo del stack y hacer las modificaciones en el mismo
    this.count = 0;
    this.items = {};
  }

  push(element) {
    // El objeto es un set de llave : valor, en la llave count le damos el valor de element
    // { 0: element }
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    // Si esta vacio no hacemos nada
    if (this.isEmpty()) return;
    // Bajamos el contador
    this.count--;
    // Almacenamos antes de eliminar
    const result = this.items[this.count];
    // Eliminamos el del top
    delete this.items[this.count];
    // Retornamos el eliminado
    return result;
  }

  peek() {
    // Si esta vacio no hacemos nada
    if (this.isEmpty()) return;

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  // metodo para poder imprimir en consola
  toString() {
    if (this.isEmpty()) return;
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      // mantenemos el anterior, al momento de imprimir
      objString = `${objString},${this.items[i]}`;
    }
  }
}

// const stack = new Stack();
// stack.push(5);
// stack.push(8);

// stack.pop();

/** Converting decimal numbers to binary */

const decimalToBinary = (decNumber) => {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    // Concatenamos los elementos del stack
    // En este punto ya esta el stack completo, asi que no hay problema
    binaryString += remStack.pop().toString();
  }

  return binaryString;
};

console.log(decimalToBinary(233))
