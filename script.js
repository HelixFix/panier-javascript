function ajout()
    {
        var produit = (document.getElementById("produit").value);
        var qte     = parseInt(document.getElementById("qte").value);
        var prix    = parseFloat(document.getElementById("prix").value);
        console.log(produit);
        var total = (prix * qte);
        var test  = total.toFixed(2)
        console.log(total);

        if (produit == "") {
            alert("Selectionne un produit, mon cher !");
            return false;
        }

        if(prix > 0 ) 
        { 
        alert('Correct..')
        
        }
        else
        { 
        alert('Pas bon...!')
        return false;
        }


    
        
        

        document.getElementById("tableau").innerHTML += "<tr><td>" + produit + "</td><td>" + qte + "</td><td>" + test + "</td></tr>";
        document.getElementById("tableau").innerHTML += "<tr><td> </td></tr>";
        // document.getElementById("prixTotal").innerHTML += 
        

    } 