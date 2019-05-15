import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import Box from 'react-bulma-components/lib/components/box';
import { Input } from 'react-bulma-components/lib/components/form';
import './Monthly.css'

class Monthly extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodCost:this.props.foodTotal,
            phoneCost:this.props.phoneTotal,
            internetCost:this.props.internetTotal,
            restaurantCost:this.props.restaurantTotal
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    handleTextChange = (e,typeCost) => {
        this.setState({
            [typeCost]:e.target.value
        })
    }

    onBackButton = () => {
        this.props.history.push('/main/4');
    }

    onEstimateTotal = () => {
        let foodTotal = parseInt(this.state.foodCost)
        let restaurantTotal = parseInt(this.state.restaurantCost)
        let phoneTotal = parseInt(this.state.phoneCost)
        let internetTotal = parseInt(this.state.internetCost)
        this.props.onAddTotal(foodTotal,restaurantTotal,phoneTotal,internetTotal)
        this.props.history.push('/main/6');
    } 

    render(){
        return(
            <div>
                <TitleHeader />
                <Heading className = 'monthly-title'>
                Let's take care of some life costs.
                </Heading>
                <Box className = 'monthly-flex-item'>
                <img src = 'https://image.flaticon.com/icons/png/512/18/18399.png' />
                    <p>
                    Enter your grocery costs below. The easiest way to do this is to estimate your food costs per month,
                and multiply by 12 for the whole year. On average, you'll spend around $250 a month on food. That's <b>$3,000 </b>a year. If you're living on campus, you'll have a meal plan, which our estimate already took care of; in that case, the cost of groceries for the summer will be around <b>$750</b>
                    </p>
                    <InputNumber className = 'input' value = {this.state.foodCost} onChange = {(event) => this.handleTextChange(event, "foodCost")}></InputNumber>
                </Box>
                <Box className = 'restaurant monthly-flex-item'>
                <img src = 'https://image.flaticon.com/icons/png/512/35/35194.png' />
                    <p>
                    How often are you going to eat out? The easiest way to thing about it is on a per-week basis. As someone who's already done the whole college thing, 
                once a week pretty normal. That's the estimate given. Change it according to your dining habits.
                    </p>
                    <InputNumber className = 'input' value = {this.state.restaurantCost} onChange = {(event) => this.handleTextChange(event, "restaurantCost")}></InputNumber>
                </Box>
                <Box className = 'phone monthly-flex-item'>
                <img src = 'https://image.flaticon.com/icons/png/512/54/54718.png' />
                    <p>
                    Phones cost too much. Phone bills are, on average, 50/month. So about 600/year. You're probably going to buy a new charger once a year as well, so
                    let's add in an extra 20 just to be safe. 
                    </p>
                    <InputNumber className = 'input' value = {this.state.phoneCost} onChange = {(event) => this.handleTextChange(event, "phoneCost")}></InputNumber>
                </Box>
                <Box className = 'internet monthly-flex-item'>
                <img src = 'https://image.flaticon.com/icons/png/512/93/93158.png' />
                    <p>
                    Internet bills are tricky. If you're planning on living on campus, <u>change the number to 0</u>. Internet bills are usually $60/month, but you're 
                    probably going to split it among roommates. If you have multiple roommates, you'll pay a smaller percentage, but the plan will have to be better. The default
                    estimate is $30/month.  
                    </p>
                    <InputNumber className = 'input' value = {this.state.internetCost} onChange = {(event) => this.handleTextChange(event, "internetCost")}></InputNumber>
                </Box>
                <div className = 'nav-button-container'>
                <Button className = 'back-next-buttons' onClick = {this.onBackButton}>
                    <b>Back</b>
                </Button>  
                <Button className = 'back-next-buttons' onClick = {this.onEstimateTotal}>
                    <b>Next</b>
                </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        schoolId:state.schoolId,
        foodTotal:state.foodTotal,
        restaurantTotal:state.restaurantTotal,
        phoneTotal:state.phoneTotal,
        internetTotal:state.internetTotal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (foodTotal,restaurantTotal,phoneTotal,internetTotal) => dispatch({type: 'ADD_MONTHLY_TOTAL', foodTotal:foodTotal,restaurantTotal:restaurantTotal,phoneTotal:phoneTotal,internetTotal:internetTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Monthly)