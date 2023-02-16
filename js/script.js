document.getElementById("button1").addEventListener("click",genPassword)
document.getElementById("button2").addEventListener("click",copyPassword)

//Generate random passwords
function genPassword() {
  var chars = "abcdefghijklmnopqrstuvwxyz"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789"+"!_@#$&";
  var passwordLength = document.getElementById("length").value;
  var password = "";

  if(!passwordLength) {
    var passwordLength = 4;
  }

  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  document.getElementById("password").value = password;

}

//Copy the generated password to clipboard.
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
