const distance = parseInt(prompt('Quanta distanza hai intenzione di percorrere?'));
const age = parseInt(prompt('Quanti anni hai?'));
let sale = 0;
const priceKm = 0.21;
const basePrice = parseFloat(priceKm * distance);

if (age < 18) {
    sale = (basePrice * 0.20); 
} else if (age > 65) {
    sale = (basePrice * 0.40) ;
}

console.log (basePrice);
console.log ("il prezzo da pagare è: ", parseFloat(basePrice - sale).toFixed(2));