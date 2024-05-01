document.getElementById('triangle-btn').addEventListener('click', function(){
    // console.log('working...')
    
    // get triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    triangleBaseInput.value = '';
    // console.log(triangleBaseValue);

    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    triangleHeightInput.value = '';
    // console.log(triangleHeightValue);

    // calculate triangle area
    const triangleArea = .5 * triangleBaseValue * triangleHeightValue;
    // console.log(triangleArea)

    // show triangle area
    const showTriangleArea = document.getElementById('area-result');
    showTriangleArea.innerText = triangleArea;
})