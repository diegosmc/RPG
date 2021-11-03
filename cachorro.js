"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
// Criação da Classe, expotando objeto para main. 
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, energia, felicidade, ataque) {
        this.nome = nome;
        this.energia = energia;
        this.felicidade = felicidade;
        this.ataque = ataque;
    }
    // Crianção dos Metodos, utilizando VOID sempre quanto o metodo não retorna NADA ( !! N TEM RETURN !!),
    // Quando for usar return, não pode ter o VOID, se não da erro, tem de estar após os (): oque ele vai retornar Ex: boolean
    // O método pode receber vários paramentros, mas só terá um retorno. Sempre tem de especificar se é um string, number, boolen
    Cachorro.prototype.status = function () {
        return ("Cachorro: \n" +
            "\nNome: " + this.nome +
            ("\n Energia: " + this.energia.toFixed(1)) +
            ("\n Feliciade: " + this.felicidade.toFixed(1)) +
            ("\n Ataque: " + this.ataque.toFixed(1)));
    };
    Cachorro.prototype.comer = function () {
        this.energia += 10;
        console.log("Vai comer Cusco!");
    };
    Cachorro.prototype.dormir = function () {
        this.energia += 20;
        this.felicidade += 20;
        console.log("Passa... Vai te deitar, cachorro é na rua!");
    };
    Cachorro.prototype.receberCarinho = function () {
        this.felicidade += 30;
        this.energia += 10;
        console.log("Nice Dog!!");
    };
    Cachorro.prototype.morderCarteiro = function () {
        this.ataque += 5 + Math.random() * 10;
        this.energia -= 10 + Math.random() * 10;
        this.felicidade -= 5 + Math.random() * 10;
        if (this.energia < Math.random() * 30) {
            console.log("O carteiro foi mais rápido... Mais sorte da próxima vez Bob! ");
        }
        else {
            console.log("Boa Bob! Bom Garoto!");
        }
    };
    Cachorro.prototype.ganharPetisco = function () {
        this.felicidade += 10;
        this.energia += 5 + Math.random() * 10;
        var dadoDaMordida = Math.random() * 10;
        if (this.energia > dadoDaMordida) {
            console.log("Opa Bob, assim não vai pegar o carteiro!");
        }
        else {
            console.log("LANHA!!");
        }
    };
    Cachorro.prototype.brincar = function (brinca) {
        this.felicidade += 10;
        this.energia -= brinca * Math.random() * 10;
    };
    Cachorro.prototype.isCansou = function () {
        if (this.energia > 80) {
            return true;
        }
        else {
            return false;
        }
    };
    return Cachorro;
}());
exports.Cachorro = Cachorro;
