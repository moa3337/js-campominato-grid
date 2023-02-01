/*
 L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
 Ogni cella ha un numero progressivo, da 1 a 100.
 Ci saranno quindi 10 caselle per ognuna delle 10 righe.
 Quando l'utente clicca su ogni cella, la cella cliccata si colora
 e si stampa un messaggio in console con il numero della cella cliccata.
*/

// AGGANCIO AL BOTTONE TRAMITE id DAL HTML
const button = document.getElementById("generate");

// CREO L'EVENTO AL "CLICK" DEL BOTTONE
button.addEventListener(
    "click", 
    function () {
        const grid = document.getElementById("grid")
        generateGrid(grid);
    }
)

// FUNZIONE PER GENERARE LE CASELLE
function generateGrid(grid) {

    // RESET DELLA GRIGLIA DOPO UN NUOVO "CLICK"
    grid.innerHTML = "";

    // CICLO PER CREARE LE 100 CASELLE DELLA GRIGLIA:
    for (let i = 1; i < 100; i++) {
        
        // CREO UN DIV CON NOME SQUARE PER LE CASELLE
        const square = document.createElement("div");
        
        // SCRIVO I NUMERI DA 1 A 100 NEGLI SQUARES
        square.innerHTML = i;
        
        square.classList.add("square");
        
        // CREO UN EVENTO SUL "CLICK" DI OGNI SQUARE
        square.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");   

                // QUANDO CLICCO SU UNO SQUARE STAMPALO IN CONSOLE
                 console.log("casella selezionata n°:" + i);
            }
            )
            grid.append(square);
        }   
    }

