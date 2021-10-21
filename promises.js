
// Blocking code example

// document.querySelector('button').addEventListener('click', () => {
//     this.name = "Ramanan"
//     let myDate;
//     for (let i = 0; i < 100000000; i++) {
//         let date = new Date();
//         myDate = date;
//     }

//     console.log(myDate);

//     let pElem = document.createElement('p');
//     pElem.textContent = 'This is a newly-added paragraph.';
//     document.body.appendChild(pElem);

// });

console.log("Welcome to promises");

// When a promise is created, it is neither in a success or failure state. It is said to be pending.


document.querySelector('button').addEventListener('click', async () => {
    const a = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const b = fetch('https://jsonplaceholder.typicode.com/todos/2');
    const c = fetch('https://jsonplaceholder.typicode.com/todos/3');

    const res = new Promise((resolve, reject)=>{
        reject(a);
    });

    res.then( r => console.log(r));

    // Promise.all([a, b, c]).then(values => {
        //     console.log(values);
        // });
        const response = await Promise.all([a, b, c]);
        console.log(response);
});

// Building your own custom promises