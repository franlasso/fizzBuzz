let calcular =document.getElementById("btn");
let entrada = document.getElementById("entrada");
let salida = document.getElementById ("salida");

// let fizzbuzz = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numero = 0; //dato que ingresa el usuario

entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value;
    console.log(numero);
});

calcular .addEventListener("click", ()=>FizzBuzz(numero))

function FizzBuzz(numero){
    for(let i=1; i<numero; i++){
            let hijo = document.createElement("li")
        if(i%3== 0 && i%5 ==0){
            hijo.innerHTML = "FizzBuzz";
        }else if(i%3 ==0){
            hijo.innerHTML = "Fizz";
        }else if (i%5 ==0) {
            hijo.innerHTML = "Buzz";
        }else{
            hijo.innerHTML = "Otro";
    }
    salida.appendChild(hijo)
}
};