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
    console.log("MISS YOU SO MUCCCHHYY POO AWHHEHWEHWEHWEHWHEWHE <<33");
}

// Easter Egg
const hiddenBtn = document.querySelector('#hiddenMess');

hiddenBtn.onclick = function(){
    alert("I MISS YOUU PO MWEHWEWHEWHEHWHEWHEHW<3")
}