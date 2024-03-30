function pentagonAreaCalculation(){
    const perimeter = getElementByValue('pentagon-perimeter');
    console.log(perimeter)

    const base = getElementByValue('pentagon-base')
    console.log(base)

    const area = 0.5 * perimeter * base;

    setElementValue('pentagon-area', area);
}




function getElementByValue(getMainValue){
    const firstInput = document.getElementById(getMainValue);
    const firstInputText = firstInput.value;
    const first = parseFloat(firstInputText);
    return first;
}

function setElementValue(elementId, area){
    const setSpanValue = document.getElementById(elementId)
    setSpanValue.innerText = area
}