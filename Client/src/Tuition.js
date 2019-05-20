import React, {Component} from 'react';
import 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import { connect } from 'react-redux'
import Button from 'react-bulma-components/lib/components/button';
import './Tuition.css'
import 'react-bulma-components/lib/components/form';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import Message from 'react-bulma-components/lib/components/message';
import Switch from '@material-ui/core/Switch';


class Tuition extends Component {
    constructor(props){
        super(props)
        this.state = {
            tuitionButton:'',
            parentIncome:this.props.tuitionTotal,
            results:[],
            baseTuition:'',
            tuitionDisabled:false
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let stateStatus = this.props.stateStatus
        let URL = `${baseUrl}id=${this.props.schoolId}&api_key=${apiKey}&&_fields=latest.cost.tuition.${stateStatus}`
        console.log(URL)
        fetch(URL)
        .then(response => response.json())
        .then(results => {
            this.setState({
                baseTuition:results.results[0][`latest.cost.tuition.${stateStatus}`]
            })
        })
        .then(() => {
        if(this.props.stateStatus === 'in_state'){
            this.setState({
                parentIncome:this.state.baseTuition
            })
            }
        })

    }

    onParentIncome = (tuitionValue) => {
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let schoolType = this.props.schoolType
        let URL = `${baseUrl}id=${this.props.schoolId}&api_key=${apiKey}&&_fields=latest.cost.net_price.${schoolType}.by_income_level.${tuitionValue},school.city`
        console.log(URL)
        fetch(URL)
        .then(response => response.json())
        .then(results => {
            this.setState({
                results:results.results[0],
                parentIncome:results.results[0][`latest.cost.net_price.${schoolType}.by_income_level.${tuitionValue}`],
                city:results.results[0]['school.city']
            })
        })
    }

    onBackButton = () => {
        this.props.history.push('/main');
    }

    onCustomTuition = (e) => {
        this.setState({
            parentIncome:e.target.value
        })
    }

    onEstimateTotal = () => {
        let tuitionTotal = 0
        if(!this.state.tuitionDisabled){
            tuitionTotal = parseInt(this.state.parentIncome)     
        }
        this.props.onAddTotal(tuitionTotal)
        this.props.history.push('/main/3');
    }

    onTuitionSwitch = (e) => {
        this.setState({
            tuitionDisabled:e.target.checked
        })
    }
    


    render(){
        return(
            <div>
                <TitleHeader />
                {this.props.stateStatus !== 'in_state' ?
                <div>
                <Heading subtitle className = 'header-tuition'>
                    Now we have to figure out how much <b>yearly</b> tuition you actually need to pay for at {this.props.schoolName}.
                    Without aid, the tuition is <b>${this.state.baseTuition.toLocaleString()}</b>. But chances are, you don't have to pay that much. <u>How much do your parents make?</u> If you're not sure, give it your best guess!
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
                </div> :              
                <Heading subtitle className = 'header-tuition-alt'>
                    Normally we'd calculate financial aid based on your parents' incomes, but since you selected in-state, we don't need to do that.
                    Your estimated tuition cost is <b>${this.state.baseTuition.toLocaleString()}</b>. 
                </Heading>
                }
                <div className = 'tuition-box'>
                    <InputNumber disabled = {this.state.tuitionDisabled} onChange = {(event) => {this.onCustomTuition(event)}} value = {this.state.parentIncome} placeholder = 'Tuition cost...' className = 'input'></InputNumber>
                </div>
                <Message className = 'is-primary estimate-text'>
                    <Message.Header className = 'estimate-header'>
                    {this.state.parentIncome === null ? <h1>No estimate available :(</h1> : this.state.parentIncome === '' ? <h1>Click one of the buttons above for an estimate!</h1> : 
                <h1>Your estimate is shown above ↑</h1>}
                    </Message.Header>
                    <Message.Body>
                        If you're okay with the number above, go to the next page. If have your own tuition cost
                        in mind, or if a result wasn't returned, go ahead and add your own estimate. If you know you're taking 
                        out a loan or your parents are helping out, adjust accordingly. If you want to estimate college costs without 
                        thinking about tuition (ha ha...), check the box below. 
                    </Message.Body>
                    </Message>
                <div className = 'tuition-flex-label'>
                    <label className = 'tuition-label'>Click below to leave tuition out of the estimate</label>
                    <Switch color="primary" onClick = {(event) => this.onTuitionSwitch(event)}/>
                </div>
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
        schoolName: state.schoolName,
        schoolId:state.schoolId,
        tuitionTotal:state.tuitionTotal,
        stateStatus:state.stateStatus,
        schoolType:state.schoolType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (tuitionTotal) => dispatch({type: 'ADD_TUITION_TOTAL', tuitionTotal:tuitionTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Tuition)