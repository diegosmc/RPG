import { Cachorro } from "./animalDog"; // Importando Cachorro do outro TS
import prompt from 'prompt-sync';

let bob: Cachorro = new Cachorro("Bob", 100, 50, 70,); // Criando o new objeto

let teclado = prompt(); //Chamando prompt
let option: number = 0; 

while (option != 9 && !bob.isCansou()) {
    
console.log()
    console.log("########## Escolha a função de Bob #########")
    console.log("|1. Comer                                  |")
    console.log("|2. Dormir                                 |")
    console.log("|3. Receber Carinho                        |")
    console.log("|4. Morder o Carteiro                      |")
    console.log("|5. Ganhar Petisco                         |")
    console.log("|6. Brincar                                |")
    console.log("|7. Imprime Infos                          |")
    console.log("|9. Sair                                   |")
    console.log("###########################################")
    console.log()

    option = +teclado("Escolha Seu Destino: ")

    switch (option) {
        case 1: 
        bob.comer();
       console.log(bob.status());
        break;
        
        case 2: 
        bob.dormir();
        console.log(bob.status());
        break;
        
        case 3: 
        bob.receberCarinho();
        console.log(bob.status());
        break;
        
        case 4: 
        bob.morderCarteiro();
        console.log(bob.status());
        break;
        
        case 5:
        bob.ganharPetisco();
        console.log(bob.status());
        break;

        case 6: 
        let brinca: number = +teclado("Quantas horas você vai brincar com o Bob? ")
        bob.brincar(brinca);
        console.log(bob.status());
        break;

        case 7:
        console.log(bob.status());
        break;

    
    }

} 

console.log("Ops! Bob esta muito cansado para brincar agora, quem sabe mais tarde! Até mais...")