//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
 $('p').on('click', function (){
   alert('hey!')
 })
}

function frameIt() {
 $('img').on('load', function(){
   $('img').addClass('tasty')
 })
}

function pressIt() {
  $(document).on('keydown', function {
    if(key.which == 83) {
      alert('You pressed the g key')
    }
  })
  // bind a keydown event to the input field of the form that alerts a user when they've pressed the 'g' key.
}

function submitIt() {
  // bind a submit event to the form that alerts "Your form is going to be submitted now.".
}
