function ajout()
            {
                var produit = (document.getElementById("produit").value);
                var qte     = parseInt(document.getElementById("qte").value);
                var prix     = parseInt(document.getElementById("prix").value);
                console.log(produit);
                var total = (prix * qte);
                console.log(total);

                if (produit == "") {
                  alert("Selectionne un produit, mon cher !");
                  return false;
                }

           
                
               

                document.getElementById("tableau").innerHTML += "<tr><td>" + produit + "</td><td>" + qte + "</td><td>" + total + "</td></tr>";
                document.getElementById("tableau").innerHTML += "<tr><td> </td></tr>";
                // document.getElementById("prixTotal").innerHTML += 
                

            } 