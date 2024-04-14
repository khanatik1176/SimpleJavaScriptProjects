const weight = document.querySelector('.weight');
const height = document.querySelector('.height');

const output = document.querySelector('.output');

const calculate = document.querySelector('.calculate');

const reset =  document.querySelector('.Reset');

calculate.addEventListener('click', (e) => {
  
    e.preventDefault();

    let weightInt = parseInt(weight.value);
    let heightInt = parseInt(height.value)/100;

    if( isNaN(weightInt)|| isNaN(heightInt))
    {
        alert('Please enter the values properly!!');
    }

    else{

    let bmi = weightInt / (heightInt * heightInt);
    
    output.value = bmi.toFixed(2);
    }
});
  
reset.addEventListener('click', (e) => {
   
    e.preventDefault();

    weight.value = '';
    height.value = '';
    output.value = '';
});
