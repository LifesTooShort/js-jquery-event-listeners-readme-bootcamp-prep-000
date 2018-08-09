function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input:first').on('keydown', function() {
    if (let key.which == parseInt('g')) alert('g was pressed');
  });
}


$(document).ready(function(){

frameIt();
getIt();
pressIt();


});
