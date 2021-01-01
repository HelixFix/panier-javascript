function ajout()
    {
        var produit = (document.getElementById("produit").value);
        var qte     = parseInt(document.getElementById("qte").value);
        var prix    = parseFloat(document.getElementById("prix").value);
        var total   = (prix * qte);
        var test    = total.toFixed(2)

        console.log(total);
        console.log(produit);

        if (produit == "") {
            alert("Selectionne un produit, mon cher !");
            return false;
        }

        if(prix > 0 ) 
        { 
        console.log('Prix correct');
        }
        else
        { 
        alert('Un prix négatif ? Try Again')
        return false;
        }

        document.getElementById("tableau").innerHTML += "<tr><td>" + produit + "</td><td><div contenteditable='true'>" + qte + "</div></td><td>" + test + "</td></tr>";
        document.getElementById("tableau").innerHTML += "<tr><td> </td></tr>";
        // document.getElementById("prixTotal").innerHTML += 
        

    } 