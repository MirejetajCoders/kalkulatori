export let nr1 = document.querySelector(".nrPare");
export let nr2 = document.querySelector(".nrDyte");
export let operatori = document.querySelector(".operatori");
export let btn = document.querySelector(".rezultati");
export let rezultatiP = document.querySelector(".resultP");

export function Shuma(a, b) {
  rezultatiP.innerHTML = `${a} + ${b} = ${Number(a) + +Number(b)}`;
}
export function Ndryshimi(a, b) {
  rezultatiP.innerHTML = `${a} - ${b} = ${Number(a) - Number(b)}`;
}
export function Shumezimi(a, b) {
  rezultatiP.innerHTML = `${a} * ${b} = ${Number(a) * Number(b)}`;
}
export function Pjestimi(a, b) {
  rezultatiP.innerHTML = `${a} : ${b} = ${+a / +b}`;
}
export function RrenjaKatrore(a) {
  rezultatiP.innerHTML = `√${a} = ${Math.sqrt(+a)}`;
}
export function Fuqizimi(a, b) {
  rezultatiP.innerHTML = `${a} ne fuqine ${b} = ${Number(a) ** +b}`;
}
export function NgritjaNeKatror(a) {
  rezultatiP.innerHTML = `${a} ne kator = ${Number(a) ** 2}`;
}
export function Perqindja(numri, p) {
  rezultatiP.innerHTML = `${p}% te ${numri} = ${(+numri / 100) * p}`;
}
