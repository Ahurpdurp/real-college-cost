import React, {Component} from 'react';
import Results from './Results.js'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            textField:"",
            tuition: "",
            results:[]
        }
    }


    onSearchChange = (e) => {
        this.setState({
            textField: e.target.value
        })
    }

    handleCollegeSearch = () => {
        let baseUrl = "https://api.data.gov/ed/collegescorecard/v1/schools?"
        let apiKey = "S0RreVIMaoUJRJiIb9vLSTqiouUFP0KwjX5OCdwa"
        let URL = `${baseUrl}school.name=${this.state.textField}&api_key=${apiKey}&&_fields=latest.student.size,school.name,latest.cost.tuition.out_of_state`
        console.log(URL)
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({
            results:response.results
        })
        )}



    render(){
        return(
            <div>
                <input onChange = {this.onSearchChange} type = 'text' placeholder = 'Enter a college' />
                <button onClick = {this.handleCollegeSearch}>Search</button>
                {this.state.results.length ? <Results searchResults = {this.state.results} /> : null}
            </div>
        )
    }
}

export default Search