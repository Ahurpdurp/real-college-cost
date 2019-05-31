import React, {Component} from 'react'
import './SavedLog.css'
import { connect } from 'react-redux'
import Button from 'react-bulma-components/lib/components/button';
import axios from 'axios'

class SavedLog extends Component {
    constructor(){
        super()
        this.state = {
            results:[]
        }
    }

    componentDidMount(){
        fetch(`https://realcollegecost.herokuapp.com/view-colleges/${this.props.userId}`)
        .then(results => results.json())
        .then(json => {
            this.setState({
                results:json.result
            })
        })
    }

    handleRemoveEntry = (postId) => {
        axios.post('https://realcollegecost.herokuapp.com/remove-entry',{
            postId:postId
          })
        .then((res) => {
            fetch(`https://realcollegecost.herokuapp.com/view-colleges/${this.props.userId}`)
            .then(results => results.json())
            .then(json => {
                this.setState({
                    results:json.result
                })
            })
        })
    }

    render(){
        let resultsMap = this.state.results.map(x => {
            return(
                <li className = 'saved-container'>
                    <h1 primary className = 'school-title' size = {1}><u>{x.schoolName}</u></h1>
                    <h3 size = {3}>One Year Total: ${x.yearTotal.toLocaleString()}</h3>
                    <h3 size = {3}>Four Year Total: ${x.fourYearTotal.toLocaleString()}</h3>
                    <div className = 'saved-big-flex'>
                        <h3 size = {4}>Tuition: ${x.tuitionTotal.toLocaleString()}</h3>
                    </div>
                    <div className = 'saved-big-flex'>
                        <h3 size = {4}>Housing: ${x.roomingTotal.toLocaleString()}</h3>
                    </div>
                <div className = 'saved-big-flex'>
                    <h3 size = {4}>School Equipment: ${(x.textbookTotal + x.laptopTotal + x.carTotal).toLocaleString()}</h3>
                <div className = 'saved-flex'> 
                    <p>Textbooks: ${x.textbookTotal.toLocaleString()}</p>
                    <p>Laptop: ${x.laptopTotal.toLocaleString()}</p>
                    <p>Car: ${x.carTotal.toLocaleString()}</p>
                </div>
                </div>
                <div className = 'saved-big-flex'>
                    <h3 size = {4}>Monthly Costs: ${(x.foodTotal + x.restaurantTotal + x.phoneTotal + x.internetTotal + x.healthTotal + x.carMaintTotal).toLocaleString()}</h3>
                <div className = 'saved-flex'> 
                    <p>Groceries: ${x.foodTotal.toLocaleString()}</p>
                    <p>Restaurant: ${x.restaurantTotal.toLocaleString()}</p>
                    <p>Phone Bill: ${x.phoneTotal.toLocaleString()}</p>
                    <p>Internet: ${x.internetTotal.toLocaleString()}</p>
                    <p>Health Care: ${x.healthTotal.toLocaleString()}</p>
                    <p>Car Costs: ${x.carMaintTotal.toLocaleString()}</p>
                </div>
                </div>
                <div className = 'saved-big-flex'>
                    <h3 size = {4}>Subscriptions: ${(x.spotifyTotal + x.amazonPrimeTotal + x.netflixTotal).toLocaleString()}</h3>
                <div className = 'saved-flex'> 
                    <p>Music: ${x.spotifyTotal.toLocaleString()}</p>
                    <p>Amazon Prime: ${x.amazonPrimeTotal.toLocaleString()}</p>
                    <p>TV: ${x.netflixTotal.toLocaleString()}</p>
                </div>
                </div>
                <div className = 'saved-big-flex'>
                    <h3 size = {4}>Recreational Costs: ${(x.drinkTotal + x.alcoholTotal + x.clubTotal + x.clothingTotal + x.videoTotal + x.customTotal).toLocaleString()}</h3>
                <div className = 'saved-flex'> 
                    <p>Drinks & Snacks: ${x.drinkTotal.toLocaleString()}</p>
                    <p>Parties: ${x.alcoholTotal.toLocaleString()}</p>
                    <p>School Clubs: ${x.clubTotal.toLocaleString()}</p>
                    <p>Clothing: ${x.clothingTotal.toLocaleString()}</p>
                    <p>Video Games & Movies: ${x.videoTotal.toLocaleString()}</p>
                    <p>Other: ${x.customTotal.toLocaleString()}</p>
                </div>
                </div>
                <div className = 'remove-entry-container'>
                    <Button onClick = {() => {this.handleRemoveEntry(x.id)}}>Remove Entry</Button>
                </div>
                </li>
            )
        })
        return(
            <div className = 'big-saved-div'>
                <h1 className = 'saved-header'>{this.props.userName}, here are the college estimates you've added. </h1>
                <ul>
                    {resultsMap}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
        userName: state.userName
    }
}

export default connect(mapStateToProps)(SavedLog)