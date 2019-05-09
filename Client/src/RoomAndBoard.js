import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';

class RoomAndBoard extends Component {
    constructor(){
        super()
        this.state = {
            city:''
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
    }

    render(){
        return(
            <div>
                <Heading subtitle>
                    Now that we got tuition of the way, let's look at living expenses. Most likely, the first year you'll live on campus. If you do, we may 
                    have an estimate for you already. If you want to live off campus in an apartment, that's fine too. Just put in your own estimates.
                </Heading>
                <h1>You're going to be in {this.state.city}...let's calculate some living expenses now</h1>
                <p>Do you want to live on campus?
                    <input onClick = {(event) => this.onClickRoomAndBoard(event)} type = 'checkbox'></input>
                    <input disabled = {this.state.onCampusInputBox} value = {this.state.roomAndBoard}/>
                </p>
                <p>If not, enter in your own apartment rent for 9 months (or if you feel the given on-campus estimate is inaccurate) 
                    <input onChange = {(event) => this.handleOffCampusHousing(event)} disabled = {!this.state.onCampusInputBox}/>
                </p>
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

export default connect(mapStateToProps)(RoomAndBoard)