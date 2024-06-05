/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere - Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65 */

// fare in modo che il nome, i chilometri da percorrere e 
//l'età del passeggero nel form vengano salvati

const nameInput = document.querySelector(".input-name");
const kmInput = document.querySelector(".input-km");
const ageInput = document.querySelector(".input-age");

// console.log(nameInput, kmInput, ageInput);

const AddButton = document.querySelector(".invio");

//funzione che rielabora i dati da inserire e genera il riepilogo dati al click

function ticket() {
    let nameValue = nameInput.value;
    let kmValue = parseInt(kmInput.value);
    let ageValue = ageInput.value;

    //calcolare il prezzo in base al numero di chilometri
    let totPrice = 0.21 * kmValue;
    let scontoMin = (totPrice * 0.20);//prezzo al -20%
    let scontoOver = (totPrice * 0.40);//prezzo al -40%
    console.log(nameValue, kmValue, ageValue, totPrice);
    console.log(scontoMin, scontoOver);

    //applicare sconti in base all'età
    if (ageValue === 'minorenne') {
        totPrice;
        scontoMin;
        let yourTicket = totPrice - scontoMin;
        price = yourTicket;
        console.log(price);
    } else if (ageValue === 'over65') {
        totPrice;
        scontoOver;
        let yourTicket = totPrice - scontoOver;
        price = yourTicket;
        console.log(price);
    } else {
        let totPrice = 0.21 * parseInt(kmInput.value);
        price = totPrice;
        console.log(price);
    }
    //generare l'output del biglietto

    let code = Math.floor(1000 + Math.random()*9000);

    // document.getElementById("cp").innerHTML = code;
    // document.getElementById("ticket").innerHTML = price.toFixed(2) + " euro";
    // document.getElementById("name").innerHTML = nameValue;

    const addTable = document.getElementById("add-table");

    addTable.innerHTML += "<h3>" + "DETTAGLI PASSEGGERI" + "</h3>" + "<table>" + "<tbody>" +
        + "<tr>" + "<th>" + "Nome e cognome" + "</th>" + "<th>" + "Carrozza" + "</th>" + "<th>" + "Offerta" + "</th>" + "<th>" + "Codice" + "</th>" + "<th>" + "Costo biglietto" + "</th>" + "</tr>" +
        + "<tr>" + "<td>" + nameValue + "</td>" + "<td>" + "5" + "</td>" + "<td>" + code + "</td>" + "<td>" + "Standard" + "</td>" + "<td>" + price.toFixed(2) + " euro" + "</td>" + "</tr>" +
        + "</tbody>" + "</table>";

}

AddButton.addEventListener('click', ticket);
