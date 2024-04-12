const inputEl = document.querySelector('.input-js');
const buttonEl = document.querySelector('.button-add-js');
const ulEl = document.querySelector('.ul-container-list-js');

function keyDown(event){
  if(event.key === 'Enter'){
    add();
  }
}

function add(){
  if(inputEl.value === ''){
    alert('Task can not be empty');
  }
  else{
    let inputValue = inputEl.value;
    let li = document.createElement('li');
    li.innerHTML = inputValue;
    ulEl.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = 'X';
    li.appendChild(span);
    inputEl.value = ''; 
  }
  saveData();
}

  ulEl.addEventListener('click',(event) =>{
    if(event.target.tagName==='LI'){
      event.target.classList.toggle('checked');
    }
    else if(event.target.tagName === 'SPAN'){
      event.target.parentElement.remove();
    }
    saveData();
  }
)

  function saveData(){
    localStorage.setItem('tasksList',ulEl.innerHTML);
  }

  function showData(){
    ulEl.innerHTML = localStorage.getItem('tasksList');
  }

  showData();