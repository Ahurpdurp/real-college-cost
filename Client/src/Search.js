import React, {Component} from 'react';
import Results from './Results.js'
import 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import './Search.css'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            tuition: "",
            results:[]
        }
    }


    onSearchChange = (e) => {
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let URL = `${baseUrl}school.name=${e.target.value}&api_key=${apiKey}&&_fields=latest.student.size,school.name,latest.cost.tuition.out_of_state,id`
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({
            results:response.results
        })
        )
    }

    handleCollegeSearch = () => {
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let URL = `${baseUrl}school.name=${this.state.textField}&api_key=${apiKey}&&_fields=latest.student.size,school.name,latest.cost.tuition.out_of_state,id`
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({
            results:response.results
        })
        )
    }

    render(){
        return(
            <div>
                <Heading className = 'header'>
                    The first step is selecting a college. Let's get that out of the way. 
                </Heading>
                <div className = 'input-container'>
                    <input className = 'input' style = {{'width':'80%'}} onChange = {this.onSearchChange} type = 'text' placeholder = 'Enter a college' />
                </div>
                {this.state.results.length ? <Results searchResults = {this.state.results} /> : null}
            </div>
        )
    }
}


export default Search