const initialState = {
    schoolName: '',
    total:0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_COLLEGE':
            return{
                ...state,
                schoolName: action.schoolName,
                schoolId:action.schoolId
            }
        case 'ADD_TUITION_TOTAL':
            return{
                ...state,
                tuitionTotal:action.tuitionTotal,
                total:action.tuitionTotal
            }
        default:
            return{
                ...state
            }
    }

}

export default reducer