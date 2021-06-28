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
