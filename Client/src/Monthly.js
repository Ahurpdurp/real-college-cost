import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import { Input } from 'react-bulma-components/lib/components/form';


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
                <Heading subtitle>
                    Time to take care of some monthly costs. We've taken care of the big picture stuff, but those pesky small things
                    like your Spotify bill can really add up. But hey, this'll help you map it out and be prepared. 
                </Heading>
                <Heading subtitle size = {5}>Enter your grocery costs below. The easiest way to do this is to estimate your food costs per month,
                and multiply by 12 for the whole year. On average, you'll spend around $250 a month on food. That's $3,000 a year. If you're living on campus, you'll have a meal plan, which our estimate already took care of. 
                But, if you're going that route, you still have to pay for summer food, which will be 250 x 3 = $750, unless you're going to live at home. Only worry about groceries for now,
                 there's a section later for eating out. </Heading>
                <InputNumber className = 'input' value = {this.state.foodCost} onChange = {(event) => this.handleTextChange(event, "foodCost")}></InputNumber>
                <Heading subtitle size = {5}>How often are you going to eat out? The easiest way to thing about it is on a per-week basis. As someone who's already done the whole college thing, 
                once a week pretty normal. That's the estimate given below.</Heading>
                <InputNumber className = 'input' value = {this.state.restaurantCost} onChange = {(event) => this.handleTextChange(event, "restaurantCost")}></InputNumber>
                <Heading subtitle size = {5}>Next, let's look at some bills. There's no easy way to do this but to list all the common 
                bills for college students, so let's get to business. Remember, we're doing it by the year, so if you're living on campus, then some of these
                you only need to worry about the summer. If don't need to pay for this, change the number to 0. </Heading>
                <Heading subtitle size = {5}>Phone bill. On average, 50/month, so 600/year.</Heading>
                <InputNumber className = 'input' value = {this.state.phoneCost} onChange = {(event) => this.handleTextChange(event, "phoneCost")}></InputNumber>
                <Heading subtitle size = {5}>Internet bill. On average, it's about 60/month. If you have roommates, you'll split the bill, but you'll probably need a stronger 
                plan. 30/month or 360/year is a safe estimate. </Heading>
                <InputNumber className = 'input' value = {this.state.internetCost} onChange = {(event) => this.handleTextChange(event, "internetCost")}></InputNumber>
                <Button onClick = {this.onEstimateTotal}>
                    Next
                </Button>
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