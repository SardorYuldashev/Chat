const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const window1 = document.querySelector('.window1');
const userName1 = document.querySelector('.user__name1');
const userName2 = document.querySelector('.user__name2');
const btn = document.querySelector('.main__btn')
let user1 = prompt('Введите имя первого пользователя');
let user2 = prompt('Введите имя второго пользователя');

// let user1 = 'Sardor';
// let user2 = 'Sherzod';


if (user1) {
    userName1.innerHTML = user1;
} else {

    user1 = 'Пользователь 1';
}

if (user2) {
    userName2.innerHTML = user2;
} else {
    user2 = 'Пользователь 2';
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    window1.innerHTML = ''
})


form1.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = input1.value
    if (value) {
        window1.innerHTML += `
        <div class="user__message">
            <h2 class="user__message-title">
                ${user1}:
            </h2>            

            <br>

            ${value}            
        </div>
        `
        input1.value = ''
    }
})

form2.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = input2.value
    if (value) {        
        window1.innerHTML += `
        <div class="user__right">
            <div class="user__message2">                
                <h2 class="user__message-title2">
                    ${user2}:
                </h2>
                

                <br>

                ${value}
            </div>
        </div>
        `
        input2.value = ''
    }
})