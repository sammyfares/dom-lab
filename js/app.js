const ulElement = document.getElementById('todo-list')
const inputElement = document.getElementById('inputs')
const buttonElement = document.getElementById('submit-button')

buttonElement.addEventListener('click', function(evt){
const li = document.createElement('li')
li.textContent = inputElement.value
ulElement.appendChild(li)
inputElement.value = ''
})
