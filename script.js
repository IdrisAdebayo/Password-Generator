// Array of special characters to be included in password
var specialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','<','>','?'];

// Array of numeric characters to be included in password
var numericCharacters = ['1','2','3','4','5','6','7','8','9','0'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



function generate(){

  //set password length/complexity
  let complexity = document.getElementById("slider").value;

  //possible password values
  const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  //create for loop to choose password characters

  for (var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //Add password to textbox/display area
  document.getElementById("display").value = password
}

generate();


