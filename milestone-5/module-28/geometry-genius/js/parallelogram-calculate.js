document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBase = getInputField('parallelogram-base');
    const parallelogramHeight = getInputField('parallelogram-height');
    // console.log(parallelogramBase, parallelogramHeight)

    // calculate area
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    // console.log(parallelogramArea);

    showAreaResult("parallelogram-result", parallelogramArea);
})