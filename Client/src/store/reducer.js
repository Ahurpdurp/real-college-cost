const initialState = {
    schoolName: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_COLLEGE':
            return{
                ...state,
                schoolName: action.schoolName
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer