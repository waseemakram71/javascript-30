function search(){
  let textSearch = document.getElementById('text-searching').value;
  let paragraph = document.getElementById('paragraph');
  textSearch = textSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  let patter = new RegExp(`${textSearch}`,"gi");
  paragraph.innerHTML = paragraph.textContent.replace(patter, match => `<mark>${match}</mark>`)
}