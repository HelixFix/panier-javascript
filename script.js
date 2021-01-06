iproduit  = [];
iquantite = [];
iprix     = [];

let numbersOnly = /^\d+$/;
let decimalOnly = /^\d+((.|,)\d{1,2})?$/;

function testInputData(myfield, restrictionType) {

 var myData = document.getElementById(myfield).value;
 if(myData!==''){
  if(restrictionType.test(myData)){
   console.log('Ca marche !');
  }else{
   alert('Votre saisie de données n\'est pas valable !');
  }
 }else{
  alert('Veuillez saisir les données !');
 }
 return;
    
}

function ajout() {

let produit = document.getElementById("produit").value;
let prix    = document.getElementById("prix").value;
let qte     = document.getElementById("qte").value;

console.log(qte);

if (produit == "") {
    alert("Selectionne un produit, mon cher !");
    return false;
}

if (prix > 0) {
    console.log("Prix correct");
} else {
    console.log(qte);
    
    alert("Un prix négatif ? Try Again");
    return false;
}

iproduit.push(produit);
iquantite.push(parseInt(qte));
iprix.push(prix);

affichePanier();
}

function affichePanier() {
cartdata = "<table class='table'><tr><th>Nom du produit</th><th>Quantité</th><th>Prix unitaire </th><th>Total</th></tr>";

total = 0;

for (i = 0; i < iproduit.length; i++) {
    total    += iquantite[i] * iprix[i];
    cartdata += "<tr><td>" + iproduit[i] + '</td><td><textarea id="quantite" onchange=update(' + i + ')>' + iquantite[i] + "</textarea></td><td>" + iprix[i] + "</td><td>" + iquantite[i] * iprix[i] + "</td><td><button class=\"btn btn-primary\" onclick='delElement(" + i + ")'>Supprimer</button></td></tr>";

    console.log(iprix[i]);
    console.log(iquantite);
    
}

console.log(total);

cartdata += "<tr><td><b>Prix du panier total : </b></td><td></td><td></td><td><b>" + total + "</></td></tr></table>";

document.getElementById("panier").innerHTML = cartdata;

}

function update(i) {

    newQte       = parseInt(document.getElementById("quantite").value)  // fonctionne
    iquantite[i] = newQte
    console.log('update' + newQte);

    affichePanier();

}

function delElement(a){
    iproduit.splice(a, 1);
    iquantite.splice(a, 1)
    iprix.splice(a, 1)

    affichePanier();

  }
