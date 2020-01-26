
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log('This is login', state)
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case  "MORE":{
            console.log('MORE')
            return {
                ...state,
                vacancies: action.payload.vacancies
            }
        }
        default:
            return state;
    }
}

export default authReducer;