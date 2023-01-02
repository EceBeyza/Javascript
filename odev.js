// // let user = prompt("Lütfen isminizi giriniz :)");
// // let newDate = new Date();
// // if (user.length > 0) {
// //     let content = document.querySelector(".content")
// //     let card = document.createElement("div")
// //     content.appendChild(card)
// //     card.className = "card-body text-center fs-3"
// //     card.style.color = "#713528"
// //     card.innerHTML = `<p>Merhaba ${user} Hoşgeldin :)<p> <br>
// //      <small class = "mis">
// //     Sitemizde bir çok faydalanabileceğin bilgiyi edinebilirsin.</small> <br> Şuanki tarih: ${newDate}` 
// // }
// // else {
// //     alert("Lütfen isminizi belirtiniz")

// // } 

// let click1 = document.querySelector(".degis");
// click1.addEventListener("click", action)

// function action() {

//     this.style.background == "red" ? this.style.background = "black" : this.style.background = "red"
// }

// function deneme(a, b) {
//     let sonuc = a + b;
//     return sonuc;
// }
// let Donensonuc = console.log(deneme(3, 4))

// const deneme1 = (name) => console.log(`Merhaba ${name} `)
// deneme1("ahmet")


// let value = localStorage.getItem("value") ? Number(localStorage.getItem("value")) : 0;
// let textY = document.querySelector(".textY");
// let b1 = document.querySelector(".b1");
// let b2 = document.querySelector(".b2");
// textY.textContent = value;

// b1.addEventListener("click", run1);
// function run1() {

//     textY.innerHTML = value += 1;
//     textY.style.color = "#AD9B97"
//     localStorage.setItem("value", value)
// }
// b2.addEventListener("click", run2)
// function run2() {


//     textY.innerHTML = value -= 1;
//     localStorage.setItem("value", value)
// }

// let form = document.querySelector("#userDeneme");
// // formu aldım çünkü kod tüm formu taşıyor sadece buttonu ve ya inputu değil.

// form.addEventListener("submit", defaultt)

// function defaultt(info) {
//     info.preventDefault();
// let getInfoInput = document.querySelector("#input1")
// localStorage.setItem("user",getInfoInput.value)

// }


// // let click = document.querySelector(".gonder")
// // click.addEventListener("click", addInfo)
// // function addInfo() {
// //    let inputDeger = document.getElementById("input1").value;
// //    document.querySelector("#myP").innerHTML= ("Değerimiz:" + " " + inputDeger );

// // }


