var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path class="fill" d="M167.2,316v607.6c0,36.7,29.7,66.4,66.4,66.4h534.8c36.7,0,66.4-29.7,66.4-66.4V316H167.2L167.2,316z M348.5,866.3h-59.8V434.7h59.8V866.3L348.5,866.3z M469.2,866.3h-59.8V434.7h59.8V866.3L469.2,866.3z M590.4,866.3h-59.8V434.7h59.8V866.3L590.4,866.3z M711.1,866.3h-59.8V434.7h59.8V866.3L711.1,866.3z M827.4,132.2H720.6V76.4c0-36.7-29.7-66.4-66.4-66.4H364.1c-36.7,0-66.4,29.7-66.4,66.4v55.8H172.5c-36.7,0-66.5,29.7-66.5,66.4v54.3h787.9v-54.3C893.9,162,864.2,132.2,827.4,132.2L827.4,132.2z M660.2,132.6H357.4V71.7h302.8V132.6L660.2,132.6z"/></g></svg>';

var completeSVG = '<svg id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon class="fill" points="434.8,49 174.2,309.7 76.8,212.3 0,289.2 174.1,463.3 196.6,440.9 196.6,440.9 511.7,125.8 434.8,49     "/></g></svg>';

document.getElementById('add').addEventListener('click',function() {
  var value=document.getElementById('item').value;
  if (value){
    addItemTodo(value);
    document.getElementById('item').value='';
}
});
function removeItem(){
  var item=this.parentNode.parentNode;
  var parent=item.parentNode;
  parent.removeChild(item);
}

function completeItem() {
  var item =this.parentNode.parentNode;
  var parent=item.parentNode;
  var id = parent.id;

  var target=(id=='todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item,target.childNodes[0]);
}
//adding a new item to the todo list
function addItemTodo(text){
  var list=document.getElementById('todo');
  var item = document.createElement('li');
  item.innerText=text;

  var buttons=document.createElement('div');
  buttons.classList.add('buttons');

  var remove=document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML=removeSVG;

  //add click event for removing item
  remove.addEventListener('click', removeItem);

  var complete =document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML=completeSVG;

  complete.addEventListener('click',completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);


  list.insertBefore(item, list.childNodes[0]);
}
