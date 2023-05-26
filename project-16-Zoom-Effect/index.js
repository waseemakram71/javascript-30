const {body} = document;
let zoomActived = false;
window.addEventListener('click', ()=>{
  zoomActived = !zoomActived;
});
window.addEventListener('mousemove', (e)=>{
  const {clientX: x, clientY: y} = e;
  if(zoomActived){
    body.style.transform = `scale(2)`
    body.style.transformOrigin = `${x}px ${y}px`
  }else{
    body.style.transform = `none`
  }
})