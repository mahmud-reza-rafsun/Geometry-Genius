function calculateParallelogramArea() {
    // get base of the parallelogram
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    // get width of the parallelogram
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText)
    console.log(height);

    // calculate parallelogram area
    const parallelogramArea = base * height;
    console.log('Area of the parallelogram: ', parallelogramArea);

    // display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;
}