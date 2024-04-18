const USD= document.querySelector('.USD');
const TAKA = document.querySelector('.Taka');


const convert = document.querySelector('.convert');

const reset =  document.querySelector('.Reset');

convert.addEventListener('click', (e) => {
  
    e.preventDefault();

    let USDInt = parseInt(USD.value);

    if( isNaN(USDInt) )
    {
        alert('Please enter the values properly!!');
    }

    else{

    let usdToTaka = USDInt * 109.74;
    
    TAKA.value = usdToTaka.toFixed(2);
    }
});
  
reset.addEventListener('click', (e) => {
   
    e.preventDefault();

    USD.value = '';
    TAKA.value = '';

});
