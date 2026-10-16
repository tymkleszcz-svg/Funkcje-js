//Zadanie 1
function hello(){
    alert("Witaj! Smaczej kawusi");
}

//Zadanie 2
let list = ["pomidor", "ogorek", "chleb", "maslo", "ser", "szynka"];
document.getElementById("list").textContent = list;

//Zadanie 3
function age(){
    let date = new Date(document.getElementById("date").value);
    let today = new Date();

    let year = date.getFullYear(date.getFullYear()+18);
    
    if(date<=today){
        alert("Jesteś pełnoletni")
    }else{
        alert("Nie jesteś pełnoletni")
    }
}

//Zadanie 4
function data(){
    let imie = document.getElementById("firstname").value;
    let nazwisko = document.getElementById("lastname").value;

    alert(imie+" "+nazwisko);
}
