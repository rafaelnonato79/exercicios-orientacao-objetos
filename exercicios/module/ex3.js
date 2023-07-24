export class Retangulo{
    // atributos
    comprimento;
    largura;
    area;
    perimetro;
    piso;

    //constructor
    constructor(comprimento,largura,area, perimetro, piso){
        this.comprimento = comprimento;
        this.largura = largura; 
        this.area = `${this.comprimento*this.largura}m²`;
        this.perimetro = `${2*(comprimento+largura)}m`;
        this.piso = `${((comprimento*largura)/(0.64)).toFixed(2)} cerâmicas`;
    }

    //metodos 

    mudarLado(novoComprimento){
        this.comprimento = novoComprimento;
    }
    mudarLargura(novaLargura){
        this.largura = novaLargura;
    }
    novaArea(){
        this.area = this.comprimento*this.largura
    }
    novoPerimetro(){
        this.perimetro = 2*(this.comprimento * this.largura);
    }
    novoPiso(){
        this.piso = `${(this.area/0.36).toFixed(2)} cerâmicas`;
    }
}