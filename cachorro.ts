// Criação da Classe, expotando objeto para main. 
export class Cachorro {

    constructor(
      private _nome: string,
      private _energia: number,
      private _felicidade: number,
      private _ataque: number,
  
    ) { }
     // Crianção dos Metodos, utilizando VOID sempre quanto o metodo não retorna NADA ( !! N TEM RETURN !!),
    // Quando for usar return, não pode ter o VOID, se não da erro, tem de estar após os (): oque ele vai retornar Ex: boolean
   // O método pode receber vários paramentros, mas só terá um retorno. Sempre tem de especificar se é um string, number, boolen
  
public status(): string {
      return (
        "Cachorro: \n" +
        "\nNome: " + this._nome +
        ("\n Energia: " + this._energia.toFixed(1)) +
        ("\n Feliciade: " + this._felicidade.toFixed(1)) +
        ("\n Ataque: " + this._ataque.toFixed(1)))
    }
public  comer(): void {
      this._energia += 10;
      console.log("Vai comer Cusco!")
    }
public dormir(): void {
      this._energia += 20;
      this._felicidade += 20;
      console.log("Passa... Vai te deitar, cachorro é na rua!")
    }
public receberCarinho(): void {
      this._felicidade += 30;
      this._energia += 10;
      console.log("Nice Dog!!")
    }
public morderCarteiro(): void {
      this._ataque += 10 + this.randomizar(6)
      this._energia -= 5 + this.randomizar(10) 
      this._felicidade -= 5 + this.randomizar(10)
  
      if (this._energia < this.randomizar(20)) {
        console.log("O carteiro foi mais rápido... Mais sorte da próxima vez Bob! ")
      } else {
        console.log("Boa Bob! Bom Garoto!")
      }
    }
public ganharPetisco(): void {
      this._felicidade += this.randomizar(10);
      this._energia += this.randomizar(5)
      let dadoDaMordida = this.randomizar(10);
  
      if (this._energia > dadoDaMordida) {
        console.log("Opa Bob, assim não vai pegar o carteiro!")
      } else {
        console.log("LANHA!!")
      }
    }
public brincar(brinca: number): void {
      this._felicidade += 10
      this._energia -= brinca * this.randomizar(10)
    }
public isCansou(): boolean{
  
      if (this._energia < 80){
        return true;
      }
        else{
        return false;
      }
    }
private randomizar(fator: number): number{ // É viavel deixar privado, pois ele interessa apenas a classe, não tem porque temos acesso a ele através da main
        return Math.random() * fator
    }
  
  }
