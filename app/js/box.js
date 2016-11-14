var box = document.getElementById('myBox');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    box.style.display = "block";
}

span.onclick = function() {
   box.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == box) {
        box.style.display = "none";
    }
}