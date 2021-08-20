// task one
const topPlayers = document.querySelector('#top-players');
const topBlogs = document.querySelector('#top-blogs');

topPlayers.style.color = 'green';
topBlogs.style.color = 'magenta';

// task two

const players = document.querySelectorAll('.player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
}

// task three
const button = document.querySelector('#btn');
button.addEventListener('click', function () {
    const list = document.querySelector('#list');
    const listItem = document.createElement('li');

    list.appendChild(listItem);


})

// task four

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', function () {
    let inputField = document.querySelector('#count');
    let inputFieldValue = parseInt(inputField.value);
    inputFieldValue++;
    inputField.value = inputFieldValue
    console.log(inputFieldValue);

    // task five

    if (inputFieldValue >= 5) {

        // First way
        // button2.disabled = true;

        // another way
        button2.setAttribute('disabled', true)
    }




})
