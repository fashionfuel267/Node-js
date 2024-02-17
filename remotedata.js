 const fetch = require('node-fetch').default;

fetch('https://oreilly.com')
.then(res => res.text())
.then(body => console.log(body));


// (async () => {
//     try {
//     const response = await fetch('https://swapi.dev/api/people/3');
//     const json = await response.json();
//     console.log(json);
//     } catch (error) {
//     console.log(error);
//     }
//     })();
    