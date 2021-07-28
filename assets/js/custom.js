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
// 1 budas (nenuima red borderop)

// document.getElementById("reset").addEventListener("click", reset);
// function reset() {
//   var error = (document.getElementById("kiekis").value = 1);
// }

// 2 budas (reload function)

document.getElementById("reset").addEventListener("click", reset);
function reset() {
  location.reload();
}

/////////////////////////////////////////////////////////////////////////////////////////////
// 2021.07.01 CLASS WORK

var i = 0;

while (i < 10) {
  // console.log(i);
  i++;
}

i = 0;

do {
  // console.log("Skaicius yra: " + i);
  i++;
} while (i < 10);

var petras = [5, 6, 7, 8, 9];

// console.log(petras[0]);

for (let i = 0; i < petras.length; i++) {
  // console.log("Masyvo petras indeksas: " + petras[i]);
}
/////////////////////////////////////////////////////////
// masyvas
const informacija = [
  {
    salis: "Letuva",
    miestas: "Kaunas",
    spalva: "Zalia",
    data: "2021-03-03",
    kiekis: "29",
  },
  {
    salis: "Ispanija",
    miestas: "Madridas",
    spalva: "Raudona",
    data: "2021-02-03",
    kiekis: "7",
  },
  {
    salis: "Portugalija",
    miestas: "Lisabona",
    spalva: "Geltona",
    data: "2021-01-03",
    kiekis: "101",
  },
  {
    salis: "Italija",
    miestas: "Roma",
    spalva: "Melyna",
    data: "2021-05-03",
    kiekis: "27",
  },
];

// matosi ir var ir reiksmes
// for (let duomenys in informacija) {
//   console.log(informacija[duomenys]);
// }

// Masyve pakeisti viena reiksme i kita (08.07.2021)

informacija[1]["salis"] = "Kolumbija";
informacija[3]["spalva"] = "Purple";

// matosi tik reiksmes

for (let duomenys in informacija) {
  console.log(
    informacija[duomenys]["salis"],
    informacija[duomenys]["miestas"],
    informacija[duomenys]["spalva"],
    informacija[duomenys]["data"],
    informacija[duomenys]["kiekis"]
  );
}

// Masyve pakeisti viena reiksme i kita  (08.07.2021)

// informacija[1]["salis"] = "Kolumbija";
// informacija[3]["spalva"] = "Purple";
// console.log(informacija);

// antras budas su dviem ciklais???????????

// UZDUOTIS Sukelti duomenis i lentele

let html = "";

for (let indeksas in informacija) {
  html += "<tr>";
  for (let indeksas2 in informacija[indeksas]) {
    html += "<td>" + informacija[indeksas][indeksas2] + "</td>";
  }
  html += "</tr>";
}

document.getElementById("lentelesVidus").innerHTML = html;

// UZDUOTIS kad parodyti lentele paspaudus Rodyti + pakeisti mygtuko teksta

document.getElementById("rodyti").addEventListener("click", rodom);

function rodom() {
  let lentele = document.getElementById("lentele");
  if (lentele.classList.contains("pasleptaLentele")) {
    lentele.classList.remove("pasleptaLentele");
    document.getElementById("rodyti").innerText = "Slėpti";
  } else {
    lentele.classList.add("pasleptaLentele");
    document.getElementById("rodyti").innerText = "Rodyti";
  }
}
// toggle???????????????????

// //////
// 02.07.2021 SWITCH FUNKCIJA galima naudoti vietoje if +, galim nustatyti defaultine kas bus jei kintamasis neigis jokios aprasytos reiksmes

// let skaicius = 2;

// switch (skaicius) {
//   case 1:
//     alert("skaicius 1");
//     break;

//   case 2:
//     alert("skaicius 2");
//     break;

//   case 3:
//     alert("skaicius 3");
//     break;

//   default:
//     alert("error");
// }

// UZDUOTIS skaiciu, esanciu masyve suma
// be ciklo

// document.getElementById("skaiciuoti").onclick = function () {
//   const add = (arr) => arr.reduce((a, b) => a + b, 0);

//   var arr = [1, 2, 3, 6, 1, 5, 8, 1, 5, 4, 8, 2, 3];
//   var sum = add(arr);

//   alert(sum);
// };

