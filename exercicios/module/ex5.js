export class ContaCorrente{
    //atribuos

    numero;
    nome;
    saldo = 0;

    //constructor
    constructor(numero,nome,saldo){
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }

    //metodos

    alterarNome(novoNome){
        this.nome = novoNome;
    }

    depositar(valor){
        if(valor>0)
        this.saldo = this.saldo + valor;
    }
    sacar(valor){
        if(valor>0 && valor<this.saldo){
            this.saldo = this.saldo - valor;
        }
    }




}