function ellipseCalculate(){
    const ellipseArea = getInputField('ellipse-area');
    const ellipseBase = getInputField('ellipse-base');
    // console.log(ellipseArea, ellipseBase);

    // calculate ellipse area
    const ellipseResult = 3.1416 * ellipseArea * ellipseBase;

    if(isNaN(ellipseBase) | isNaN(ellipseBase))
    {
        alert('Please input valid number');
        return;
    }
    // show ellipse area result
    showAreaResult('ellipse-result', ellipseResult)

    totalEntryCalculation("Ellipse", ellipseResult);
}