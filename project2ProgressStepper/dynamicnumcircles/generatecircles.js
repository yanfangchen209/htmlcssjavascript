function generateCircles(numCircles){

    const container = document.querySelector('.progress-line-circle');
    for(let i = 0; i < numCircles; i++){
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.textContent = i + 1;
        container.appendChild(circle);
    }
}
generateCircles(5)