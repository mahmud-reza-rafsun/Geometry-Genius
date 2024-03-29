function pentagonCalclationArea(){
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const perimeterText = pentagonPerimeterInput.value;
    const perimeter = parseFloat(perimeterText);
    console.log(perimeter);

    const pentagonBaseInput = document.getElementById('pentagon-base');
    const BaseInput = pentagonBaseInput.value;
    const base = parseFloat(BaseInput);
    console.log(base);

    const pentagonCalclation = 0.5 * perimeter * base;
    console.log(pentagonCalclation);

    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = pentagonCalclation;
}