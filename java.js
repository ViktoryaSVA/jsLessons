// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckbox = document.querySelector('#i2');
    console.log(myCheckbox.checked);

    if (myCheckbox.checked){
        console.log('on');

    } else {
        console.log('off');

    }
}

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);


}

