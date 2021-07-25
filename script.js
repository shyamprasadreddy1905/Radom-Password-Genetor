function myFunction() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
  for (var i = 1; i <= 8; i++) { 
    var char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }
  document.getElementById("password").innerHTML = pass;
}