const initialState = {
    schoolName: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_COLLEGE':
            return{
                ...state,
                schoolName: action.schoolName,
                schoolId:action.schoolId
            }
        case 'ADD_TOTAL':
            return{
                ...state,
                total:action.total
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer