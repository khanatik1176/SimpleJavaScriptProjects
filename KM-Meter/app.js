const KM = document.querySelector('.KM');
const Meter = document.querySelector('.Meter');


const calculate = document.querySelector('.calculate');

const reset =  document.querySelector('.Reset');

calculate.addEventListener('click', (e) => {
  
    e.preventDefault();

    let KMInt = parseInt(KM.value);

    if( isNaN(KMInt) )
    {
        alert('Please enter the values properly!!');
    }

    else{

    let meterConversion = KMInt * 1000;
    
    Meter.value = meterConversion.toFixed(0);
    }
});
  
reset.addEventListener('click', (e) => {
   
    e.preventDefault();

    KM.value = '';
    Meter.value = '';

});
