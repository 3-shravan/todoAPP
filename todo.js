let todoList=[
    {
        task:'Enter Task',
        dueDate:'Enter Date',
    },
];

displayToDo();
function addToDo(){
    let inputText=document.querySelector('#input-todo');
    let inputDate=document.querySelector('#date');

    let todo=inputText.value;
    let todoDate=inputDate.value;

    todoList.push({task:todo,dueDate:todoDate});
    
    inputText.value='';
    inputDate.value='';
    displayToDo();

}

function displayToDo(){
    let displayText=document.querySelector('#output-todo');
    // displayText.innerText='';
    let newHtml='';
    
   for(let i=0;i<todoList.length;i++){
    let {task,dueDate}=todoList[i];
        // displayText.innerText=displayText.innerText + "\n " + todoList[i];
        newHtml +=`
      
        <span>${task}</span>
        <span>${dueDate}</span>

        <button class="delete-button" onclick=
        "
        todoList.splice(${i},1);
        displayToDo();
        ">Delete</buttton>
        
        `
        

    };
    displayText.innerHTML=newHtml;
}

function deleteToDo(){

}