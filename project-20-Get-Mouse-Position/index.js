const output = document.getElementById('output');


window.addEventListener('mouseover', (e) => {
  let xpos = e.clientX;
  let ypos = e.clientY;
  output.innerHTML = `<div><span>X: </span>${xpos}</div>
                     <div><span>Y: </span>${ypos}</div>`
})