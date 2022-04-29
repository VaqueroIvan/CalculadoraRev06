//Written by: Ivan Vaquero;
//Title: Calculator;
//Declarations of variables;
let btnSuma = <HTMLButtonElement>document.getElementById("btnSuma");
let btnResta = <HTMLButtonElement>document.getElementById("btnResta");
let btnMultiplicar = <HTMLButtonElement>(
  document.getElementById("btnMultiplicar")
);
let btnDividir = <HTMLButtonElement>document.getElementById("btnDividir");
let btnPotenciar = <HTMLButtonElement>document.getElementById("btnPotenciar");
let btnBorrar = <HTMLButtonElement>document.getElementById("btnBorrar");
let numero1: number = <HTMLInputElement>document.getElementById("numero1");
let numero2: number = <HTMLInputElement>document.getElementById("numero2");
let valor1: number = 0;
let valor2: number = 0;
let divResultado = <HTMLParagraphElement>document.getElementById("resultado");

//Main
btnSuma.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  divResultado.innerHTML =
    "El resultado de la suma es: " + Calcular(valor1, valor2, "+");
  console.log(Calcular(valor1, valor2, "+"));
});
btnResta.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  divResultado.innerHTML =
    "El resultado de la resta es: " + Calcular(valor1, valor2, "-");
  console.log(Calcular(valor1, valor2, "-"));
});
btnMultiplicar.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  divResultado.innerHTML =
    "El resultado de la multiplicación es: " + Calcular(valor1, valor2, "*");
  console.log(Calcular(valor1, valor2, "*"));
});
btnDividir.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  divResultado.innerHTML =
    "El resultado de la divición es: " + Calcular(valor1, valor2, "/");
  console.log(Calcular(valor1, valor2, "/"));
});
btnPotenciar.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  divResultado.innerHTML =
    "El resultado de la potenciación es: " + Calcular(valor1, valor2, "**");
  console.log(Calcular(valor1, valor2, "**"));
});
btnBorrar.addEventListener("click", () => {
  valor1 = 0;
  valor2 = 0;
  divResultado.innerHTML = "Los datos fueron eliminados";
  console.log("los datos fueron eliminados");
});

//Function calculator
function Calcular(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    case "**":
      return a ** b;
      break;
  }
}
