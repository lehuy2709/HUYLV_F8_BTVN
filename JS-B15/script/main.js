
import { getData, deleteTask, addTask, postData, updateTask, putTask } from "./api.js"
import { renderProduct, renderProducts } from "./utils.js"

const input = document.querySelector('#taskInput')
const addBtn = document.querySelector('#addtask')
const tasks = document.querySelector('#tasks')

const renderData = async () => {
  const jobs = await getData()
  renderProducts(tasks, jobs)
}

renderData()

addBtn.addEventListener('click', async () => {
  const taskText = input.value.trim()
  if (taskText !== '') {
    await addTask(taskText, false)
    input.value = ''
    renderData()
  }
});

tasks.addEventListener('click', async (e) => {
  const delBtn = e.target.closest('.btn-delete')
  const editBtn = e.target.closest('.btn-edit')

  if (delBtn) {
    const id = delBtn.dataset.id
    await deleteTask(id)
    renderData()
  }

  if (editBtn) {
    const id = editBtn.dataset.id;
    const taskItem = editBtn.closest('.task-item')
    const currentText = taskItem.querySelector('.task-text').textContent

    taskItem.innerHTML = `
      <div class="group-input" style="flex: 1">
        <input type="text" class="task-text-edit" value="${currentText}" />
        <button class="btn-save">Save</button>
      </div>
    `

    const inputEdit = taskItem.querySelector('.task-text-edit')
    const saveBtn = taskItem.querySelector('.btn-save')

    inputEdit.focus()

    saveBtn.addEventListener('click', async () => {
      const newTitle = inputEdit.value.trim()
      if (newTitle && newTitle !== currentText) {
        await updateTask(id, { title: newTitle })
      }
      renderData();
    });

    inputEdit.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        const newTitle = inputEdit.value.trim()
        if (newTitle && newTitle !== currentText) {
          await putTask(id, { title: newTitle })
          renderData()
        }
      }
    })
  }

  const taskSpan = e.target.closest('.task-text')
  if(taskSpan){
    const taskItem = taskSpan.closest('.task-item ')
    const id = taskItem.dataset.id
    const taskText = taskSpan.textContent
    const isCompleted = taskItem.classList.toggle('done')

    if(id){
      await putTask(id,{title:taskText,completed:isCompleted})
    }
  }

})















  // const textSpan = e.target.closest('.task-text')
  // if (textSpan) {
  //   const taskItem = textSpan.closest('.task-item')
  //   console.log(taskItem);
    
  //   const taskText = taskItem.querySelector('.task-text').textContent;
  //   const id = taskItem.dataset.id
  //   const isCompleted = taskItem.classList.toggle('done')

  //   if (id) {
  //     await putTask(id, { title: taskText, completed: isCompleted })
  //   }
  // }