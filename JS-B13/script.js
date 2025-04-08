const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addtask');
const tasks = document.querySelector('#tasks');

let taskList = [];

const renderTasks = () => {
  tasks.innerHTML = taskList.map((task, index) => `
    <li class="task-item">
      <span class="task-text" onclick="completed(${index})">${task}</span>
      <div class="task-actions">
        <button onclick="editTask(${index})" class="bi bi-pencil-square"></button>
        <button onclick="deleteTask(${index})" class="bi bi-trash3"></button>
      </div>
    </li>
  `).join('');
}

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== '') {
    taskList.push(taskText);
    input.value = '';
    renderTasks();
  }
});

const deleteTask = (index) => {
  taskList.splice(index, 1)
  renderTasks();
}

const selectById = (index) => {
  const currentText = taskList[index];
  return `
    <div class="group-input" style="flex: 1">
      <input class="task-text"  type="text" value="${currentText}" />
      <button class="add" onclick="saveTask(${index})">Save</button>
    </div>
  `;
};

const editTask = (index) => {
  const taskItem = document.querySelectorAll('.task-item')[index];

  taskItem.innerHTML = selectById(index);

  const input = taskItem.querySelector('.task-text');
  input.focus();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveTask(index);
    }
  });
};

const saveTask = (index) => {
  const taskItem = document.querySelectorAll('.task-item')[index];
  const input = taskItem.querySelector('.task-text');
  const newValue = input.value.trim();

  if (newValue !== '') {
    taskList[index] = newValue;
    renderTasks();
  }
};

const completed = (index) => {
  const taskItem = document.querySelectorAll('.task-item')[index];
  taskItem.classList.toggle('done');
}