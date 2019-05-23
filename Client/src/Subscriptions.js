import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import './Subscriptions.css'

class Subscriptions extends Component {
    constructor(props){
        super(props)
        this.state = {
            spotifyCost:this.props.spotifyTotal,
            amazonPrimeCost:this.props.amazonPrimeTotal,
            netflixCost:this.props.netflixTotal
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
        this.props.history.push('/main/5');
    }

    onEstimateTotal = () => {
        let spotifyTotal = parseInt(this.state.spotifyCost)
        let amazonPrimeTotal = parseInt(this.state.amazonPrimeCost)
        let netflixTotal = parseInt(this.state.netflixCost)
        this.props.onAddTotal(spotifyTotal,amazonPrimeTotal,netflixTotal)
        this.props.history.push('/main/7');
    } 

    handleHomeRedirect = () => {
        if(window.confirm("Go back to the home page? All progress will be lost.")){
            this.props.history.push('/')
            window.location.reload();
        }
    }
    
    render(){
        return(
            <div>
                <div className = 'faq-button'>
                    <Button onClick = {this.handleHomeRedirect}>
                        Home
                    </Button> 
                </div>
                <TitleHeader />
                <div className = 'subscription-header'>
                    <Heading style = {{'textAlign':'center'}}>Subscription Time!</Heading>
                    <Heading style = {{'textAlign':'center'}} subtitle>As per usual, edit as needed</Heading>
                </div>
                <div className = 'subscriptions-flex'>
                <Card className = 'spotify subscriptions-card'>
                    <Card.Image size={64} src="https://image.flaticon.com/icons/png/512/87/87409.png" />
                    <Card.Content className = 'subscriptions-content'>            
                        <Heading size={4}>Music</Heading>
                        <Content>
                        Spotify. The student discount is <b>$5/month</b>, and it also includes Hulu for free. 
                        </Content>
                        <InputNumber className = 'sub-input1 input' value = {this.state.spotifyCost} onChange = {(event) => this.handleTextChange(event, "spotifyCost")}></InputNumber>
                    </Card.Content>
                </Card>
                <Card className = 'amzn subscriptions-card'>
                    <Card.Image size={64} src="https://www.shareicon.net/data/128x128/2016/07/10/119668_media_512x512.png" />
                    <Card.Content>            
                        <Heading size={4}>Amazon Prime</Heading>
                        <Content>
                        Optional, but insanely useful. Plus, with the student discount, it's only <b>$59/year</b> and you get free streaming. 
                        </Content>
                        <InputNumber className = 'sub-input1 input' value = {this.state.amazonPrimeCost} onChange = {(event) => this.handleTextChange(event, "amazonPrimeCost")}></InputNumber>
                    </Card.Content>
                </Card>
                <Card className = 'nflx subscriptions-card'>
                    <Card.Image size={64} src="https://image.flaticon.com/icons/png/512/68/68966.png" />
                    <Card.Content>            
                        <Heading size={4}>Streaming Services</Heading>
                        <Content>
                        Netflix is life. That's $9/month, or <b>$108/year</b>. With three friends, the Premium service is <b>$4/month</b> each. HBO's <b>$10/month</b> with the student discount. The default estimate is for Netflix.
                        </Content>
                        <InputNumber className = 'sub-input input' value = {this.state.netflixCost} onChange = {(event) => this.handleTextChange(event, "netflixCost")}></InputNumber>
                    </Card.Content>
                </Card>
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
        total: state.total,
        schoolId:state.schoolId,
        spotifyTotal:state.spotifyTotal,
        amazonPrimeTotal:state.amazonPrimeTotal,
        netflixTotal:state.netflixTotal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (spotifyTotal,amazonPrimeTotal,netflixTotal) => dispatch({type: 'ADD_SUBSCRIPTIONS_TOTAL', spotifyTotal:spotifyTotal,amazonPrimeTotal:amazonPrimeTotal,netflixTotal:netflixTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Subscriptions)