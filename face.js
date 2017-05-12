//  file name: functions.js
// Author: Gisselle Morales
// Date: 2.18.17
//
// supporting files: none
function MyFunction() {
  var dry= document.getElementById("dskin").value;
  var oil= document.getElementById("oskin").value;
  var comb= document.getElementById("cskin").value;
  var norm= document.getElementById("nskin").value;
  var skin= document.getElementById("skinT").value;
  var kind= document.getElementById("kind").value;
  var pow= document.getElementById("pKind").value;
  var cream= document.getElementById("cKind").value;
  var stick= document.getElementById("sKind").value;
  console.log();

  if (true || skin== "oil" && kind== "pow" ) {
      $('#preview').html("<img src='powderfoundation.png'>")
      document.getElementById("preText").innerHTML= "Price: $28.50"
      document.getElementById("preT").innerHTML= "Brand: Bare Minerals"
      console.log ("hello")
  } else if ( skin== "oil" && kind== "cream") {
      $('#preview').html("<img src='https://www.maybelline.com/~/media/mny/global/face-makeup/bbcream/dream-fresh-bb/maybelline-bb-dream-fresh-bb-skin-perfector-deep-041554282665-c.jpg'>")
      document.getElementById("preText").innerHTML= "Price:1"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if  (skin=="oil" && kind== "stick") {
      $('#preview').html("<img src='http://some_other_image1.jpg'>")
      document.getElementById("preText").innerHTML= "Price:2"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="dry" && kind=="pow") {
      $('#preview').html("<img src='http://some_other_image2.jpg'>")
      document.getElementById("preText").innerHTML= "Price:3"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin==="dry" && kind==="cream") {
      $('#preview').html("<img src='http://some_other_image3.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="dry" && kind=="stick") {
      $('#preview').html("<img src='http://some_other_image4.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="comb" && kind=="pow") {
      $('#preview').html("<img src='http://some_other_image5.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="comb" && kind=="cream") {
      $('#preview').html("<img src='http://some_other_image6.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="comb" && kind=="stick") {
      $('#preview').html("<img src='http://some_other_image7.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="norm" && kind=="pow") {
      $('#preview').html("<img src='http://some_other_image8.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="norm" && kind=="cream") {
      $('#preview').html("<img src='http://some_other_image9.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if ( skin=="norm" && kind=="stick") {
      $('#preview').html("<img src='http://some_other_image10.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else {
    alert("Please enter valid input")
  }

}

$(function() {

  $('#subimg').on('click', function(event) {
    event.preventDefault()

    MyFunction()

  })
})
