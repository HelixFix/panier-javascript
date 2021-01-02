    iproduit  = [];
    iquantite = [];
    iprix     = [];

    
    

    function ajout() {

    var produit = document.getElementById("produit").value;
    var prix    = document.getElementById("prix").value;
    var qte     = parseInt(document.getElementById("qte").value);

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

    if (Number.isInteger(qte)) {
        console.log("Quantité correct");
    } else {
        // console.log(qte);
        
        alert("Quantité invalide");
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
        cartdata += "<tr><td>" + iproduit[i] + '</td><td><textarea id="quantite" onchange=update(' + i + ')>' + iquantite[i] + "</textarea></td><td>" + iprix[i] + "</td><td>" + iquantite[i] * iprix[i] + "</td></tr>";


        console.log(iprix[i]);
        console.log(iquantite);
        // console.log(document.getElementById("panier").rows[0].cells.length);
    }


    console.log(total);
    
    
    

    cartdata += "<tr><td></td><td></td><td></td><td>" + total + "</td></tr></table>";

    document.getElementById("panier").innerHTML = cartdata;

    
    }

    // Recupérer la valeur de la cellule (colonne ligne) et la mettre à jour
    
    function update(i) {
       
        // alert('ok')

        // iproduit.push(a, 1);
        // iquantite.splice(a, 1);
        // iprix.push(a, 1)
        // affichePanier();
        // newQte.push(parseInt(document.getElementById("quantite").value));
        newQte       = parseInt(document.getElementById("quantite").value)  // fonctionne
        iquantite[i] = newQte
        console.log('update' + newQte);
        // console.log(document.quantite.value);
        affichePanier();
        // total[i] += iquantite * iprix;
        // console.log(total[i]);
        
    }

