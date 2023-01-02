const writtenUser = document.querySelector("#task");
const eklenecekOlanAlan = document.querySelector("#list");
const clicker = document.querySelector("#liveToastBtn");
todo=[]
clicker.addEventListener("click", send)

function send() {
    if(!writtenUser.value==""){
    let li = document.createElement("li")
    li.innerHTML = writtenUser.value;
    let button1 = document.createElement("button")
    button1.className ="btn-close float-end"
    eklenecekOlanAlan.appendChild(li);
    li.appendChild(button1)
    button1.type="button"
    addLocalStrage(writtenUser.value)
    writtenUser.value="";
    alerts("success","Ekleme başarılı!")
  }else{
    alerts("danger","Bir değer giriniz!")
}}

function alerts (type,message) {
let div = document.createElement("div")
div.className=`alert alert-${type}`;
div.style.width="150px"
div.innerHTML = `${message}`;

let bigContainer = document.querySelector(".container")
bigContainer.prepend(div)
setTimeout(function(){
    div.remove()
},2500)

}

function addLocalStrage(writtenUser) {
    checkLocal()
    todo.push(writtenUser)
    localStorage.setItem("todo", JSON.stringify(todo))

}

function checkLocal(todo) {
    if(localStorage.getItem("todo" ===null)){
        todo=[];
    }else{
        todo = JSON.parse(localStorage.getItem("todo"))
    }
}

eklenecekOlanAlan.addEventListener('mouseover', function(){
const but2 = document.querySelectorAll("#list button");
for ( let item=0; item<but2.length; item++) {
but2[item].addEventListener("click",yokEt);function yokEt() {
let dontShow = but2[item].parentElement;
    dontShow.remove()
}
}})