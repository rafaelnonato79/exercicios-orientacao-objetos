// Importar a classe Bola do arquivo bola.mjs
import { Televisor } from './module/ex6.js';

// Exemplo de uso da classe Bola
const televisorNovo = new Televisor(10,1);
televisorNovo.diminuirVolume();
televisorNovo.diminuirVolume();
televisorNovo.mudarCanal(-90);
console.log(televisorNovo);

