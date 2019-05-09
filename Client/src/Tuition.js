import React, {Component} from 'react';
import 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import { connect } from 'react-redux'
import Button from 'react-bulma-components/lib/components/button';
import './Tuition.css'
import Notification from 'react-bulma-components/lib/components/notification';
import 'react-bulma-components/lib/components/form';

class Tuition extends Component {
    constructor(){
        super()
        this.state = {
            tuitionButton:'',
            parentIncome:'',
            reuslts:[],
            baseTuition:''
        }
    }

    componentDidMount(){
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let URL = `${baseUrl}id=${this.props.schoolId}&api_key=${apiKey}&&_fields=latest.cost.tuition.out_of_state`
        console.log(URL)
        fetch(URL)
        .then(response => response.json())
        .then(results => {
            this.setState({
                baseTuition:results.results[0]['latest.cost.tuition.out_of_state']
            })
        })
    }

    onParentIncome = (tuitionValue) => {
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let URL = `${baseUrl}id=${this.props.schoolId}&api_key=${apiKey}&&_fields=latest.cost.net_price.private.by_income_level.${tuitionValue},school.city`
        fetch(URL)
        .then(response => response.json())
        .then(results => {
            this.setState({
                results:results.results[0],
                parentIncome:results.results[0][`latest.cost.net_price.private.by_income_level.${tuitionValue}`],
                city:results.results[0]['school.city']
            })
        })
    }

    onCustomTuition = (e) => {
        this.setState({
            parentIncome:e.target.value
        })
    }

    onEstimateTotal = () => {
        let tuitionTotal = this.state.parentIncome
        this.props.onAddTotal(tuitionTotal)
        this.props.history.push('/main/3');
    }
    
    render(){
        return(
            <div>
                <Heading className = 'header'>
                    Now we have to figure out how much tuition you actually need to pay for {this.props.schoolName}.
                    Without aid, the tuition is ${this.state.baseTuition}. But chances are, you don't have to pay that much.
                </Heading>
                <Heading subtitle>
                    How much do your parents make? If you're not sure, give it your best guess!
                </Heading>
                <div className = 'tuition-buttons'>
                    <Button onClick = {() => this.onParentIncome('0-30000')}>
                        0 - $30,000
                    </Button>
                    <Button onClick = {() => this.onParentIncome('30001-48000')}>
                        $30,001 - $48,000
                    </Button>
                    <Button onClick = {() => this.onParentIncome('48001-75000')}>
                        $48,001 - $75,000
                    </Button>
                    <Button onClick = {() => this.onParentIncome('75001-110000')}>
                        $75,001 - $110,000
                    </Button>
                    <Button onClick = {() => this.onParentIncome('110001-plus')}>
                        $110,001 + 
                    </Button>
                </div>
                {this.state.parentIncome === null ? <h1>No estimate available :(</h1> : 
                this.state.parentIncome === '' ? <h1>Click one of the buttons above for an estiamte!</h1> : 
                <h1>Your estimate is shown below ↓</h1>}
                <Notification color='danger'>
                    If you're okay with the number below, go to the next page. If have your own tuition cost
                    in mind, or if a result wasn't returned, go ahead and add your own estimate. 
                </Notification>
                <div className = 'tuition-box'>
                    <input onChange = {(event) => {this.onCustomTuition(event)}}value = {this.state.parentIncome} placeholder = 'Tuition cost...' className = 'input'></input>
                </div>
                <Button onClick = {this.onEstimateTotal}>
                    Next
                </Button>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        schoolName: state.schoolName,
        schoolId:state.schoolId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (tuitionTotal) => dispatch({type: 'ADD_TUITION_TOTAL', tuitionTotal:tuitionTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Tuition)