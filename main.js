let btnGenerate = document.getElementById("genera");
btnGenerate.addEventListener("click",

    function() {
        let nome = document.getElementById("nome").value;
        console.log("nome del passeggero:", nome);

        let km = document.getElementById("km").value;
        console.log("km da percorrere:", km);

        let età = document.getElementById("età").value;
        console.log("età:", età);

        let ticketPrice = Math.floor(km * 0.21);
        let discount;
        let discountType;
        console.log("Prezzo del biglietto pieno:", ticketPrice);

        // sconto
        if (età == "minorenne") {
            discount = ticketPrice * 0.2;
            discountType = "Sconto minorenne";
        } else if (età == "over65") {
            discount = ticketPrice * 0.4;
            discountType = "Sconto over 65";
        } else {
            discount = 0;
            discountType = "Biglietto standard";
        }

        //prezzo finale
        let finalPrice = ticketPrice - discount;
        console.log("Prezzo dello sconto:", discount);
        console.log("Prezzo del biglietto finale:", finalPrice);
        console.log("Tipo di sconto:", discountType);

        //dati biglietto in pagina
        document.getElementById("passenger").innerHTML = nome;
        document.getElementById("discount").innerHTML = discountType;
        document.getElementById("ticket-price").innerHTML = finalPrice + "€";

        let wagonNumber = Math.floor(Math.random() * 9) + 1;
        console.log("Creazione numero di carrozza:", wagonNumber);
        document.getElementById("wagon").innerHTML = wagonNumber;

        let cpCode = Math.floor(Math.random() * 10000) + 90000;
        console.log("Creazione numero CP:", cpCode);
        document.getElementById("cp-code").innerHTML = cpCode;


    }

)

let btnReset = document.getElementById("reset");
btnReset.addEventListener("click",
    function reset() {
        document.getElementById("passenger").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("ticket-price").innerHTML = "";
        document.getElementById("wagon").innerHTML = "";
        document.getElementById("cp-code").innerHTML = "";


    }
)