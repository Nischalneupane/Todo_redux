let initialData = []
const todoReducer = (state = initialData, action) => {
    switch(action.type){
        case "ADD_TODO":
            return [...state, { id: (new Date()).getTime(), 
                                title:action.payload.title, 
                                description:action.payload.desc, 
                                status:action.payload.status,
                                date: action.payload.date
                            }]
        
        case "REMOVE_TODO":
            let newList = state.filter(item => item.id != action.payload)
            return newList
        case "REMOVE_ALL":
            state = []
            return state
        default:
            return state
    }
}
export default todoReducer
