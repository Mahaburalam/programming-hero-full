function rectangleCalculation(){
    // document.getElementById('rectangle-btn');
    // console.log('4444444');

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = rectangleWidthInput.value;
    rectangleWidthInput.value = '';

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthInput.value;
    rectangleLengthInput.value = '';

    // globalValidation(rectangleWidth, rectangleLength);

    // calculate rectangle area 
    const rectangleArea = rectangleWidth * rectangleLength;
    // console.log(rectangleArea);

    
    // show rectangle area
    const showRectangleArea = document.getElementById('rectangle-result')
    showRectangleArea.innerText = rectangleArea;

    totalEntryCalculation('rectangle', rectangleArea);
    
}