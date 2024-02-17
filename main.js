let userInput = document.querySelector('#textbox');
const parentContainer = document.querySelector('.container');
const addBtn = document.querySelector('#addBtn');

function createTask(){
    // Make task
    const addTask = document.createElement('div');
    addTask.textContent = userInput.value;
    addTask.setAttribute('class', "task");
    parentContainer.appendChild(addTask);

    // Make trash button
    const addTrashBtn = document.createElement('button');
    addTrashBtn.textContent = "✖";
    addTrashBtn.setAttribute('class','trashBtn')
    addTask.appendChild(addTrashBtn)

    // Delete button
    addTrashBtn.onclick = function(){
        parentContainer.removeChild(addTask);
    }
}

addBtn.onclick = function(){
    if(userInput.value===''){
        alert("Task can't be blank.")
    }
    else{
        createTask();
        userInput.value = '';
    }
}

// MISS YOU PO HWEHWEHWEHWEHWHEWHEHWEHWEHWHE
