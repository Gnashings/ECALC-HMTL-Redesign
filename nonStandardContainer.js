// Get the modal
var modal = document.getElementById("drink-modal");
var modalimg = document.getElementById("drink-modal-img");

// Get the button that opens the modal
//var btn = document.getElementById("review");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("drink-modal-close")[0];

function PopUpModal(clicked_id)
{
    //alert(clicked_id);
    modal.style.display = "block";
    alert("CHANGE IMAGE DISPLAY");
}

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }