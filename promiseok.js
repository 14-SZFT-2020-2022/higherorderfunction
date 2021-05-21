/*
const promise = new Promise((resolve, reject) => {
    let valtozo = true;
    if (!valtozo) {
        let nev = 'John Doe';
        resolve(nev);
    } else {
        reject(new Error('Hibába futottam!'));
    }
});

promise
.then((value) => {
    console.log(value);
    return value.toUpperCase();
})
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.error(err.message);
});
*/

const promise = fetch('https://jsonplaceholder.typicode.com/users');

// console.log(promise);

promise
.then((value) => value.json())
.then((tomb) => {
    // console.log(tomb);
    let eredmenyTomb = tomb.filter((value) => {
        // return value.completed == false;
        return value.email.endsWith('.biz') == true;
    });
    tombKiir(eredmenyTomb);
    // console.log(eredmenyTomb.length);
})
.catch((error) => console.log(error.message));

function tombKiir(tomb) {
    tomb.forEach((value) => {
        console.log(value);
    });
}