export class Televisor{
    // atributos
    canal;
    volume;

    //constructor
    constructor(canal,volume){
        this.canal = canal;
        this.volume = volume;
    }

    //metodos
    mudarCanal(novoCanal){
        let canalValido = novoCanal>0;
        if(canalValido){
        this.canal=novoCanal
        }else{
            console.log("Canal inválido");
        }
    }

    aumentarVolume(){
        let volumeValido = this.volume<=100;
        if(volumeValido){
        this.volume +=1;
        }else{
            console.log("volume Maximo permitido!");
        }
    }

    diminuirVolume(){
        let volumeMinimo = this.volume>=0;
        if(volumeMinimo){
            this.volume -=1;
        }else{
            console.log("Volume minimo atingido");
        }
    }

}