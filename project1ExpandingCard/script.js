//put all 5 panels in the nodelist which is like an array
const panels = document.querySelectorAll('.panel');

//console.log(panels[0]);
panels.forEach(item => item.addEventListener('click', () => {
    removeActiveClasses();
    item.classList.add('active');
}))

function removeActiveClasses(){
    panels.forEach((item) => item.classList.remove('active'))
}