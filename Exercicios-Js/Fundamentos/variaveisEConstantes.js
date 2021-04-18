var a = 3 
let b = 4

var a = 30 // var pode ser declarada novamente.
//let b = 40 // let não pode ser declarada novamente. "Identifier 'b' has already been declared"
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a,b)

const c = 5

//c = 10 // const não pode ser alterado, por conta disso sofre o erro "TypeError: Assignment to constant variable."

console.log(c)

