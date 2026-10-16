//zadanie 1
function liczba(){
    let wartosc = document.getElementById("liczba").value;
    
    let wynik = wartosc * (-1);
    alert("Liczba przeciwna do podanej to "+wynik);
}

//zadanie 2
let pelnoletnosc = (dataUrodzenia) => {
    let data = new Date(dataUrodzenia);
    let dzisiaj = new Date();

    data.setFullYear(data.getFullYear() + 18);

    if (data <= dzisiaj) {
        return "Użytkownik jest pełnoletni";
    } else {
        return "Użytkownik nie jest pełnoletni";
    }
};

alert(pelnoletnosc(document.getElementById("data").value));

function sprawdz() {
    alert(pelnoletnosc(document.getElementById("data").value));
}

//zadanie 3
const obwod = (r = 4, pi = 3.14) => {
    let wynik = 2 * pi * r;
    alert(wynik);
}

//zadanie 4
function srednia(tablica) {
    let suma = 0;

    for (let i = 0; i < tablica.length; i++) {
        suma += tablica[i];
    }

    let wynik = suma / tablica.length;
    alert("Średnia wynosi: " + wynik);
}