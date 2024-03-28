function calculateRectangleArea() {
    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lenghtText = lengthInput.value;
    const length = parseFloat(lenghtText);
    console.log(length);

    // calculate rectangle area
    const area = width * length;
    console.log('area of the rectangle is:', area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}