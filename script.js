function ajout()
    {
        var produit = (document.getElementById("produit").value);
        var qte     = parseInt(document.getElementById("qte").value);
        var prix    = parseFloat(document.getElementById("prix").value);
        var total   = (prix * qte);
        var test    = total.toFixed(2)
        // var selectElement = document.getElementById('tablePrix');
        
      

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

        document.getElementById("tableau").innerHTML += "<tr><td>" + produit + "</td><td><div id='tablePrix' contenteditable='true'>" + qte + "</div></td ><td>" + test + "</td></tr>";
        document.getElementById("tableau").innerHTML += "<tr><td> </td></tr>";
        // document.getElementById("prixTotal").innerHTML += 
        

        // const selectElement = document.getElementById('tablePrix');

        // selectElement.addEventListener('change', (event) => {
        // const result = document.querySelector('.result');
        // result.textContent = `You like ${event.target.value}`;
        // });

        const input = document.getElementById('tablePrix');
        const log = document.getElementById('log');

        input.addEventListener('change', updateValue);

        function updateValue(e) {
        log.textContent = e.target.value;
        }
    } 