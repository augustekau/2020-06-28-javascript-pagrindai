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
