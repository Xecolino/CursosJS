
// parametros de função


function soma (numero1 ,numero2){
    return numero1 + numero2;
}

console.log(soma(2,2))

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade} anos.`;
}

console.log(nomeIdade("Batata",7))

                    // valor padrao
function multiplica (n1 = 1,n2 = 1){
    return n1 * n2;
   
}
                           //9       //6
console.log(multiplica(soma(4,5),soma(3,3)))


