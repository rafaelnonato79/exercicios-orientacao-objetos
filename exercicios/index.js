// Importar a classe Bola do arquivo bola.mjs
import { ContaCorrente } from './module/ex5.js';

// Exemplo de uso da classe Bola
const contaRafael = new ContaCorrente(1234,"Rafael",0);
contaRafael.depositar(500);
contaRafael.sacar(50);

console.log(contaRafael);

