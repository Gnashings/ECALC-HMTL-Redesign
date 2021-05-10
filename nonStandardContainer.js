// Get the modal
var modal = document.getElementById("drink-modal");
var modalimg = document.getElementById("drink-modal-img");
var currentIDDrink;
let drinks = [
  ['Daiquiri', '1.5'],
  ['Martini-Traditional', '1.2'],
  ['Pina Colada', '2'],
  ['Boot of Beer', '5-6'],
  ['Cosmopolitan', '1.3'],
  ['Margarita', '1.7'],
  ['Gin & Tonic', '1.6'],
  ['Manhattan', '2.5'],
  ['Screwdriver', '1.3'],
  ['Mojito', '1.3'],
  ['Long Island', '1.5-4'],
  ['Lemon Drop', '2.2'],
  ['Pitcher of Beer', '4-5'],
  ['Dry Martini', '1.4'],
  ['Yard of beer', '5-6'],
  ['Vodka Tonic', '1.3'],
];
// Get the button that opens the modal
//var btn = document.getElementById("review");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("drink-modal-close")[0];

function PopUpModal(clicked_id)
{
    var removeHyphen=clicked_id;
    var imageID=clicked_id;

    imageID = imageID.replace(/-/g, "")
    currentIDDrink = removeHyphen.replace(/-/g, " ");
    modal.style.display = "block";
    document.getElementById("drink-modal-header").innerHTML = currentIDDrink;
    document.getElementById("drink-modal-descriptor").innerHTML = "";
    modalimg.src = "images/container"+imageID+".png";
}

span.onclick = function() {
    modal.style.display = "none";
}

function Reveal() {

  for (i = 0; i < drinks.length; i++) {
    if(currentIDDrink == drinks[i][0])
    {
      document.getElementById("drink-modal-descriptor").innerHTML = drinks[i][1];
      return;
    }
    else{
      document.getElementById("drink-modal-descriptor").innerHTML = "NOT FOUND";
      console.log(drinks[i][0]);
    }
  }

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }