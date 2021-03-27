;
var globalVariable = 10;
console.log("Значение глобальной переменной: " + globalVariable);

setTimeout(function(){console.log("Оповещение, через 6 сек");},6000);
setTimeout(function(){console.log("Задержка 4 сек");},4000);

console.log("!. В JS вывод асинхронный ..");
alert("!. В JS вывод асинхронный ..");

var answer = confirm ("Да?")
console.log(answer);
alert("answer: " + answer);

