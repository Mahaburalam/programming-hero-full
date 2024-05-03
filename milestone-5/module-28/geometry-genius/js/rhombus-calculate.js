document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusFirstDimension = getInputField('rhombus-first-dimension');
    const rhombusSecondDimension = getInputField('rhombus-second-dimension');

    // calculate rhombus area
    const rhombusArea = .5 * rhombusFirstDimension * rhombusSecondDimension;

    // show rhombus area
    showAreaResult("rhombus-result", rhombusArea);

    totalEntryCalculation("rhombus", rhombusArea);
})