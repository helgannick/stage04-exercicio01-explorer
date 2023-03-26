



let n1 = prompt(`Digite o primeiro número`)

let n2 = prompt(`Digite o segundo número`)


let soma = Number(n1) + Number(n2);
let sub = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;
let Rdiv= n1 % n2;

alert(`A soma dos dois números é : ${soma}`)

alert(`A subtração dos dois números é : ${sub}`)

alert(`A multiplicação dos dois números é : ${mult}`)

alert(`A divisão dos dois números é : ${div}`)

alert(`O resto da divisão dois números é : ${Rdiv}`)

if(soma%2 == 0){
  alert(`A soma dos dois números é par : ${soma}`)
} else{
  alert(`A soma dos dois números é impar : ${soma}`)
}

if(n1 === n2){
  alert(`Os dois números inseridos são iguais : `)
} else {
  alert(`Os dois números inseridos são diferentes : `)
}