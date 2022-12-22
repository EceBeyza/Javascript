let user = prompt("Lütfen isminizi giriniz :)");
let newDate = new Date();
if (user.length > 0) {
    let content = document.querySelector(".content")
    let card = document.createElement("div")
    content.appendChild(card)
    card.className = "card-body text-center fs-3"
    card.style.color = "#713528"
    card.innerHTML = `Merhaba ${user} Hoşgeldin :) <br>
     <small>
    Sitemizde bir çok faydalanabileceğin bilgiyi edinebilirsin.</small> <br> Şuanki tarih: ${newDate}` 
}
else {
    alert("Lütfen isminizi belirtiniz")

} 
