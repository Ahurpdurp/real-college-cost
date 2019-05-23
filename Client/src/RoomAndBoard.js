import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import "./RoomAndBoard.css"
import Image from 'react-bulma-components/lib/components/image';
import Hero from 'react-bulma-components/lib/components/hero';
import roomandboard from './roomandboard.json'
import Switch from '@material-ui/core/Switch';

class RoomAndBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            city:'',
            roomAndBoard:this.props.roomingTotal,
            roomAndBoardDisabled:false
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
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
        let school = roomandboard.find(x => x.UnitID === this.props.schoolId)
        this.setState({
            roomAndBoard:school.roomAndBoard
        })
    }

    onBackButton = () => {
        this.props.history.push('/main/2');
    }

    handleTextChange = (e) => {
        this.setState({
            roomAndBoard:e.target.value
        })
    } 

    onEstimateTotal = () => {
        let roomingTotal = 0 
        if(!this.state.roomAndBoardDisabled){
            roomingTotal = parseInt(this.state.roomAndBoard)
        }
        this.props.onAddTotal(roomingTotal)
        this.props.history.push('/main/4');
    }

    onRoomingSwitch = (e) => {
        this.setState({
            roomAndBoardDisabled:e.target.checked
        })
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
                <Image src = 'https://www.shareicon.net/data/128x128/2016/09/26/835174_buildings_512x512.png'/>
                <Hero className = 'housing-hero' color = 'white' >
                    <Hero.Body>
                    <Heading className = 'housing-intro' subtitle>Housing time! {this.props.schoolName} is in <u>{this.state.city}</u>. If you see something 
                    already filled out below, that's our best estimate based on preexisting data for <b>on campus housing.</b>. If it's blank or you know you want to live 
                    off campus (most people don't, at least for the first year), fill out your own estimate. Remember, we're calculating your costs for <u>one year!</u></Heading>
                    </Hero.Body>
                </Hero>
                <div className = 'housing-box'>
                    <InputNumber disabled = {this.state.roomAndBoardDisabled} className = 'input' value = {this.state.roomAndBoard} onChange = {(event) => this.handleTextChange(event)}></InputNumber>
                </div>
                <div className = 'tuition-flex-label'>
                    {this.state.roomAndBoardDisabled ? 
                    <label className = 'tuition-label'>Housing is currently not included in the estimate</label>
                    :
                    <label className = 'tuition-label'>Click below to leave housing out of the estimate</label>
                }
                    <Switch color="primary" onClick = {(event) => this.onRoomingSwitch(event)}/>
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
        roomingTotal:state.roomingTotal,
        schoolName:state.schoolName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (roomingTotal) => dispatch({type: 'ADD_ROOMING_TOTAL', roomingTotal:roomingTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(RoomAndBoard)