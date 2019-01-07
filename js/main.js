window.onload = function() {
	slideshow();
}
function slideshow() {
	var myIndex = 0;
slideSwitch();

function slideSwitch() {
  var i;
  var x = document.getElementsByClassName("munaSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(slideSwitch, 5000);
}
}
/*
function init() {
 // Get the modal
 var modal = document.getElementById('myModal');

// Puts the image inside the modal 
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Shows the x in the top right corner so the modal can be closed
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
}
*/
/*function dark() {
        if (document.body.style.backgroundColor == 'rgb(255, 255, 255)') {

                document.body.style.backgroundColor = '#333';
        }
        else {
                document.body.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
*/

//Day and night function. When the user clicks the button the website will toggle
//through day and night. Use session storage to make sure the browser knows what
//the user chose so it stays the same on different pages. 
function darker() {
     if ( sessionStorage.getItem('newBackgroundnight') === 'rgb(255, 255, 255)') {        
            sessionStorage.setItem('newBackgroundnight', 'rgb(00, 00, 00)');
            sessionStorage.setItem('cc', '#000000');       
     }
    else if (sessionStorage.getItem('newBackgroundnight') == null || undefined) {
        sessionStorage.setItem('newBackgroundnight', 'rgb(00, 00, 00)');
        sessionStorage.setItem('cc', '#000000');
        
    }
    else if( sessionStorage.getItem('newBackgroundnight') === 'rgb(00, 00, 00)') {
        
        sessionStorage.setItem('newBackgroundnight', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#000000');  
    }
document.body.style.backgroundColor = sessionStorage.getItem('newBackgroundnight');
document.body.style.color = sessionStorage.getItem('cc');

}




