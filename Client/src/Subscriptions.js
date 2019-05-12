import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'


class Subscriptions extends Component {
    constructor(){
        super()
        this.state = {
            spotifyCost:60,
            amazonPrimeCost:59,
            netflixCost:108
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
        let spotifyTotal = parseInt(this.state.spotifyCost)
        let amazonPrimeTotal = parseInt(this.state.amazonPrimeCost)
        let netflixTotal = parseInt(this.state.netflixCost)
        this.props.onAddTotal(spotifyTotal,amazonPrimeTotal,netflixTotal)
        this.props.history.push('/main/7');
    } 

    render(){
        return(
            <div>
                <TitleHeader />
                <Heading>Subscription Time! For any of these, if you don't want it or you have a shared plan, change the number accordingly.</Heading>
                <Heading subtitle size = {5}>Amazon Prime. This will save your ass countless times. Plus, with the student discount, it's only $59/year and you get free streaming. 
                If you're going to get it, just get it for the year.</Heading>
                <input className = 'input' value = {this.state.amazonPrimeCost} onChange = {(event) => this.handleTextChange(event, "amazonPrimeCost")}></input>
                <Heading subtitle size = {5}>Spotify. If you don't get at least the student plan for 5/month, you're trolling. Or get some friends and get the family plan. Hulu's also included with this! </Heading>
                <input className = 'input' value = {this.state.spotifyCost} onChange = {(event) => this.handleTextChange(event, "spotifyCost")}></input>
                <Heading subtitle size = {5}>Netflix. "I can't study without Netflix in the background" is a pretty popular belief. If you're one of those people, it's gonna cost $9/month, or 108 a year. 
                But if you get three friends, the four of you can get the Premium and only have to chip in four dollars a month. If you want HBO, you can get the student discount for 10/month...but let's be honest, 
                someone will probably let you watch Game of Thrones with them.</Heading>
                <input className = 'input' value = {this.state.netflixCost} onChange = {(event) => this.handleTextChange(event, "netflixCost")}></input>
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
      onAddTotal: (spotifyTotal,amazonPrimeTotal,netflixTotal) => dispatch({type: 'ADD_SUBSCRIPTIONS_TOTAL', spotifyTotal:spotifyTotal,amazonPrimeTotal:amazonPrimeTotal,netflixTotal:netflixTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Subscriptions)