// su ciklu
document.getElementById("skaiciuoti").onclick = function () {
  var skaiciuSuma = [1, 2, 3, 6, 1, 5, 8, 1, 5, 4, 8, 2, 3];

  var total = 0;

  for (let i = 0; i < skaiciuSuma.length; i++) {
    total += skaiciuSuma[i];
  }

  document.getElementById("sum").innerHTML = total;
};

// 05.07.2021 UZDUOTIS

// Paprastesnis variantas

// document.getElementById("pasirink").onclick = function () {
//   let skaicius = document.getElementById("pasirinkimas").value;
//   // alert(skaicius);
//   document.getElementById("pasirinkimoRezultatas").innerHTML =
//     "Jusu pasirinkimas " + skaicius;
// };

// Ta pati uzduotis su SWITCH

// document
//   .getElementById("pasirink")
//   .addEventListener("click", parodytiPasirinkima);

// function parodytiPasirinkima() {
//   let skaicius = document.getElementById("pasirinkimas").value;
//   switch (skaicius) {
//     case "1":
//       document.getElementById("pasirinkimoRezultatas").innerHTML =
//         "PASIRINKAI " + skaicius;
//       break;

//     case "2":
//       document.getElementById("pasirinkimoRezultatas").innerHTML =
//         "PASIRINKAI " + skaicius;
//       break;

//     case "3":
//       alert("skaicius 3");
//       break;

//     default:
//       alert("error");
//   }
// }
// ////////////////////////////////////
//     JQUERY

jQuery(document).ready(function () {
  jQuery("#jquery").addClass("raudona");
  jQuery("#jquery").click(function () {
    alert("paspaudimas");
  });
});

// /////////////////////////////////////////////////////////////////////////////////
// 07.07.2021 Sukurti select metoda su jQuery

jQuery("#pasirinkSpalva").change(function () {
  let spalva = jQuery("#pasirinkSpalva").val();
  alert("Pasirinkta spalva " + spalva);
  jQuery(".rodytiSpalva").html("Pasirinkta spalva " + spalva);
});

// UZDUOTIS padaryti select su switch naudojant jQuery (is 05.07.2021)

// jQuery(document).ready(function () {
//   let skaicius = "#pasirinkimas".value;
//   switch (skaicius) {
//     case "1":
//       document.getElementById("pasirinkimoRezultatas").innerHTML =
//         "PASIRINKAI " + skaicius;
//       break;

//     case "2":
//       document.getElementById("pasirinkimoRezultatas").innerHTML =
//         "PASIRINKAI " + skaicius;
//       break;

//     case "3":
//       alert("skaicius 3");
//       break;

//     default:
//       alert("error");
//   }
//   jQuery("#pasirinkimoRezultatas").append(skaicius);
// });

// // Dinamine nuoroda (galime ideti belenkoki elementa su JS / galima naudoti vietoje innerHTML)
// jQuery("#elementasIntegracijai").append(
//   '<div class="integruotas"><a href="#" class="integruotaNuoroda">NUORODA </a></div>'
// );
// jQuery(".integruotaNuoroda.").click(function () {
//   alert("Paspaudimas");
// });

// //  is Viliaus su masyvais

// jQuery(document).ready(function () {
//   jQuery(duomenys).each(function (indeksas, reiksme) {
//     jQuery(reiksme).each(function (indeksas, reiksme) {
//       console.log(reiksme["adresas"]);
//     });
//   });
// });
////////////////////////////////////////////////////////////////////////////////////
// 08.07.2021 UZDUOTIS sukurti lentele ir perkelti i ja ciklo duomenis jQuery pagalba

// 1. sukurti cikla

const jqinformacija = [
  {
    salis: "Letuva",
    miestas: "Kaunas",
    spalva: "Zalia",
    data: "2021-03-03",
    kiekis: "29",
  },
  {
    salis: "Ispanija",
    miestas: "Madridas",
    spalva: "Raudona",
    data: "2021-02-03",
    kiekis: "7",
  },
  {
    salis: "Portugalija",
    miestas: "Lisabona",
    spalva: "Geltona",
    data: "2021-01-03",
    kiekis: "101",
  },
  {
    salis: "Italija",
    miestas: "Roma",
    spalva: "Melyna",
    data: "2021-05-03",
    kiekis: "27",
  },
];
// 2. atvaizduoti cikla lenteleje (su JS)

