// Matrix Authentication Autofill

// extract key alphabet and number pairs
var key1 = document.getElementsByTagName("TABLE")[1].getElementsByTagName("tr")[4].getElementsByTagName("th");
var key2 = document.getElementsByTagName("TABLE")[1].getElementsByTagName("tr")[5].getElementsByTagName("th");
var key3 = document.getElementsByTagName("TABLE")[1].getElementsByTagName("tr")[6].getElementsByTagName("th");

// divide into one char
var key1_left = key1[0].innerHTML.slice(1,2);
var key1_right = key1[0].innerHTML.slice(3,4);
var key2_left = key2[0].innerHTML.slice(1,2);
var key2_right = key2[0].innerHTML.slice(3,4);
var key3_left = key3[0].innerHTML.slice(1,2);
var key3_right = key3[0].innerHTML.slice(3,4);

// number of rows and columns to search for answers
var search_r0 = parseInt(key1_right, 10) - 1;
var search_r1 = parseInt(key2_right, 10) - 1;
var search_r2 = parseInt(key3_right, 10) - 1;
var search_c = new Array(5);

// convert alphabet to number corresponded to column number
var array_conv = [key1_left, key2_left, key3_left];

for(var i = 0; i < 3; i++) {
  switch(array_conv[i]) {
    case "A":
      search_c[i] = 0;
      break;
    case "B":
      search_c[i] = 1;
      break;
    case "C":
      search_c[i] = 2;
      break;
    case "D":
      search_c[i] = 3;
      break;
    case "E":
      search_c[i] = 4;
      break;
    case "F":
      search_c[i] = 5;
      break;
    case "G":
      search_c[i] = 6;
      break;
    case "H":
      search_c[i] = 7;
      break;
    case "I":
      search_c[i] = 8;
      break;
    case "J":
      search_c[i] = 9;
      break;
  }
}

// Fill your Matrix here!
var matrix = [
  ["X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","X","X","X","X","X"]
];

// search answer
var answer1 = matrix[search_r0][search_c[0]];
var answer2 = matrix[search_r1][search_c[1]];
var answer3 = matrix[search_r2][search_c[2]];

// insert answer
document.getElementsByName("message4")[0].value = answer1;
document.getElementsByName("message5")[0].value = answer2;
document.getElementsByName("message6")[0].value = answer3;


// Setting Tech-chan Popup

var imgpath = chrome.extension.getURL("img/tech-chan.png");

$("BODY").append("<div id='popup-img'></div>");
$("#popup-img").hide();
$("#popup-img").fadeIn(1000, function(){
  setTimeout(function() {
    $("#popup-img").fadeOut(1000);
  }, 1000)
});

$("#popup-img").css({
  "position": "absolute",
  "top": "200px",
  "right": "80px",
  "width": "290px",
  "height":"190px",
  "background-image": "url(" + imgpath + ")",
});
