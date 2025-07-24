// Importa a função sum do arquivo sum.js
const { sum } = require('./sum');

// Bloco de testes para a função sum
describe('sum', () => {
  // Testa a soma de dois números positivos
  it('soma dois números positivos', () => {
    expect(sum(2, 3)).toBe(5);
  });

  // Testa a soma de dois números negativos
  it('soma números negativos', () => {
    expect(sum(-2, -3)).toBe(-8);
  });

  // Testa a soma de um número positivo com um negativo
  it('soma número positivo e negativo', () => {
    expect(sum(5, -2)).toBe(3);
  });


  it('soma zero', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 5)).toBe(5);
  });
}); 