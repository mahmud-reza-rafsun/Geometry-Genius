function pentagonAreaCalculation(){
    const perimeter = getInputValue('pentagon-perimeter');
    const base = getInputValue('pentagon-base');
    console.log(perimeter, base);

    const area = 0.5 * perimeter * base;
    getSpanValue('pentagon-area', area);
}

// global function()

function getInputValue(getValue){
    const pemimeterValue = document.getElementById(getValue);
    const pemimeterValueText = pemimeterValue.value;
    const value = parseFloat(pemimeterValueText)
    return value;
}

function getSpanValue(getElementValue, area){
    const showSpanValue = document.getElementById(getElementValue);
    showSpanValue.innerText = area;
}