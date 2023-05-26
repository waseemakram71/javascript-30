const inputTextarea = document.getElementById('input-textarea');
const characterCount = document.getElementById('character-count');
const wordCount = document.getElementById('word-count');

inputTextarea.addEventListener('input',()=>{
  characterCount.textContent = inputTextarea.value.length;

  let text = inputTextarea.value.trim();
  wordCount.textContent = text.split(/\s+/).filter((item)=> item).length;
})