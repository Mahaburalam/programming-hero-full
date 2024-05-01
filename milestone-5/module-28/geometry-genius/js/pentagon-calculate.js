document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonPerimeter = getInputField('pentagon-perimeter');
    const pentagonApothem = getInputField('pentagon-apothem');

    // calculate rhombus area
    const pentagonArea = .5 * pentagonPerimeter * pentagonApothem;

    // show rhombus area
    showAreaResult("pentagon-result", pentagonArea);
})