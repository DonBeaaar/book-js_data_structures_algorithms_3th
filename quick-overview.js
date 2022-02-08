class Test {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

const test =  new Test('Felipe');
console.log(test.name)
test.name = 'Franco'
console.log(test.name)

//  array asingment
const [userName, lastname] = ['Felipe', 'Donoso']
console.log(userName) // 'Felipe' 