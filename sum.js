// Função que soma dois números e retorna o resultado
function sum(a, b) {
  return a + b;
}

// Este bloco só será executado se o arquivo for chamado diretamente pela linha de comando
if (require.main === module) {
  // Pega os argumentos da linha de comando (os dois números a serem somados)
  const [,, a, b] = process.argv;

  // Verifica se ambos os argumentos foram fornecidos
  if (a === undefined || b === undefined) {
    console.log('Uso: node sum.js <numero1> <numero2>');
    process.exit(1);
  }

  // Converte os argumentos para número
  const num1 = Number(a);
  const num2 = Number(b);

  // Verifica se os argumentos são números válidos
  if (isNaN(num1) || isNaN(num2)) {
    console.log('Por favor, forneça dois números válidos.');
    process.exit(1);
  }

  // Exibe o resultado da soma
  console.log(`A soma de ${num1} + ${num2} = ${sum(num1, num2)}`);
}

// Exporta a função sum para ser utilizada em outros arquivos (ex: nos testes)
module.exports = { sum }; 