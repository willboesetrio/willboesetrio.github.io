const listItems = document.querySelectorAll('li');
const addCompleted = (event) => {
    event.target.classList.toggle('completed')
    console.log('click')
}
for (const li of listItems) {
    li.addEventListener('click', addCompleted)
}
const onAddToDo = (event) => {
    const text = event.target.parentNode.querySelector('input').value;
    if(text) {
        const newListItem = document.createElement('li');
        newListItem.addEventListener('click', addCompleted);
        const liText = document.createTextNode(text);

        newListItem.appendChild(liText);
        document.querySelector('ul').appendChild(newListItem);
    }
}
document.querySelector('button').addEventListener('click', onAddToDo)