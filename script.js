// conversor.js

const [valor, origem, destino] = process.argv.slice(2);

if (!valor || !origem || !destino) {
  console.log("Uso: node conversor.js <valor> <unidade_origem> <unidade_destino>");
  process.exit(1);
}

let resultado;

if (origem === "km" && destino === "milhas") {
  resultado = valor * 0.621371;
} else if (origem === "milhas" && destino === "km") {
  resultado = valor / 0.621371;
} else if (origem === "celsius" && destino === "fahrenheit") {
  resultado = (valor * 9) / 5 + 32;
} else if (origem === "fahrenheit" && destino === "celsius") {
  resultado = ((valor - 32) * 5) / 9;
} else {
  console.log(`Conversão de ${origem} para ${destino} não suportada.`);
  process.exit(1);
}

console.log(`${valor} ${origem} é igual a ${resultado.toFixed(2)} ${destino}.`);
