const listItems = document.querySelectorAll('li');
const addCompleted = (event) => {
    event.target.classList.toggle('completed')
}
for (const li of listItems) {
    li.addEventListener('click', addCompleted)
}
const onAddToDo = (event) => {
    const newListItem = 
}