// Tipado de objetos
interface Person {
    name: string;
    age: number;
}

function printName(person: Person) {
    console.log(person.age)
}

// POO clasico
interface Comparable {
    compareTo(b): number;
}

class MyObject implements Comparable {
    age: number;
    compareTo(b): number {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}