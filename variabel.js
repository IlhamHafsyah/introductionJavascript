//var name = "ilham";
//name = "Hafsyah";

//let name = "ilham";
//name = "Hafsyah";

//const name = "ilham";
//name = "Hafsyah";

//console.log(name);

//block scope
/*const x = 10;
if (x==10){
    const x = 20;
    console.log(x);
}
console.log(x);
*/

//let panjang = 10;
//let lebar = 5;
//let tinggi = 2;
//let perhitungan = panjang * lebar * tinggi;
//perhitungan /= 2;
//perhitungan = perhitungan / 2;
//console.log(perhitungan);

/*console.log(hello);
var hello = "hai"; //var akan berada diatas terus, tapi akan muncul undif
*/

//function scope
const name = "ilham";
function replaceName(){
    const name = "hafsyah";
    console.log(name);
}
console.log(name);
replaceName();