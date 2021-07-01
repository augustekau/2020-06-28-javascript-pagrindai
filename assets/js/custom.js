//Kintamuju skaiciavimas.
//var suteikiame varda ir reiksme, tuomet galime ji iskviesti pop up table parasant alert bei var pavadinima
//var = variable (angl.) kintamasis

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

//////////////////////////////////////////
//array???

var petras = [0, "Labas lietuva", 2, 3, [1, 2, 3]];

//console.log( petras[1] );

//////////////////////////////////////////
//Eventas skirtas issaukti reakcija paspaudus mygtuka
//1. suteikiam kintamajam reiksme

var pasisveikinimas = "Labas Lietuva!";

//2. apsirasau funkcija, kas noriu kad atsitiktu SVARBU, funkcija PRIVALO buti su kintamaisiais (kad ir x)
// pvz zemiau sakom kad kuriam f-ja pavadinimu kaunas Lietuva, ir kad ji turetu issaukti pop up. kas bus pop-ip table- nustatom pasirinke kintamaji
function kaunasLietuva(x) {
  console.log(x);
  alert(x);
}
//3. issaukiam funkcija (alert)  pasakom kad suransk elementa su id kvietejas, kai ji paspausiu (onclick)veiksas bus lygus fjai
//kaunasLietuva su kintamuoju pasisveikinimas
document.getElementById("kvietejas").onclick = function () {
  kaunasLietuva(pasisveikinimas);
};

//tada naudojant ta pacia function galime issaukti var blocka petras. kadangi norint kad butu pop up atnaujinus web page
//kazko papildomo rasyti nereikia, tiesiog ja paleisti, ir bus alert - kas jau aprasyta pradinej f-joj

//kaunasLietuva(petras);

//TEST BUTTON
// 1.
var testuojam;
testuojam = 1;
testuojam += 1;

// 2.
function testButton(x) {
  alert(x);
}
// 3.
document.getElementById("test").onclick = function () {
  testButton(testuojam);
  //alert(testuojam);
};

//TEST BUTTON 2
//1.
var test2 = "antras testas";
//alert(test2);

//2.
function antras(x) {
  alert(x);
}
//3.
document.getElementById("bandom2").onclick = function () {
  antras(test2);
};

// ////////////////
// KINTAMUJU PERDAVIMAS
//

// 1.1. apsirasau f-ja
// 1.2. suteikiam kintamajam reiksme ir sakau kad kintamasis yra reiksme irasyta i input fielda
// svarbu, kad imtu kintamaji pagal tai, ka irasau i input, turiu var ideti i funkcija

// function perku() {
//   var kiekis = document.getElementById("kiekis").value;
//   alert("Jus sekmingai pridejote " + kiekis + " preke i savo krepseli");
//   alert(kiekis);
// }

// // // 2. paleidziu funkcija paspaudus mygtuka
// document.getElementById("pirkti").addEventListener("click", perku);

////////////////////
// KINTAMAJI perkelti i HTML ir keisti teksta (viskas is naujo)
// 1. pasakau, kad as noriu kad funkcija pasileistu paspaudus mygtuka

document.getElementById("pirkti").addEventListener("click", perku);

// 2. Suteikiam kintamajam reiksme ir parasom kaip ji keisis priklausimai nuo irasyto skaiciaus

function perku() {
  var kiekis = document.getElementById("kiekis").value;
  // pridedu kintamaji,
  var error = document.getElementById("kiekis");
  //pridedu kintamaji, kuris keis zodi prekes. jei nesurasau jokiu ifu, kintamasis bus lygu prekes
  var zodis = "prekes";
  //tuomet nustatome prie kokiu input reiksmiu kintamasis 'zodis' keisis

  // paleidus funkcija klase visada bus removinta, kol neuzdesime, kad add
  error.classList.add("red");

  //tuomet nustatome prie kokiu input reiksmiu kintamasis 'zodis' keisis
  if (kiekis % 10 == 1) {
    zodis = "prekę";
  }
  if ((kiekis > 10 && kiekis < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }
  // pasakom kad paleistu veiksma, kad atsirastu tekstas html, kadangi as negaliu priskirti funkcijos vardo, todel dedu i funkcijos vidu
  document.getElementById("messages").innerHTML =
    "Jūs sėkmingai pridėjote " + kiekis + " " + zodis + "  į savo krepšelį!";

  // // UZDUOTIS paskaitos metu
  if (kiekis > 100) {
    document.getElementById("messages").innerHTML =
      "Jusu pasirinktas prekiu kiekis yra didesnis nei leistinas";
  }

  if (kiekis < 1) {
    document.getElementById("messages").innerHTML =
      "Pasirinktas per mazas kiekis";
  }

  if (kiekis >= 1 && kiekis < 101) {
    error.classList.remove("red");
  }
}

// /////////// RESET mygtukas

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  document.getElementById("kiekis").value = 1;
}
