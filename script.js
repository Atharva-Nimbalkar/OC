let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const priority = document.getElementById("priority").value;
    const deadline = document.getElementById("deadline").value;

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        name: taskInput.value,
        priority: priority,
        deadline: deadline
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <span>${task.name}</span>
            <span>Priority: ${task.priority}</span>
            <span>Deadline: ${task.deadline}</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
