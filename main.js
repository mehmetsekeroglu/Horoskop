const month = 1;
const day = 32;



if ((month == 1 && day <= 31 && day >= 21) || (month == 2 && day < 19)) {
    console.log("Kova")
} else if ((month == 2 && day <= 29 && day >= 19) || (month == 3 && day < 21)) {
    console.log("Balik")
} else if ((month == 3 && day >= 21 && day <= 31) || (month == 4 && day < 21)) {
    console.log("Koc")
} else if ((month == 4 && day >= 21 && day <= 30) || (month == 5 && day < 21)) {
    console.log("Boga")
} else if ((month == 5 && day >= 21 && day <= 31) || (month == 6 && day < 22)) {
    console.log("Ikizler")
} else if ((month == 6 && day >= 22 && day <= 30) || (month == 7 && day < 23)) {
    console.log("Yengec")
} else if ((month == 7 && day >= 23 && day <= 31) || (month == 8 && day < 23)) {
    console.log("Aslan")
} else if ((month == 8 && day >= 23 && day <= 31) || (month == 9 && day < 23)) {
    console.log("Basak")
} else if ((month == 9 && day >= 23 && day <= 30) || (month == 10 && day < 24)) {
    console.log("Terazi")
} else if ((month == 10 && day >= 24 && day <= 31) || (month == 11 && day < 23)) {
    console.log("Akrep")
} else if ((month == 11 && day >= 23 && day <= 30) || (month == 12 && day < 22)) {
    console.log("Yay")
} else if ((month == 12 && day >= 22 && day <= 31) || (month == 1 && day < 21)) {
    console.log("Oglak")
} else {
    console.log("Yanlis Giris Yaptiniz")
}