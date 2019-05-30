import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import Box from 'react-bulma-components/lib/components/box';
import './Monthly.css'
import { parse } from '@babel/core';

class Monthly extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodCost:this.props.foodTotal,
            phoneCost:this.props.phoneTotal,
            internetCost:this.props.internetTotal,
            restaurantCost:this.props.restaurantTotal,
            healthCost:this.props.healthTotal,
            carMaintCost:this.props.carMaintTotal
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
        let foodTotal = parseInt(this.state.foodCost) || 0
        let restaurantTotal = parseInt(this.state.restaurantCost) || 0
        let phoneTotal = parseInt(this.state.phoneCost) || 0
        let internetTotal = parseInt(this.state.internetCost) || 0
        let healthTotal = parseInt(this.state.healthCost) || 0
        let carMaintTotal = parseInt(this.state.carMaintCost) || 0
        this.props.onAddTotal(foodTotal,restaurantTotal,phoneTotal,internetTotal,healthTotal,carMaintTotal)
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
                <img alt = 'grocery-icon' src = 'https://image.flaticon.com/icons/png/512/18/18399.png' />
                    <p>
                    Enter your grocery costs below. The easiest way to do this is to estimate your food costs per month,
                and multiply by 12 for the whole year. On average, you'll spend around $250 a month on food. That's <b>$3,000 </b>a year. If you're living on campus, you'll have a meal plan, which our estimate already took care of; in that case, the cost of groceries for the summer will be around <b>$750</b>
                    </p>
                    <InputNumber className = 'input' value = {this.state.foodCost} onChange = {(event) => this.handleTextChange(event, "foodCost")}></InputNumber>
                </Box>
                <Box className = 'restaurant monthly-flex-item'>
                <img alt = 'dining-icon' src = 'https://image.flaticon.com/icons/png/512/35/35194.png' />
                    <p>
                    How often are you going to eat out? The easiest way to thing about it is on a per-week basis. As someone who's already done the whole college thing, 
                once a week pretty normal. That's the estimate given. Change it according to your dining habits.
                    </p>
                    <InputNumber className = 'input' value = {this.state.restaurantCost} onChange = {(event) => this.handleTextChange(event, "restaurantCost")}></InputNumber>
                </Box>
                <Box className = 'phone monthly-flex-item'>
                <img alt = 'phone-icon' src = 'https://image.flaticon.com/icons/png/512/54/54718.png' />
                    <p>
                    Phones cost too much. Phone bills are, on average, 50/month. So about 600/year. You're probably going to buy a new charger once a year as well, so
                    let's add in an extra 20 just to be safe. 
                    </p>
                    <InputNumber className = 'input' value = {this.state.phoneCost} onChange = {(event) => this.handleTextChange(event, "phoneCost")}></InputNumber>
                </Box>
                <Box className = 'internet monthly-flex-item'>
                <img alt = 'wifi-icon' src = 'https://image.flaticon.com/icons/png/512/93/93158.png' />
                    <p>
                    Internet bills are tricky. If you're planning on living on campus, <u>change the number to 0</u>. Internet bills are usually $60/month, but you're 
                    probably going to split it among roommates. If you have multiple roommates, you'll pay a smaller percentage, but the plan will have to be better. The default
                    estimate is $30/month.  
                    </p>
                    <InputNumber className = 'input' value = {this.state.internetCost} onChange = {(event) => this.handleTextChange(event, "internetCost")}></InputNumber>
                </Box>
                <Box className = 'health monthly-flex-item'>
                <img alt = 'wifi-icon' src = 'https://image.flaticon.com/icons/svg/809/809957.svg' />
                    <p>
                    Let's think about health costs. According ot the American College Health Association, the average student spends about $2,000 a year on health insurance (<a rel="noopener noreferrer" href = 'https://www.acha.org/ACHA/Networks/Committees/SHIBP_Coalition.aspx'>Source</a>), so that's 
                    the number we'll use for our estimate. If you have other medicinal costs, make sure to add the annual cost of it to this total.
                    </p>
                    <InputNumber className = 'input' value = {this.state.healthCost} onChange = {(event) => this.handleTextChange(event, "healthCost")}></InputNumber>
                </Box>
                <Box className = 'car monthly-flex-item'>
                <img alt = 'wifi-icon' src = 'https://image.flaticon.com/icons/svg/1514/1514344.svg' />
                    <p>
                    We already had a car cost section, but that was for the car itself. The main costs are insurance, gas, and maintenance. Insurance for a college student will be around $300 a month, so about $3,600 a year. Gas will be about $1,500 a month, and 
                    you should always put aside about $500 a year for maintenance, inspection, registration, etc. That's roughly <u>$5,600</u> a year for car costs. The default value will be 0 because many students won't own cars. If you know you're going to be paying for everything,
                    $5,600 is a good estimate to put down. 
                    </p>
                    <InputNumber className = 'input' value = {this.state.carMaintCost} onChange = {(event) => this.handleTextChange(event, "carMaintCost")}></InputNumber>
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
        healthTotal:state.healthTotal,
        carMaintTotal:state.carMaintTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (foodTotal,restaurantTotal,phoneTotal,internetTotal,healthTotal,carMaintTotal) => dispatch({type: 'ADD_MONTHLY_TOTAL', foodTotal:foodTotal,restaurantTotal:restaurantTotal,phoneTotal:phoneTotal,internetTotal:internetTotal, healthTotal:healthTotal,carMaintTotal:carMaintTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Monthly)