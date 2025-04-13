const renderProduct = (item) => {
  const done = item.completed ? 'done' : ''
  return `
    <li class="task-item ${done}" data-id="${item.id}">
        <span class="task-text">${item.title}</span>
        <div class="task-actions">
          <button data-id="${item.id}" class="btn-edit bi bi-pencil-square"></button>
          <button data-id="${item.id}" class="btn-delete bi bi-trash3"></button>
        </div>
      </li>
    `
}

const renderProducts = (tasks, items) => {
  tasks.innerHTML = items.map(item => renderProduct(item)).join('')
};

export { renderProduct, renderProducts }