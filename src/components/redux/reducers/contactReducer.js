const initialState = [
    {
        id:0,
        name:"Laksh",
        number:9828234780,
        email:"0@gmail.com"
    },
    {
        id:1,
        name:"Test",
        number:8882837863,
        email:"1@gmail.com"
    }
]

const contactReducer = (state = initialState,action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT" : 
            const filter = state.filter(contact => contact.id !== action.payload && contact)
            state = filter;
            return state;
        default : return state
    }
}

export default contactReducer;