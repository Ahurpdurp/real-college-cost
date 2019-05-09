import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

class RoomAndBoard extends Component {
    constructor(){
        super()
        this.state = {
            city:'',
            roomAndBoard:''
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

    handleTextChange = (e) => {
        this.setState({
            roomAndBoard:e.target.value
        })
    } 

    onEstimateTotal = () => {
        let roomingTotal = parseInt(this.state.roomAndBoard)
        this.props.onAddTotal(roomingTotal)
        this.props.history.push('/main/4');
    }

    render(){
        return(
            <div>
                <Heading subtitle>
                    Now that we got tuition of the way, let's look at living expenses. Most likely, the first year you'll live on campus. If you do, we may 
                    have an estimate for you already. If you want to live off campus in an apartment, that's fine too. Just put in your own estimates.
                </Heading>
                <Heading subtitle>You're going to be in {this.state.city}...let's calculate some living expenses now. If you see something 
                already filled out below, that's our best estimate based on preexisting data for <b>on campus housing.</b>. If it's blank or you know you want to live 
                off campus (most people don't, at least for the first year), fill out your own estimate. Remember, we're calculating your costs for <u>one year!</u></Heading>
                <input className = 'input' value = {this.state.roomAndBoard} onChange = {(event) => this.handleTextChange(event)}></input>
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
      onAddTotal: (roomingTotal) => dispatch({type: 'ADD_ROOMING_TOTAL', roomingTotal:roomingTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(RoomAndBoard)