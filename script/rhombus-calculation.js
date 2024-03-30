function rhombusAreaCalculate(){
    const rhombusDiagonalOne = getRhombusInput('rhombus-diagonal-1');
    const rhombusDiagonalTow = getRhombusInput('rhombus-diagonal-2');
    // console.log(rhombusDiagonalOne, rhombusDiagonalTow);

    const area = 0.5 * rhombusDiagonalOne * 1 * rhombusDiagonalTow * 2;
    setSpanValue('rhombus-area', area);
}

function getRhombusInput(getRhombusInputValue){
    const getInputValue = document.getElementById(getRhombusInputValue);
    const getInputValueText = getInputValue.value;
    const value = parseFloat(getInputValueText);
    return value;
}

function setSpanValue(setSpanElement, area){
    const spanValue = document.getElementById(setSpanElement);
    spanValue.innerText = area
}