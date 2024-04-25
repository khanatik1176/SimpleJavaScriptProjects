const inputData = document.querySelector('.data');
const submit = document.querySelector('.submit');
const outputData = document.querySelector('.output');
const popData = document.querySelector('.pop');
let output = [];

submit.addEventListener('click',(e) =>
{
    e.preventDefault();

    let tempData = inputData.value;
    
    output = tempData;
    outputData.textContent = tempData;

})

popData.addEventListener('click',(e) =>
{
    e.preventDefault();


    output = output.slice(0,-1);
    outputData.textContent = output;

    if(outputData.textContent == "")
    {
        outputData.textContent = "Nothing";
    }

})