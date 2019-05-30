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
        console.log('test')
        fetch('http://localhost:8080/view-colleges')
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
                <li>{x.userName}</li>
            )
        })
        console.log(this.state)
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