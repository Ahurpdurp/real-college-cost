import React, {Component} from 'react'
import { connect } from 'react-redux'

class CollegeForm extends Component{
    constructor(){
        super()
        this.state = {
            tuitionButton:'',
            parentIncome:0,
            reuslts:[],
            roomAndBoard:0,
            onCampusInputBox: true,
            offCampusRoomAndBoard:0,
            textBookCost:0
        }
    }

    componentDidMount(){
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let URL = `${baseUrl}id=${this.props.schoolId}&api_key=${apiKey}&&_fields=school.city`
        fetch(URL)
        .then(response => response.json())
        .then(results => {
            this.setState({
                city:results.results[0]['school.city']
            })
        })

        fetch("http://localhost:8080/rooming/" + this.props.schoolId)
        .then(response => response.json())
        .then(results => {
            this.setState({
                roomAndBoard:results.roomAndBoard
            })
        })
    }

    onParentIncome = (tuitionValue,tuitionButton) => {
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
    
        this.setState({
            tuitionButton:tuitionButton
        })
    }

    onClickRoomAndBoard = (e) => {
        this.setState({
            onCampusInputBox:!e.target.checked
        })
    }

    handleOffCampusHousing = (e) => {
        this.setState({
            offCampusRoomAndBoard:e.target.value
        })
    }

    handleTextbookCost = (e) => {
        this.setState({
            textBookCost:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Let's determine the true annual cost of {this.props.schoolName}. Answer the questions below :). Remember, we're going for a yearly estimate</h1>
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
                {this.state.parentIncome === 0 ? <h1>You either haven't selected an income, or there's no estimate available :(</h1> : <h1>With financial aid, your estimated tuition is ${this.state.parentIncome}</h1>
}
                <h1>You're going to be in {this.state.city}...let's calculate some living expenses now</h1>
                <p>Do you want to live on campus?
                    <input onClick = {(event) => this.onClickRoomAndBoard(event)} type = 'checkbox'></input>
                    <input disabled = {this.state.onCampusInputBox} value = {this.state.roomAndBoard}/>
                </p>
                <p>If not, enter in your own apartment rent for 9 months (or if you feel the given on-campus estimate is inaccurate) 
                    <input onChange = {(event) => this.handleOffCampusHousing(event)} disabled = {!this.state.onCampusInputBox}/>
                </p>
                <p>Textbooks are expensive. College Board estimates students spend $1,200 dollars a year. Obviously, this is going to
                    differ between majors and school, so give it your best guess. Or just enter $1,200.  
                    $<input placeholder = '1,200' onChange = {(event) => this.handleTextbookCost(event)} />
                </p>
                
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