const showAlert = (message, style, tittle) => `<div class="alert alert-${style} alert-dismissible fade show" role="alert">
<strong>${tittle}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

let form = document.querySelector("#bigForm");
form.addEventListener("submit", run)
function run(event) {
    event.preventDefault()
    let writtenName = document.querySelector("#username");
    let writtenScore = document.querySelector("#score");
    if (writtenName.value && writtenScore.value) {
        addItems(writtenName.value, writtenScore.value)
        writtenName.value = "";
        writtenScore.value = "";
        let first = document.querySelector(".first")
        first.innerHTML = showAlert("Başarili bir şekilde eklendi.", "success", "TEBRİKLER!");
    } else {
        let first = document.querySelector(".first")
        first.innerHTML = showAlert("Hatali bir bilgi girdiniz!", "danger", "DİKKAT!");


    }
}


function addItems(userName, score) {
    let secondDiv = document.querySelector(".secondDiv")
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center"
    li.innerHTML = `${userName}`
    let ul = document.createElement("ul");
    ul.className = "list-group"
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill "
    span.innerHTML = `${score}`
    ul.append(li);
    li.appendChild(span);
    secondDiv.append(ul);

}

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", runDelete)
function runDelete() {
    let dontShow = document.querySelector(".list-group")
    dontShow.remove();
}

let bilgiler = [];

let form1 = document.querySelector("#firstBox");
form1.addEventListener("submit", engelle)
function engelle(event) {
    event.preventDefault();
    const textAll1 = document.querySelector("#text1");
    const textAll2 = document.querySelector("#text2");
    const textAll3 = document.querySelector("#text3");
    if(textAll1.value && textAll2.value && textAll3.value) {

        altaEklemek(textAll1.value,textAll2.value,textAll3.value);
        addStorage(textAll1.value,textAll2.value,textAll3.value)

        textAll1.value="";
        textAll2.value="";
        textAll3.value="";
        
    } else {
        alert(` Bilgi girmeniz gerek!!`)
    }

}
function addStorage(alls,alls2,alls3) {
   checkStorages();
   bilgiler.push(alls,alls2,alls3);
   localStorage.setItem("bilgiler", JSON.stringify(bilgiler))
}

function checkStorages() {
    if(localStorage.getItem("bilgiler")===null){
        bilgiler=[];
    }else{
        todos= JSON.parse(localStorage.getItem(bilgiler))
        
    }
}

function altaEklemek(username, surname, age) {
    let altBilgi = document.querySelector(".thePlaceWhichYouPut")
    // altBilgi.add.className="border border-danger"
    altBilgi.classList.add("border", "border-danger")
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.classList.add("mt-2")
    li.innerHTML = `İsim: ${username} <br>
    Soyisim: ${surname}<br>
    Yaş: ${age}`
    
    ul.append(li)
    altBilgi.append(ul)
    
}


// array = ["ece",7, true, 566, 66666,99999999999999,"okeeğy"]

// array.forEach(function(deneme){
//     console.log(deneme)
// })

// sayilar = [1,3,4]

// let sayilarin2Kati = sayilar.map(function(sayi){
//     return sayi-1;
    
// }); oıconsole.log(sayilarin2Kati)

// array.splice(array.length-1,0,"YENİ EKLENEN")



// copyOne.pop()
// console.log(copyOne)
// console.log(array)



// for(i = 0; i<=50; i++) {
//     if ( i%2==0){
//         console.log(i + "ÇİFT")
//     }
//     else {
//         console.log(i + "ÇİFT DEĞİLDİR")
//     }
// }

// let writtenUser = prompt("What is your name?");

// let users = [ "ece" , "dilara" , "tuba" , "esma"]

// for (i=0; i <users.length ; i++) {
//     if (users[i] === "tuba")  {continue}
//         let eklenecekOlan = document.querySelector(".ull")
//         let li = document.createElement("li")
//         li.innerHTML = users[i];
//         eklenecekOlan.append(li)
    
//     } 


// let info = prompt("1-den 100-e kadar değer giriniz")

// while (info>=100) {
//     alert("1-den 100-e değer girmeniz lazımdı")
// }


// 
 
// let books = ["vücudun hayir diyorsa", "küçük prens" , "aşk-özgürlük-tek başınalık"];
// let yazarlar = ["gabor mate" , "french author" , "osho"];
// books.forEach(
//     function (array,item,index) {
    
//     console.log(books[array,item,index])}
// )

// const number = [12, 24, 36]
// let newArray = [];
// number.forEach(function(value){
//      newArray.push(value+2)})
//      console.log(newArray)
    


// const number = [12,24,36]
// let ikiEkle = number.map(function(value){
//     return value+2;
// })
//  console.log(ikiEkle)

// const person = [{
//     name: "Ece",
//     age: 25,
//     languages: ["Java", "CSS"],
//   },
//   {
//     name: "marco",
//     age: 23,
//     languages: ["JavaScript", "HTML"],
//     }
//   ];

// //   const theAgeBiggerThan30 = person.filter(person => person.age > 24); 
// //   console.log(theAgeBiggerThan30)

// const jsBilenKisi = person.filter(person => person.languages.includes("JavaScript"));

// console.log(jsBilenKisi)

// shorname içinde ilk harf büyük (A.) new name içinde diğerleri küçük  

users = [ "ECE" , "LUİSKO" , "SİYAHCİK", "SENA"]

const yeniYapilan = users.map (names => 
    {
        return {
         shortName: `${names[0].toUpperCase()} ${names.slice(1).toLowerCase()}` }
    })
    
     console.log(yeniYapilan)