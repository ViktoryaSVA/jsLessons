let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');

button.onclick = function() {
    // console.log('work');
    let b = +inputIn.value;
    console.log( b + 10 );
    inputIn.value = '';

};