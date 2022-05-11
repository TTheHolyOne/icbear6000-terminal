const password = "34568";

function passcheck() {
  
if(document.getElementById('pass1').value != password) {
alert('wrong password try again');
return false;
} else if(document.getElementById('pass1').value == password) {
alert('Correct');
}
}