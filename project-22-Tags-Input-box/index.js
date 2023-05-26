let tags = [];
function addTag(e){
  let code = (e.keycode ? e.keycode : e.which);
  if(code !=13) {
return
  }
  let tag = e.target.value.trim();
if(tag.length < 1 || tags.includes(tags)) {
  e.target.value = "";
return
}
  let tagItem = document.createElement('div');
  tagItem.classList.add('item');
  tagItem.innerHTML = ` 
   <span class="delete-btn" onclick="deleteTag(this, '${tag}')">
  &times;
</span>
<span>${tag}</span>`
;
document.querySelector('.tag-input .tags-list').appendChild(tagItem);
e.target.value = "";
}
function deleteTag(ref, tag){
  let parent = ref.parentNode.parentNode;
  parent.removeChild(ref.parentNode);
  let index = tags.indexOf(tag);
  tags.splice(index);
}


document.querySelector('.tag-input').addEventListener('keyup',addTag);