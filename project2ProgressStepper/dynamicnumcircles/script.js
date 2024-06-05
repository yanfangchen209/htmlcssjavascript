
//bring in all dom elements
const progress_line = document.getElementById('progress-line');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//important, according to currentStep, decide which circles are active, progress line length
//and if prev, next buttons are disabled
let currentStep = 1;

prev.addEventListener('click', () => {

    currentStep--;
    //update circles and progress lines
    updateCircleLines(currentStep);
    updateButtons(currentStep);
})


next.addEventListener('click', () => {
    currentStep++;
    //update circles and progress lines
    updateCircleLines(currentStep);
    updateButtons(currentStep);
})


function updateCircleLines(currentStep){

    //update circles
    circles.forEach((circle, index) => {
        if(index < currentStep){
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    //update progress line
    //calculate the active progess line length according to complished steps and total steps
    const progress_line_length_percentage = ((currentStep - 1)/(circles.length - 1)) * 100 + '%'
    console.log(progress_line_length_percentage);
    progress_line.style.width = progress_line_length_percentage;

}

function updateButtons(currentStep){
    if(currentStep === 1){
        prev.disabled = true;
    }else{
        prev.disabled = false;
    }

    if(currentStep === circles.length){
        next.disabled = true;
    }else{
        next.disabled = false;
    }



}



