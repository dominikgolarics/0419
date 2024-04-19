function email() {
  var nev = document.getElementById("nev").value;
  var ev = document.getElementById("ev").value;
  console.log(nev)
  const tomb = nev.split(" ")
  var nev1 = tomb[0].substring(0,3) 
  var nev2 = tomb[1].substring(0,3) 
  var ev0 = ev.substring(3,4)
  var email = nev1+nev2+ev0+"@duck.com"
  var kiir = document.getElementById("generalt")
  kiir.textContent=email
  console.log(email)
  }
