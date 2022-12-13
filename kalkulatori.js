import { Shuma, Ndryshimi, Shumezimi, Pjestimi, RrenjaKatrore, Fuqizimi, NgritjaNeKatror, Perqindja,nr1,nr2,operatori,btn,rezultatiP } from "./kalkulatoriModulet.js";



btn.addEventListener('click', () => {
    // kontrollojme operatorin
    // e therrasim modulin perkates
    console.log(operatori.value)
    if (operatori.value == "+") {
        Shuma(nr1.value, nr2.value)
    }
    else if (operatori.value == "-") {
        Ndryshimi(nr1.value, nr2.value)
    }
    else if (operatori.value == "*") {
       Shumezimi(nr1.value, nr2.value)
    }
    else if (operatori.value == '/') {
        Pjestimi(nr1.value, nr2.value)
    }
    else if (operatori.value == 'fuqizim') {
        Fuqizimi(nr1.value, nr2.value)
    }
    else if (operatori.value == 'rrenjaKatrore') {
        RrenjaKatrore(nr1.value)
    }
    else if (operatori.value == 'ngritja_ne_katror') {
        NgritjaNeKatror(nr1.value)
    }
    else if (operatori.value == '%') {
        Perqindja(nr2.value, nr1.value)
    }
})