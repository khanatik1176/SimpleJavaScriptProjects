

const btn = document.querySelector('.generateColor');
btn.addEventListener('click', () =>
{
    const randomNumber = Math.floor(Math.random()* 16777215);
    const hexCode = "#"+ randomNumber.toString(16);
    document.body.style.backgroundColor = hexCode;

    document.querySelector('.color').textContent = hexCode;


});
