//switch-case
const phone = "IPHONE";

switch(phone) {
    case "IPHONE": {
        console.log("Your Phone is Iphone");
        break;
    }
    case "NOKIA": {
        console.log("Yoyr Phone is Nokia");
        break;
    }
    default: {
        console.log("Your Phone is Not Listed");
}
}

//if else
/*let harga = 5000;
if (harga >= 5000) {
    console.log("mahal");
}
else if (harga > 2000) {
    console.log("sedang");
}
else{
    console.log("murah");
}
*/

//Ternary operator
/*harga >= 5000 
? console.log("mahal") 
: harga > 2000 
? console.log("sedang") 
: console.log("murah");
*/

/*
let test = true;
if (test) {
    console.log(true)
} else {
    console.log(false)
}
*/

//short sircuit logic
let username = "Ilham";
//if (username){
//console.log(username) 
//} else {
 //       console.log("Anonymus")
   // }
//}

let checkUsername = username || "Anonymus";
console.log(checkUsername);