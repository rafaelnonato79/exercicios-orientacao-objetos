export class Pessoa{
    // atributos
    nome;
    idade;
    peso;
    altura;

    //constructor
    constructor(nome,idade,peso,altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    // metodos
    envelhecer(){
        this.idade +=1;
        if(this.idade<21){
            this.altura +=0.5
        }
    }

    engodar(engordou){
        this.peso += engordou;
    }
    emagrecer(emagreceu){
        this.peso -= emagreceu;
    }
}