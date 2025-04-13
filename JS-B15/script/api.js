const baseUrl = 'https://api-todolist-multiuser.onrender.com/Huy/todos'

const getData = async (endpoint) => {
    const response = await fetch(`${baseUrl}`)
    return await response.json()
}

const deleteTask = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'delete'
    })
    return await response.json()
}

const postData = async (data) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json()
};

const addTask = async (title, completed = false) => {
    return await postData({ title, completed })
}

const updateTask = async (id, data) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await response.json()
}

const putTask = async (id, data) => {
    return await updateTask(id, data)
};

export {
    getData, deleteTask, addTask, postData,updateTask,putTask
}