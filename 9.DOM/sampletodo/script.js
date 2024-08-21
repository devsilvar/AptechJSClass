document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });
    taskItem.appendChild(completeBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });
    taskItem.appendChild(removeBtn);

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

const filterTasks = (filter) => {
  const taskList = document.getElementById('taskList');
  taskList.childNodes.forEach((taskItem) => {
    switch (filter) {
      case 'all':
        taskItem.style.display = 'flex';
        break;
      case 'completed':
        if (taskItem.classList.contains('completed')) {
          taskItem.style.display = 'flex';
        } else {
          taskItem.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!taskItem.classList.contains('completed')) {
          taskItem.style.display = 'flex';
        } else {
          taskItem.style.display = 'none';
        }
        break;
    }
  });
};

document.getElementById('filterTasks').addEventListener('change', function () {
  filterTasks(this.value);
});
