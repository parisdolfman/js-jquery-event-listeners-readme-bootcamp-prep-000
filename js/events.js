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
  $(document).on('keypress', function(n) {
    if (n.which == 71) {
      alert("You pressed the g key.")
    }
  })
}

function submitIt() {
 $('form').on("submit", function() {
   alert('Your form is going to be submitted now.')
 })
}
