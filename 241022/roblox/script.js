// button event
const femaleBtn = document.getElementById("femalebtn");
femaleBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    femaleBtn.querySelector('#femalebtn i').classList.add('filledA');
    document.querySelector('#malebtn i').classList.remove('filledB');
});

const maleBtn = document.getElementById('malebtn');
maleBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    maleBtn.querySelector('#malebtn i').classList.add('filledB');
    document.querySelector('#femalebtn i').classList.remove('filledA');
});

// Logon & Login event
const formElement = document.querySelector('form');

formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert(`${document.querySelector('.userInput').value}님! 아직 준비중입니다!`);

    document.querySelector('.userInput').value = "";
    document.querySelector('.passwordInput').value = "";
})