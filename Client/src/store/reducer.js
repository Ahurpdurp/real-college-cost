const initialState = {
    schoolName: '',
    total:0,
    tuitionTotal:0,
    roomingTotal:0,
    textbookTotal:0,
    laptopTotal:0
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
        case 'ADD_ROOMING_TOTAL':
            return{
                ...state,
                roomingTotal:action.roomingTotal,
                total:state.tuitionTotal + action.roomingTotal
            }
        case 'ADD_TEXTBOOK_TOTAL':
            return{
                ...state,
                textbookTotal:action.textbookTotal,
                laptopTotal:action.laptopTotal,
                total:state.tuitionTotal + state.roomingTotal + action.textbookTotal + action.laptopTotal
            }
        default:
            return{
                ...state
            }
    }

}

export default reducer