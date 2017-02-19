//  file name: functions.js
// Author: Gisselle Morales
// Date: 2.18.17
//
// supporting files: none
function MyFunction() {
  var shade= document.getElementById("shade").value;
  var pink= document.getElementById("pShade").value;
  var nude= document.getElementById("nShade").value;
  var brown= document.getElementById("bShade").value;
  var red= document.getElementById("rShade").value;
  var kind= document.getElementById("kind").value;
  var matte= document.getElementById("matte").value;
  var gloss= document.getElementById("gloss").value;
  var satin= document.getElementById("satin").value;

  console.log();

  if ( true || shade== "pink" && kind== "matte" ) {
      $('#preview').html("<img src='hudalippie.png'>")
      document.getElementById("preText").innerHTML= "Price: $20.00 "
      document.getElementById("preT").innerHTML= "Brand: Huda Beauty "
      console.log ("hello")
  } else if (true || shade== "pink" && kind== "gloss" ) {
      $('#preview').html("<img src='https://www.maybelline.com/~/media/mny/global/face-makeup/bbcream/dream-fresh-bb/maybelline-bb-dream-fresh-bb-skin-perfector-deep-041554282665-c.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade== "pink" && kind== "satin" ) {
      $('#preview').html("<img src='http://some_other_image1.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="nude" && kind=="matte") {
      $('#preview').html("<img src='http://some_other_image2.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="nude" && kind=="gloss") {
      $('#preview').html("<img src='http://some_other_image3.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="nude" && kind=="satin") {
      $('#preview').html("<img src='http://some_other_image4.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="brown" && kind=="matte") {
      $('#preview').html("<img src='http://some_other_image5.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="brown" && kind=="gloss") {
      $('#preview').html("<img src='http://some_other_image6.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="brown" && kind=="satin") {
      $('#preview').html("<img src='http://some_other_image7.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="red" && kind=="matte") {
      $('#preview').html("<img src='http://some_other_image8.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if (shade=="red" && kind=="gloss") {
      $('#preview').html("<img src='http://some_other_image9.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  } else if  (shade=="red" && kind=="satin") {
      $('#preview').html("<img src='http://some_other_image10.jpg'>")
      document.getElementById("preText").innerHTML= "Price:"
      document.getElementById("preT").innerHTML= "Brand:"
  }

}


$(function() {

  $('#subimg').on('click', function(event) {
    event.preventDefault()

    MyFunction()

  })
})
