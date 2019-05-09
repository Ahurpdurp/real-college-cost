import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';


class Monthly extends Component {
    constructor(){
        super()
        this.state = {
            textbookCost:1200,
            laptopCost:0
        }
    }

    handleTextChange = (e,typeCost) => {
        this.setState({
            [typeCost]:e.target.value
        })
    }

    onEstimateTotal = () => {
        let textbookTotal = parseInt(this.state.textbookCost)
        let laptopTotal = parseInt(this.state.laptopCost)
        this.props.onAddTotal(textbookTotal,laptopTotal)
        this.props.history.push('/main/5');
    } 

    render(){
        return(
            <div>
                <Heading subtitle>
                    Time to take care of some monthly costs. We've taken care of the big picture stuff, but those pesky small things
                    like your Spotify bill can really add up. But hey, this'll help you map it out and be prepared. 
                </Heading>
                <Heading subtitle size = {5}>Enter your food costs below. The easiest way to do this is to estimate your food costs per month,
                and multiply by 12 for the whole year. On average, you'll spend around $250 a month on food. That's $3,000 a year. If you're living on campus, you'll have a meal plan, which our estimate already took care of. 
                But, if you're going that route, you still have to pay for summer food, which will be 250 x 3 = $750, unless you're going to live at home.</Heading>
                <input className = 'input' value = {this.state.textbookCost} onChange = {(event) => this.handleTextChange(event, "textbookCost")}></input>
                <Heading subtitle size = {5}>Estimated Laptop Cost: </Heading>
                <input className = 'input' value = {this.state.laptopCost} onChange = {(event) => this.handleTextChange(event, "laptopCost")}></input>
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
        schoolId:state.schoolId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (textbookTotal,laptopTotal) => dispatch({type: 'ADD_TEXTBOOK_TOTAL', textbookTotal:textbookTotal,laptopTotal:laptopTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Monthly)