// declare html variable (a string holder):
var html2 = "";
for (let jqindeksas in jqinformacija) {
  // add opening <tr> tag to the string:
  html2 += "<tr>";
  for (let jqindeksas2 in jqinformacija[jqindeksas]) {
    // add <td> elements to the string:
    html2 += "<td>" + jqinformacija[jqindeksas][jqindeksas2] + "</td>";
  }
  // add closing </tr> tag to the string:
  html2 += "</tr>";
}
//append created html to the table body:
jQuery("#jqlentelesVidus").append(html2);

// UZDUOTIS susikurti masyva

const masyvas = [
  {
    klientas: "Adomaviciaus imone",
    kodas: "1000",
    data: "2020.06.20",
    produktas: "Nesiojamasis kompiuteris",
    kaina: "1499",
    papildoma_informacija: "",
  },
  {
    klientas: "UAB Kesko Senukai",
    kodas: "1001",
    data: "2020.06.21",
    produktas: "Televizorius",
    kaina: "800",
    papildoma_informacija: "Reikalingas pristatymas",
  },
  {
    klientas: "UAB Simplea",
    kodas: "1002",
    data: "2020.06.22",
    produktas: "Telefonas",
    kaina: "299",
    papildoma_informacija: "",
  },
  {
    klientas: "UAB 5 Kontinentai",
    kodas: "1003",
    data: "2020.06.23",
    produktas: "Plansete",
    kaina: "450",
    papildoma_informacija: "",
  },
];

// 1.perkelti duomenys su JS

// var html2 = "";
// for (let jqindeksas in masyvas) {
//   // add opening <tr> tag to the string:
//   html2 += "<tr>";
//   for (let jqindeksas2 in masyvas[jqindeksas]) {
//     // add <td> elements to the string:
//     html2 += "<td>" + masyvas[jqindeksas][jqindeksas2] + "</td>";
//   }
//   // add closing </tr> tag to the string:
//   html2 += "</tr>";
// }
// //append created html to the table body:
// jQuery("#jqlentelesVidus2").append(html2);

// 2.perkelti duomenys su jQuery

var lentelesBody = jQuery("#jqlentele tbody");

jQuery.each(masyvas, function (i, r) {
  var tr = jQuery("<tr>"); //sukuriame html elementa (1)
  jQuery.each(r, function (i, k) {
    jQuery("<td>").html(k).appendTo(tr);
  });
  jQuery("#jqlentelesVidus2").prepend(tr); //apend pagalba mes ta html elementa atvaizduojame (2)
  // lentelesBody.append(tr); sitas ikelia cikla i visas lenteles
});
// append - ideda koda zemiau esancio turinio
// prepend - ideda koda auksciau esancio turinio
// html - pakeicia visa esanti turini numatytu
// after - ikelia po pries kazkoki elementa (reikia suteikti tam elementui klase)
// before - ikelia info pries kazkoki elementa (reikia suteikti tam elementui klase)

///////////////////////////////////////////////////////////////////////////////////////
//// 15.07.2021
//// 1 UZDUOTIS

var vardas = "Jonas";
pavarde = "Jonaitis";
metai = "1995";

// alert("As esu " + vardas + " " + pavarde + " gimes " + metai);
document.getElementById("js-testai").innerHTML =
  "As esu " + vardas + " " + pavarde + " gimes " + metai;

//// 2 UZDUOTIS
var roundNumber1 = 5.7;
//apvalina skaiciu i virsu
document.getElementById("round-number").innerHTML = Math.round(roundNumber1);
//apvalina skaiciu i apacia
document.getElementById("round-number2").innerHTML = Math.floor(roundNumber1);

//// 3 UZDUOTIS

