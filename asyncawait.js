/*
const promise = new Promise((resolve, reject) => {
    let valtozo = false;
    if (!valtozo) {
        let nev = 'John Doe';
        resolve(nev);
    } else {
        reject(new Error('Hibára futottam!'));
    }
});

const promiseHivas = async () => {
    try {
        const response = await promise;
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
};

promiseHivas();
*/

let tomb = {
    belso: []
};

const fetchLekeres = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        // console.log(response);
        const tartalom = await response.json();

        const nihil = tartalom.filter((value) => {
            return value.body.indexOf('nihil') > -1;
        });
        //tombKiir(nihil);
        console.log(nihil.length);
        // tomb.belso = tartalom;
        // kiir();
        // console.log(tartalom);
    } catch (error) {
        console.log(error.message);
    }
};

fetchLekeres();

// kiir();

function kiir() {
    console.log(tomb.belso);
}

function tombKiir(tomb) {
    tomb.forEach((value) => {
        console.log(value);
    });
}