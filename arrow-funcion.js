// declarar uma função
function apresentar(nome) {
    return `meu nome é ${nome}`;

}

// Arrow function
let apresentarArrow = nome => `meu nome é ${nome}`;

let soma = (n1 , n2) => n1 + n2;

// Arrow function + de 1 linha de instrução se comporta como se fosse uma expressão de função

let somaNumeroPequenos = (num1,num2) => {
    if (num1 > 10 || num2 >10){
        return "somente numeros de 1 a 9"
    } else{ return num1 + num2}
}
