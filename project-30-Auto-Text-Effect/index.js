const prog = "we are finished 30 days of javascript.😄";
let idx = 1;

setInterval(writeText, 1000);

function writeText() {
  const text = document.querySelector(".heading");
  text.innerHTML = prog.slice(0, idx);
  idx++;
  if (idx >= prog.length) {
    idx = 1;
  }
}
