const toast = document.getElementById('wrapper-toast');

function showToast() {
  toast.style.transform = 'translateX(0px)';
setTimeout(()=>{
  toast.style.transform = 'translateX(400px)';
},4000);
}
function closeToast() {
  toast.style.transform = 'translateX(400px)';
  
}