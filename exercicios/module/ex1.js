export class Bola{
// atriubutos
    cor;
    circunferencia;
    material;

// construtor
    constructor(cor, circunferencia, material){
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
    }
// metodos
    trocaCor(novaCor){
        this.cor = novaCor;
    }
}

