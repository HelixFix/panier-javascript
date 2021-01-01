

function ajout()
            {
                var produit = (document.getElementById("produit").value);
                var qte     = parseInt(document.getElementById("qte").value);
                console.log(produit);
               

                document.getElementById("tableau").innerHTML += "<tr><td>" + produit + "</td><td>" + qte + "</td><td>" + qte + "</td></tr>";
           

 
            }