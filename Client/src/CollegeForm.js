import React, {Component} from 'react'
import { connect } from 'react-redux'

class CollegeForm extends Component{
    constructor(){
        super()
        this.state = {
            tuitionButton:'',
            parentIncome:0
        }
    }

    onParentIncome = (tuitionValue,tuitionButton) => {
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let URL = `${baseUrl}id=${this.props.schoolId}&api_key=${apiKey}&&_fields=latest.cost.net_price.private.by_income_level.${tuitionValue},school.city`
        console.log(URL)
        fetch(URL)
        .then(response => response.json())
        .then(results => {
            console.log(results)
            this.setState({
                parentIncome:results.results[0][`latest.cost.net_price.private.by_income_level.${tuitionValue}`],
                city:results.results[0]['school.city']
            })
        })
    
        this.setState({
            tuitionButton:tuitionButton
        })
    }

    render(){
        return(
            <div>
                <h1>Let's determine the true cost of {this.props.schoolName}. Answer the questions below :)</h1>
                <h2>1. How Much Do You Parents Make? (Give it your best guess...)</h2>
                <div>
                    <label>
                    <input value = '1' checked = {this.state.tuitionButton === '1'} type = 'radio' onClick = {() => this.onParentIncome('0-30000','1')} />                        
                        0 - $30,000</label>
                    <label>
                    <input value = '2' checked = {this.state.tuitionButton === '2'} type = 'radio' onClick = {() => this.onParentIncome('30001-48000','2')} />                        
                        $30,001 - $48,000</label>
                    <label>
                    <input value = '3' checked = {this.state.tuitionButton === '3'} type = 'radio' onClick = {() => this.onParentIncome('48001-75000','3')} />                        
                        $48,001 - $75,000</label>
                    <label>
                    <input value = '4' checked = {this.state.tuitionButton === '4'} type = 'radio' onClick = {() => this.onParentIncome('75001-110000','4')} />                        
                        $75,001 - $110,000</label>
                    <label>
                    <input value = '5' checked = {this.state.tuitionButton === '5'} type = 'radio' onClick = {() => this.onParentIncome('110001-plus','5')} />                        
                        $110,001+</label>
                </div>
                <h1>{this.state.parentIncome}</h1>
                <h1>{this.state.city}</h1>
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

export default connect(mapStateToProps)(CollegeForm)
