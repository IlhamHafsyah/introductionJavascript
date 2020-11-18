let printSegitiga = 8;
let cekTipe = 1;
if(typeof printSegitiga !== typeof cekTipe){
    console.log("Data yang diinput harus Number");
} else {
let hasil = "";
for(let i = printSegitiga; i >= 0; i--){
    for(let j = 1; j <= i; j++){
    hasil += j;
    }
    hasil += "\n";
}
console.log(hasil);
}