function randomSkaicius(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//// 4 UZDUOTIS

var skaicius1 = randomSkaicius(0, 4);
var skaicius2 = randomSkaicius(0, 4);

let skaiciuoti = skaicius1 / skaicius2;

document.getElementById("skaiciuoti1").addEventListener("click", dalyba);
function dalyba() {
  if (skaiciuoti == 0) skaiciuoti = "Dalyba is 0 negalima";
  document.getElementById("4uzduotis").innerHTML =
    skaicius1 + " / " + skaicius2 + " = " + skaiciuoti;
}

//// 5 UZDUOTIS
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var number1 = random(0, 25);
var number2 = random(0, 25);
var number3 = random(0, 25);

let average =
  number1 +
  number2 +
  number3 -
  Math.min(number1, number2, number3) -
  Math.max(number1, number2, number3);

document.getElementById("5uzduotis").innerHTML =
  number1 + " , " + number2 + " , " + number3 + "   Average " + average;

//// 6 UZDUOTIS

// Generate random number

function generateRandomNumber(max) {
  return Math.random() * max;
}

let value4 = generateRandomNumber(10);
document.getElementById("6uzduotis").innerHTML = value4;

//// 7 UZDUOTIS
var seven_skaicius1 = randomSkaicius(-10, 10);
var seven_skaicius2 = randomSkaicius(-10, 10);
var seven_skaicius3 = randomSkaicius(-10, 10);

// FIRST NUMBER
if (seven_skaicius1 < 0) {
  document.getElementById("7_1uzduotis").classList.add("raudona7");
}
if (seven_skaicius1 == 0) {
  document.getElementById("7_1uzduotis").classList.add("melyna7");
}
if (seven_skaicius1 > 0) {
  document.getElementById("7_1uzduotis").classList.add("zalia7");
}

// SECOND NUMBER
if (seven_skaicius2 < 0) {
  document.getElementById("7_2uzduotis").classList.add("raudona7");
}
if (seven_skaicius2 == 0) {
  document.getElementById("7_2uzduotis").classList.add("melyna7");
}
if (seven_skaicius2 > 0) {
  document.getElementById("7_2uzduotis").classList.add("zalia7");
}

// THIRD NUMBER
if (seven_skaicius3 < 0) {
  document.getElementById("7_3uzduotis").classList.add("raudona7");
}
if (seven_skaicius3 == 0) {
  document.getElementById("7_3uzduotis").classList.add("melyna7");
}
if (seven_skaicius3 > 0) {
  document.getElementById("7_3uzduotis").classList.add("zalia7");
}
document.getElementById("7_1uzduotis").innerHTML = seven_skaicius1;
document.getElementById("7_2uzduotis").innerHTML = seven_skaicius2;
document.getElementById("7_3uzduotis").innerHTML = seven_skaicius3;

//// 8 UZDUOTIS

var eight_skaicius = randomSkaicius(5, 3000);

if (eight_skaicius <= 1000) {
  discount = 0;
}

if (eight_skaicius > 1000 && eight_skaicius <= 2000) {
  discount = 0.03;
}

if (eight_skaicius > 2000) {
  discount = 0.04;
}

document.getElementById("8uzduotis").innerHTML =
  "Jus perkate " +
  eight_skaicius +
  " vnt., kuriu kaina " +
  eight_skaicius * (1 - discount) +
  " EUR";

//// 9 UZDUOTIS

///////////////////////////////////////////////////////////////////////////////////////
//// 15.07.2021
//// 1 UZDUOTIS
// a)
let text = "";

for (let i = 0; i < 400; i++) {
  text += "*";
}
document.getElementById("ciklai_1uzduotis").innerHTML = text;

// a)
// let text1 = "";
// let counter = 0;

// for (let i = 0; i < 400; i++) {
//   if (counter == 50) {
//     text1 += "<br>";
//     // paskaiciavus jis vel nusinulina, kad jis kartotusi kas 50 ciklu
//     counter = 0;
//   }
//   text1 += "*";
//   counter++;
// }
// document.getElementById("ciklai_1b_uzduotis").innerHTML = text1;

let text1 = "";

for (let i = 0; i < 400; i++) {
  if (i != 0 && i % 50 == 0) {
    text1 += "<br>";
  }
  text1 += "*";
}
document.getElementById("ciklai_1b_uzduotis").innerHTML = text1;

// // 2 UZDUOTIS

let text2 = "";
let task_two = 0;
let higher = 0;

for (let i = 0; i < 300; i++) {
  task_two = randomSkaicius(0, 300);
  //suskaiciuoti didesnius nei 150 (tam papildomai susikurtas papildomas variable)
  if (task_two > 150) higher++;
  //paraudoninti didesnius nei 275
  if (task_two > 275) {
    text2 += '<span class="raudona7">' + task_two + "</span> ";
  } else {
    //jei nedidesni neo 275 - tiesiog atprintinti reiksmes
    text2 += task_two;
  }
  // padaryti taip, kad visos reiksmes iki 299 butu atskirtos kableliu ir tarpu. iki 299 todel, kad po paskutines reiksmes kablelio nebutu
  if (i != 299) text2 += ", ";
}

document.getElementById("ciklai_2uzduotis").innerHTML = text2;
document.getElementById("ciklai_2a_uzduotis").innerHTML = higher;

// // 3 UZDUOTIS

let text3 = "";
let kablelis = ", ";
let skaiciai3000 = 0;
let dalyba77 = 77;

// i suteikia reiksmes nuo 1 iki 3000
for (let i = 1; i < 3000; i++) {
  // kintamajam skaiciai suteikiam reiksmes gautas visus i (skaiciai nuo 0 iki 3000) padalinus is 77
  skaiciai3000 = i / dalyba77;
  // number isInteger - rodyti skaicius, kurie po dalybos yra be kablelio
  if (Number.isInteger(skaiciai3000)) {
    // isskiriam skaicius kableliu
    if (i != dalyba77) {
      text3 += kablelis;
    }
    // spausdinam skaicius po dalybos, be kablelio
    text3 += i;
  }
  //if (i == 3000) text3 += " . ";
}

document.getElementById("ciklai_3uzduotis").innerHTML = text3;

// // 4 UZDUOTIS

let text4 = "";
let kvadratas = 0;

for (let i = 0; i < 100; i++) {
  if (kvadratas == 10) {
    text4 += "<br>";
    kvadratas = 0;
  }
  // if (kvadratas == 9) {
  //   text4 += '<span class="raudona7">' + kvadratas + "</span> ";
  //   kvadratas = 0;
  // }
  text4 += "*";
  kvadratas++;
}
document.getElementById("ciklai_4uzduotis").innerHTML = text4;

// 5  UZDUOTIS

// zaideju taskai partijos metu
let benas = 0;
let jovita = 0;
//zaidejo tasku suma per kelias partijas
let benorezultatas = 0;
let jovitosrezultatas = 0;
//kintamasis rezultatui parodyti
let text5 = "";
//kintamasis sukurtas tam, kad sustabdytu cikla, kuomet surinktu tasku suma bus didesne nei 222
let ended = false;

//i pasirenkam 100, nes ciklo sukti nereikes daugiau nei 100 kartu kol zaidejas surinks 222 taskus
for (let i = 0; i <= 100; i++) {
  //tam kad ciklas sustotu po 222
  if (ended) break;
  //zaidejai gauna random taskus
  benas = randomSkaicius(10, 20);
  jovita = randomSkaicius(5, 25);
  // kad neridentu 12 i
  if (benas == 12 || jovita == 12) {
    document.getElementById("ciklai_51uzduotis").innerHTML +=
      i + 1 + " partija: Iskrito 12 <br>";
    //jei isridena 12, ciklas baigiasi  sioje vietoje (neprisideda prie sumos ir suka random skaicius is naujo)
    continue;
  }

  //sudedam tju gautus random taskus +=
  benorezultatas += benas;
  jovitosrezultatas += jovita;

  // kad matytume kiek tasku surinko kaskart metant kauliuka. kadangi reiksmiu daugiau nei 1, rasome +=, kad parodytu visas
  document.getElementById("ciklai_51uzduotis").innerHTML +=
    i + 1 + " partija: " + " Benas " + benas + " Jovita " + jovita + "<br>";

  // jei kuris zaidejas surenka 222, ciklas baigiasi
  if (benorezultatas >= 222 || jovitosrezultatas >= 222) {
    ended = true;
    // jei benas surinko daugiau - irasom teksta ir rezultata
    if (benorezultatas >= 222) {
      text5 = "Benas surinkes " + benorezultatas;
    }
    //jei benas surinko daugiau - irasom teksta ir rezultata
    else {
      text5 = "Jovita surinkus " + jovitosrezultatas;
    }
  }
}

document.getElementById("ciklai_5uzduotis").innerHTML = "LAIMETOJAS: " + text5;

// 6  UZDUOTIS su vinimis

let mazasSmugis = 0;
let smugiuKartai = 0;
// let bendrasSmugiuKiekis;
let text6 = "";

for (let i = 0; i < 5; i++) {
  let ended2 = false;
  //kodel sita kintamaji reikia perkelti i visu? 1:35 min
  let smugiuSuma = 0;
  for (smugiuKartai = 1; smugiuKartai <= 20; smugiuKartai++) {
    if (ended2) break;
    mazasSmugis = randomSkaicius(5, 20);
    smugiuSuma += mazasSmugis;
    if (smugiuSuma >= 85) {
      ended2 = true;
      if (smugiuSuma >= 85) {
        text6 +=
          "Kalimu skaicius " + (i + 1) + " viniai: " + smugiuKartai + "<br>";
      }
    }
    // document.getElementById("ciklai_6uzduotis").innerHTML +=
    //   "Atskiro smugio gylis mm " + mazasSmugis + "<br>";
    // document.getElementById("ciklai_6uzduotis").innerHTML +=
    //   "Smugiu suma mm: " + smugiuSuma + "<br>";
  }
  //???? kaip suskaiciuoti bendra skaiciu?
  // bendrasSmugiuKiekis += smugiuKartai;
  // text6 += "Kalimu skaicius : " + bendrasSmugiuKiekis;
}
// bendrasSmugiuKiekis += smugiuKartai;
// text6 += "Kalimu skaicius : " + bendrasSmugiuKiekis;
document.getElementById("ciklai_6uzduotis").innerHTML += text6;

let didelisSmugis = 0;
let dideliuSmugiuKartai = 0;
let tikimybe = 0;
// let bendrasSmugiuKiekis;
let text6b = "";
// let ended2b = false;
// let dideliuSmugiuSuma = 0;

for (let i = 0; i < 5; i++) {
  let ended2b = false;
  let dideliuSmugiuSuma = 0;
  for (
    dideliuSmugiuKartai = 1;
    dideliuSmugiuKartai < 20;
    dideliuSmugiuKartai++
  ) {
    if (ended2b) break;
    didelisSmugis = randomSkaicius(20, 30);
    tikimybe = randomSkaicius(1, 2);

    // if (tikimybe == 1) {
    //   document.getElementById("ciklai_6buzduotis").innerHTML +=
    //     " nepataike <br>";
    //   //jei isridena 12, ciklas baigiasi  sioje vietoje (neprisideda prie sumos ir suka random skaicius is naujo)
    //   continue;
    // }

    dideliuSmugiuSuma += didelisSmugis;

    if (dideliuSmugiuSuma >= 85) {
      ended2b = true;
      if (dideliuSmugiuSuma >= 85) {
        text6b +=
          "Kalimu skaicius " +
          (i + 1) +
          " viniai: " +
          dideliuSmugiuSuma +
          "<br>";
      }
    }
  }
}

document.getElementById("ciklai_6buzduotis").innerHTML += text6b;

// 7 UZDUOTIS
let el_tevinis = document.querySelector("#ciklai_7uzduotis");
let kvadratoAukstis = el_tevinis.offsetHeight;
let kvadratasPlotis = el_tevinis.offsetWidth;
let islindeKvadraciukai = 0;

i = 0;
while (i < 300) {
  el_tevinis.innerHTML += '<div class = "sukurtas_kvadratelis"></div>';

  let elementas = document.querySelectorAll(".sukurtas_kvadratelis")[i];
  let atsitiktinisVirsus = randomSkaicius(0, 550);
  let atsitiktineKaire = randomSkaicius(0, 550);

  elementas.style.top = atsitiktinisVirsus + "px";
  elementas.style.left = atsitiktineKaire + "px";

  if (
    atsitiktinisVirsus > kvadratoAukstis ||
    atsitiktineKaire > kvadratasPlotis
  )
    islindeKvadraciukai++;
  i++;
}

document.querySelector("#ciklai_7auzduotis").innerHTML +=
  "Uz ribu islinde kvadraciukai " + islindeKvadraciukai;

//////////////////////////////////////////////////////////////////////////////////////////////////
//FUNKCIJOS 26.07.2021

//length
//split()
//replace()
//repeat()
//charAt()
//substr()
//toLowerCase()
//toUpperCase()
//trim()
//startsWith() true / false
//endsWith() true /false
//includes() true /false
//indexOf() search()
//lastIndexOf()

let stringas = "Pavasarį žydi labai daug medžių";

//Apie length
//console.log(stringas.length); //Konsoleje atvaizduojamas kintamojo reiksmes simboliu kiekis

//Apie split
//let stringo_masyvas = stringas.split(' ');

//console.log( stringo_masyvas[4] );

//Apie replace()
//console.log( stringas.replace('žydi', 'atgminsta') );  //Konsoleje atvaizduojamas naujas sakinys su pakeistu zodziu zydi i zodi atgimsta

//Apie repeat()
//console.log( stringas.repeat(1) );

//Apie charAt() Graziname viena simboli is specifiskos pozicijos
//console.log( stringas.charAt(0) );

//Apie substr() Graziname simbolius nuo pirmame parametre nurodytos pozicijos iki antrame parametre nurodyto kiekio
//console.log( stringas.substr(10, 9) );

//Apie toLowerCase()
//console.log( stringas.toLowerCase() );

//Apie toUpperCase()
//console.log( stringas.toUpperCase() );

//Apie trim()
//stringas = '    Pavasarį žydi labai daug medžių         ';

//console.log( stringas.trim() );

//Apie startsWith() true arba false rezultatas
//boolean
//console.log( stringas.startsWith('P') );

//Apie endsWith() auksciau minetos funkcijos priespriesa
//console.log( stringas.endsWith('ų') );

//Apie includes()
//console.log( stringas.includes('v') );

//Apie indexOf()
//console.log(stringas.indexOf('žydi'));

//Apie lastIndexOf()
//console.log(stringas.lastIndexOf('ž'));

// 1 UZDUOTIS

let aktoriausVardas = "Morgan";
let aktoriausPavarde = "Freeman";

console.log(aktoriausVardas.length);
console.log(aktoriausPavarde.length);

if (aktoriausVardas.length < aktoriausPavarde.length) {
  document.querySelector("#funkcijos_1uzduotis").innerHTML +=
    "Trumpesnis stringas " + aktoriausVardas;
} else {
  document.querySelector("#funkcijos_1uzduotis").innerHTML +=
    "Trumpesnis stringas " + aktoriausPavarde;
}

// 2 UZDUOTIS

document.querySelector("#funkcijos_2uzduotis").innerHTML +=
  aktoriausVardas.toUpperCase();

document.querySelector("#funkcijos_2auzduotis").innerHTML +=
  aktoriausPavarde.toLowerCase();

// 3 UZDUOTIS
console.log(aktoriausVardas.charAt(0));
console.log(aktoriausPavarde.charAt(0));

let pirmosRaides = aktoriausVardas.charAt(0) + aktoriausPavarde.charAt(0);

document.querySelector("#funkcijos_3uzduotis").innerHTML += pirmosRaides;

// 4 UZDUOTIS

console.log(aktoriausVardas.substr(3, 5));
console.log(aktoriausPavarde.substr(4, 6));

let trysRaides = aktoriausVardas.substr(3, 5) + aktoriausPavarde.substr(4, 6);

document.querySelector("#funkcijos_4uzduotis").innerHTML += trysRaides;

// 5 UZDUOTIS

let Hollywood = "Once upon a time in Hollywood";

console.log(Hollywood.toLowerCase().replaceAll("o", "*"));

document.querySelector("#funkcijos_5uzduotis").innerHTML +=
  Hollywood.toLowerCase().replaceAll("o", "*");

// 6 UZDUOTIS

var count = (Hollywood.toLowerCase().match(/o/g) || []).length;
console.log(count);

document.querySelector("#funkcijos_6uzduotis").innerHTML += count;

// 7 UZDUOTIS

function balsesOut(sakinys) {
  let sakinysBeBalsiu = sakinys
    .toLowerCase()
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
    .replaceAll("y", "")
    .replaceAll("o", "");
  return sakinysBeBalsiu;
}

let american = "An American in Paris";
let tiffanys = "Breakfast at Tiffany's";
let space = "2001:A Space Odyssey";
let life = "It's a Wonderful Life";

document.querySelector("#funkcijos_7uzduotis").innerHTML +=
  balsesOut(american) +
  "<br>" +
  balsesOut(tiffanys) +
  "<br>" +
  balsesOut(space) +
  "<br>" +
  balsesOut(life);

// 8 UZDUOTIS
// su funkcija

function zodziuTikrinimas(phrase, ilgis) {
  let frazesMasyvas = phrase.split(" ");
  let zodziuCounter = 0;
  for (let i = 0; i < frazesMasyvas.length; i++) {
    if (frazesMasyvas[i].length <= ilgis) zodziuCounter++;
  }
  return zodziuCounter;
}
let fraze =
  "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let fraze2 =
  "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
let patikrinti = zodziuTikrinimas(fraze, 5);
let patikrinti2 = zodziuTikrinimas(fraze2, 5);

document.querySelector("#funkcijos_8auzduotis").innerHTML += patikrinti;
document.querySelector("#funkcijos_8buzduotis").innerHTML += patikrinti2;

// Papildoma uzduotis
raides = "abcdefghijklmnopqrstuvwxyz";
let randomraides = "";
for (var i = 0; i < 3; i++) {
  randomraides += raides.charAt(Math.floor(Math.random() * raides.length));
}
document.querySelector("#funkcijos_papildoma_uzduotis").innerHTML +=
  randomraides;

// /////////
// 28.07.2021 sukurti funkciija, kad textas pildytusi automatiskai, nenaudojant HTML div

function headingas(uzduotis, tema = false, tevinis = ".appended-text") {
  let child = document.querySelector(tevinis);

  if (tema) {
    let klase = tema.replace(" ", "").toLowerCase();

    document.querySelector(tevinis).innerHTML +=
      '<div class="' + klase + '"></div>'; //Kaip ir ankstesneje uzduotyje sukurtas parent elementas uzduociai ir headingai kiekvienai is ju

    child = document.querySelector("." + klase);

    child.innerHTML += "<h1>" + tema + "</h1>";
  }

  child.innerHTML += "<h3>" + uzduotis + "</h3>";

  return "." + child.className;
}
// paleisti funkcija
headingas("Pirma užduotis", "Funkcijos 2021-07-28");

//1 UZDUOTIS

function palyginimas(stringas1, stringas2) {
  if (stringas1.length == stringas2.length) {
    document.querySelector(".pirma-uzduotis").innerHTML += "Stringai vienodi";
  } else if (stringas1.length > stringas2.length) {
    document.querySelector(".pirma-uzduotis").innerHTML +=
      "Pirmas stringas yra ilgesnis";
  } else {
    document.querySelector(".pirma-uzduotis").innerHTML +=
      "Antras stringas yra ilgesnis";
  }
}
let pirmasStringas = "bla bla";
let antrasStringas = "bla bla bla";
palyginimas(pirmasStringas, antrasStringas);

//2 UZDUOTIS

function istorija(a, b, c, d, e) {
  document.querySelector(".antra-uzduotis").innerHTML +=
    "Jūs būsite " +
    a +
    " ir gyvensite " +
    b +
    ". Susituoksite su " +
    c +
    " bei turėsite šunį vardu " +
    d +
    ", o mirsite sulaukę " +
    e +
    " metų. <br>";
}
istorija("1", "2", "3", "4", "80");
istorija("a", "b", "c", "d", "90");
istorija("o", "y", "r", "w", "100");

//3 UZDUOTIS

function HowOldTheDogIs(zmogausMetai) {
  let dogYears = zmogausMetai * 7;
  return dogYears;
}

let suniukoMetai = "Jūsų šuniukui yra " + HowOldTheDogIs(2.5) + " metų";

document.querySelector(".trecia-uzduotis").innerHTML += suniukoMetai;

//4 UZDUOTIS

//pirmas budas

// function converter(varMyles, varKm) {
//   let MylesToKm = varMyles * 1.609;
//   let KmToMyles = varKm * 0.621;
//   if (varMyles > varKm) {
//     document.querySelector(".ketvirta-uzduotis").innerHTML +=
//       varMyles + " mi yra " + MylesToKm + " km <br>";
//   } else {
//     document.querySelector(".ketvirta-uzduotis").innerHTML +=
//       varKm + " km yra " + KmToMyles + " mi <br>";
//   }
// }

// converter(1, 0);
// converter(0, 1);
// converter(0, 12);
// converter(12, 0);

// antras budas

function converter(varSkaicius, varVienetas) {
  let MylesToKm = varSkaicius * 1.609;
  let KmToMyles = varSkaicius * 0.621;
  if (varVienetas == "mi") {
    document.querySelector(".ketvirta-uzduotis").innerHTML +=
      varSkaicius + " mi yra " + MylesToKm + " km <br>";
  } else {
    document.querySelector(".ketvirta-uzduotis").innerHTML +=
      varSkaicius + " km yra " + KmToMyles + " mi <br>";
  }
}

converter(1, "mi");
converter(1, "km");
converter(12, "km");
converter(12, "mi");
