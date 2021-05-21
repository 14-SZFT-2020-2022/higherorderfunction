let tomb = ['Vivien','Dóra','Zoltán','Gergő','Márk','Ádám', 'Dániel'];

const ujTomb = tomb.map((value) => {
    return value.toString().toUpperCase();
});

// tombKiir(ujTomb);

const szurtTomb = tomb.filter((value) => {
    return value.toString().length >= 5;
});

// tombKiir(szurtTomb);

const elore = tomb.reduce((total, value) => {
    return total += value.toString().substr(0, 1);
}, "A kezdőbetűk előre: ");

console.log(elore);

const vissza = tomb.reduceRight((total, value) => {
    return total += value.toString().substr(0, 1);
}, "A kezdőbetűk visszafelé: ");

console.log(vissza);

function tombKiir(tomb) {
    tomb.forEach((value) => {
        console.log(value);
    });
}