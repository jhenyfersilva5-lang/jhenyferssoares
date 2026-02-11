const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});
console.log("--- Calculadora Node.js ---");
rl.question('Digite o primeiro número: ', (num1) => {
    
        const n1 = parseFloat(num1);
        
for (let i = 1; i <= num1; i++) {
    // i++ é o incremento que evita o loop infinito
    console.log(`Contagem: ${i}`);
}
 rl.close();
    });
