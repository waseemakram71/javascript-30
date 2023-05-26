const count = document.getElementById('count');

updateVisitorCount();

function updateVisitorCount() {
  fetch('https://api.countapi.xyz/update/project/pen?amount=1')
  .then(res => res.json())
  .then(res=> {
    count.innerHTML= res.value;
  })
}

