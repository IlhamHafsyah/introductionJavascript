const mtk = 99;
const bahasaIndonesia = 90;
const bahasaInggris = 82;
const ipa = 82;
if(mtk > 100 || bahasaIndonesia > 100 || bahasaInggris > 100 || ipa > 100){
    console.log("Masukkan nilai 0 - 100")
} 
else if(mtk < 0 || bahasaIndonesia < 0 || bahasaInggris < 0 || ipa < 0){
    console.log("Masukkan nilai 0 - 100")
} else {
let xx = mtk + bahasaIndonesia + bahasaInggris + ipa;
let xy = xx/4;
let x = Math.round(xy);
console.log(x);
if(x >= 90){
    console.log("Grade = A")
} else if(x >= 80){
    console.log("Grade = B")
} else if(x >= 70){
    console.log("Grade = C")
} else if(x >= 60){
    console.log("Grade = D")
} else if(x < 60){
    console.log("Grade = E")
}
}