const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92'];
const container = document.getElementById('container');
const SQUARIES_NR = 300;

for(let i = 0; i < SQUARIES_NR; i++) {
  const square = document.createElement('div');
  square.classList.add('square');


square.addEventListener('mouseover', ()=> {
  setcolorE1(square)
});

square.addEventListener('mouseover', ()=> {
  removeColorE1(square)
});

  container.appendChild(square);

}
function setcolorE1(el){
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}


function getRandomColor(){
return colors[Math.floor(Math.random() * colors.length)];
}

