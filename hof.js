let tomb = [12, 58, 95, -45, 789, 1, -78, 1287];

/*
const kimenetForeach = tomb.forEach((value) => {
    console.log(value);
});

console.log(kimenetForeach);
*/
/*
const kimenetMap = tomb.map((value) => {
    return value = 2 * value;
});

tombKiir(kimenetMap);

console.log(kimenetMap);
*/
/*
const kimenetFilter = tomb.filter((value) => {
    return value > 60;
});

console.log(kimenetFilter);
tombKiir(kimenetFilter);
*/
/*
const sum = tomb.reduce((total, value) => {
    return total += value;
}, -2000);

const osszefuz = tomb.reduce((total, value) => {
    return total += value.toString();
}, "A bankszámlaszám: ");

console.log(`${osszefuz}.`);

const osszefuzVissza = tomb.reduceRight((total, value) => {
    return total += value.toString();
});

console.log(`Az eredmény: ${osszefuzVissza}.`);
*/

/*
const mindenErtek = tomb.every((value) => {
    return value < 10000;
});

console.log(mindenErtek);
*/
/*
const legalabbErtek = tomb.some((value) => {
    return value > 10000; 
});

console.log(legalabbErtek);
*/

const elsoTalalat = tomb.find((value) => {
    return value > 60;
});

console.log(elsoTalalat);

const elsoTalalatIndex = tomb.findIndex((value) => {
    return value > 60;
});

console.log(elsoTalalatIndex);

function tombKiir(tomb) {
    tomb.forEach((value) => {
        console.log(value);
    });
}