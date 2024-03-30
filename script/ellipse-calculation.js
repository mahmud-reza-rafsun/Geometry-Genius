function calculationEllipsArea(){
    const ellipseArea = getEllipseValue('ellipse-area');
    const ellipseBase = getEllipseValue('ellipse-base');
    console.log(ellipseArea, ellipseBase);

    const ellipseAreaSpan = 3.14 * ellipseArea * ellipseBase;
    ellipseSpanArea('ellipse-area-span', ellipseAreaSpan);
}

function getEllipseValue(ellipseValueElement){
    const ellipseValue = document.getElementById(ellipseValueElement);
    const ellipseValueText = ellipseValue.value;
    const ellipse = parseFloat(ellipseValueText);
    return ellipse;
}

function ellipseSpanArea(ellipseSpanElementId, ellipseAreaSpan){
    const ellipseSpan = document.getElementById(ellipseSpanElementId);
    ellipseSpan.innerText = ellipseAreaSpan
}