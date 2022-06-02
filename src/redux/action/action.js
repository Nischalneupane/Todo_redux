export const addTodo = (title, desc, status, date) => {
    return {
        type: "ADD_TODO",
        payload: {
            title: title,
            desc: desc,
            status: status,
            date: date
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: id
    }
}

export const removeAll = () => {
    return {
        type: "REMOVE_ALL",
    }
}