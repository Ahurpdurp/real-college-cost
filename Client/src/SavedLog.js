import React, {Component} from 'react'
import Heading from 'react-bulma-components/lib/components/heading';
import './SavedLog.css'
import { connect } from 'react-redux'

class SavedLog extends Component {
    constructor(){
        super()
        this.state = {
            results:[]
        }
    }

    componentDidMount(){
        console.log(this.props.userId)
        fetch(`http://localhost:8080/view-colleges/${this.props.userId}`)
        .then(results => results.json())
        .then(json => {
            console.log(json)
            this.setState({
                results:json.result
            })
        })
    }

    render(){
        let resultsMap = this.state.results.map(x => {
            return(
                <li className = 'saved-container'>
                    <Heading primary className = 'school-title' size = {1}><u>{x.schoolName}</u></Heading>
                    <Heading size = {3}>One Year Total: ${x.yearTotal.toLocaleString()}</Heading>
                    <Heading size = {3}>Four Year Total: ${x.fourYearTotal.toLocaleString()}</Heading>
                    <Heading size = {4}>Tuition: ${x.tuitionTotal.toLocaleString()}</Heading>
                    <Heading size = {4}>Housing: ${x.roomingTotal.toLocaleString()}</Heading>
                    <Heading size = {4}>School Equipment: ${(x.textbookTotal + x.laptopTotal + x.carTotal).toLocaleString()}</Heading>
                <div className = 'saved-flex'> 
                    <p>Textbooks: ${x.textbookTotal.toLocaleString()}</p>
                    <p>Laptop: ${x.laptopTotal.toLocaleString()}</p>
                    <p>Car: ${x.carTotal.toLocaleString()}</p>
                </div>
                    <Heading size = {4}>Monthly Costs: ${(x.foodTotal + x.restaurantTotal + x.phoneTotal + x.internetTotal + x.healthTotal + x.carMaintTotal).toLocaleString()}</Heading>
                <div className = 'saved-flex'> 
                    <p>Groceries: ${x.foodTotal.toLocaleString()}</p>
                    <p>Restaurant: ${x.restaurantTotal.toLocaleString()}</p>
                    <p>Phone Bill: ${x.phoneTotal.toLocaleString()}</p>
                    <p>Internet: ${x.internetTotal.toLocaleString()}</p>
                    <p>Health Care: ${x.healthTotal.toLocaleString()}</p>
                    <p>Car Costs: ${x.carMaintTotal.toLocaleString()}</p>
                </div>
                    <Heading size = {4}>Subscriptions: ${(x.spotifyTotal + x.amazonPrimeTotal + x.netflixTotal).toLocaleString()}</Heading>
                <div className = 'saved-flex'> 
                    <p>Music: ${x.spotifyTotal.toLocaleString()}</p>
                    <p>Amazon Prime: ${x.amazonPrimeTotal.toLocaleString()}</p>
                    <p>TV: ${x.netflixTotal.toLocaleString()}</p>
                </div>
                    <Heading size = {4}>Recreational Costs: ${(x.drinkTotal + x.alcoholTotal + x.clubTotal + x.clothingTotal + x.videoTotal + x.customTotal).toLocaleString()}</Heading>
                <div className = 'saved-flex'> 
                    <p>Drinks/Snacks: ${x.drinkTotal.toLocaleString()}</p>
                    <p>Alcohol/Partying: ${x.alcoholTotal.toLocaleString()}</p>
                    <p>School Clubs: ${x.clubTotal.toLocaleString()}</p>
                    <p>Clothing/Laundry: ${x.clothingTotal.toLocaleString()}</p>
                    <p>Videogames/Other Media: ${x.videoTotal.toLocaleString()}</p>
                    <p>Miscellaneous: ${x.customTotal.toLocaleString()}</p>
                </div>
                </li>
            )
        })
        return(
            <div>
                <Heading className = 'saved-header'>{this.props.userName}, here are all the results you've saved. </Heading>
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