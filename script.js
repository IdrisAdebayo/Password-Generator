//generate random password
function generate(){

  //set password length/complexity
  let complexity = document.getElementById("slider").value;

  //possible password values
  const values = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let password = "";

  //create for loop to choose password characters

  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //Add password to textbox/display area
  document.getElementById("display").value = password
}
