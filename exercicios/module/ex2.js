export class Quadrado{
    //atributos
    lado;

    constructor(lado,cor,material){
        this.lado = lado;
        this.cor = cor;
        this.material = material;
    }

    //metodos
    mudarLado(novoLado){
        this.lado = novoLado
    }
}