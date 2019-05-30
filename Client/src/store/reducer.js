const initialState = {
    userName: '',
    userId:null,
    schoolName: '',
    stateStatus:'out_of_state',
    schoolType:'',
    total:0,
    tuitionTotal:0,
    roomingTotal:0,
    textbookTotal:1200,
    laptopTotal:0,
    carTotal:0,
    foodTotal:3000,
    restaurantTotal:1000,
    phoneTotal:620,
    internetTotal:360,
    healthTotal:2000,
    carMaintTotal:0,
    spotifyTotal:60,
    amazonPrimeTotal:59,
    netflixTotal:108,
    drinkTotal:0,
    alcoholTotal:0,
    clubTotal:0,
    clothingTotal:20,
    videoTotal:0,
    customTotal:0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USERNAME' :
            return {
                ...state,
                userName:action.userName,
                userId:action.userId
            }
        case 'RESET_STATE_STATUS':
            return{
                ...state,
                stateStatus:action.stateStatus
            }
        case 'SELECT_COLLEGE':
            return{
                ...state,
                schoolName: action.schoolName,
                schoolId:action.schoolId,
                schoolType:action.schoolType
            }
        case 'ADD_STATE_STATUS':
            return{
                ...state,
                stateStatus:action.stateStatus
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
                carTotal:action.carTotal,
                total:state.tuitionTotal + state.roomingTotal + action.textbookTotal + action.laptopTotal + action.carTotal
            }
        case 'ADD_MONTHLY_TOTAL':
            return{
                ...state,
                foodTotal:action.foodTotal,
                phoneTotal:action.phoneTotal,
                internetTotal:action.internetTotal,
                healthTotal:action.healthTotal,
                carMaintTotal:action.carMaintTotal,
                total:state.tuitionTotal + state.roomingTotal + state.textbookTotal + state.laptopTotal + state.carTotal + action.foodTotal + action.restaurantTotal + action.phoneTotal + action.internetTotal + action.healthTotal + action.carMaintTotal
            }
        case 'ADD_SUBSCRIPTIONS_TOTAL':
            return{
                ...state,
                spotifyTotal:action.spotifyTotal,
                amazonPrimeTotal:action.amazonPrimeTotal,
                netflixTotal:action.netflixTotal,
                total:state.tuitionTotal + state.roomingTotal + state.textbookTotal + state.laptopTotal + state.carTotal + state.foodTotal +  state.restaurantTotal + state.phoneTotal + state.internetTotal + state.healthTotal + state.carMaintTotal + action.spotifyTotal + action.amazonPrimeTotal + action.netflixTotal
            }
        case 'ADD_MISC_TOTAL':
            return{
                ...state,
                drinkTotal:action.drinkTotal,
                alcoholTotal:action.alcoholTotal,
                clubTotal:action.clubTotal,
                clothingTotal:action.clothingTotal,
                videoTotal:action.videoTotal,
                customTotal:action.customTotal,
                total:state.tuitionTotal + state.roomingTotal + state.textbookTotal + state.laptopTotal + state.carTotal + state.foodTotal +  state.restaurantTotal + state.phoneTotal + state.internetTotal + state.healthTotal + state.carMaintTotal + state.spotifyTotal + state.amazonPrimeTotal + state.netflixTotal
                + action.drinkTotal + action.alcoholTotal + action.clubTotal + action.clothingTotal + action.videoTotal + action.customTotal
            }
        case 'SEARCH_AGAIN':
            return{
                ...initialState
            }
        default:
            return{
                ...state
            }
    }

}

export default reducer