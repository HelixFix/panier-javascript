    iproduit  = [];
    iquantite = [];
    iprix     = [];

    function ajout() {

    var produit = document.getElementById("produit").value;
    var prix    = document.getElementById("prix").value;

    if (produit == "") {
        alert("Selectionne un produit, mon cher !");
        return false;
    }

    if (prix > 0) {
        console.log("Prix correct");
    } else {
        alert("Un prix négatif ? Try Again");
        return false;
    }

    // iproduit.push(document.getElementById("produit").value);
    iproduit.push(produit);
    iquantite.push(parseInt(document.getElementById("qte").value));
    iprix.push(parseInt(prix));

    affichePanier();
    }

    function affichePanier() {
    cartdata = "<table><tr><th>Nom du produit</th><th>Quantité</th><th>Prix</th><th>Total</th></tr>";

    total = 0;

    for (i = 0; i < iproduit.length; i++) {
        total    += iquantite[i] * iprix[i];
        cartdata += 
        "<tr><td>" + iproduit[i] + "</td><td contenteditable='true'>" + iquantite[i] + "</td><td>" + iprix[i] + "</td><td>" + iquantite[i] * iprix[i] + "</td></tr>";


        console.log(iprix[i]);
    }

    console.log(total);
    
    
    

    cartdata += "<tr><td></td><td></td><td></td><td>" + total + "</td></tr></table>";

    document.getElementById("panier").innerHTML = cartdata;
    }
