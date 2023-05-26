const inputPx =document.getElementById('input-px');
const inputEm =document.getElementById('input-em');

const pxToEm = ()=> {
  const pxVal = inputPx.value;
  if(pxVal.length != 0) {
    inputEm.value = pxVal / 16;
  } else {
    inputEm.value = ""
  }
  }
  const emToPx = ()=> {
    const emVal = inputEm.value;
    if(emVal.length != 0) {
      inputPx.value = emVal / 16;
    } else {
      inputPx.value = ""
    }
    }
inputPx.oninput = pxToEm;
inputEm.oninput = emToPx;