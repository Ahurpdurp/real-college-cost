import React, {Component} from 'react';

export class Search extends Component {
    constructor(){
        super()
        this.state = {
            textField:"",
            tuition: "",
            schoolName:"",
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

class Results extends Component{
    render(){
        return(
            <div>
                {this.props.searchResults.map(x => {
                    return (
                        <div>
                        <h1>{x['school.name']}</h1>
                        <p>Tuition Cost: {x['latest.cost.tuition.out_of_state']}</p>
                        </div>
                    )
                })}
            </div>
        )
}
}
