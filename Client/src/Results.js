import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Results extends Component{

    onCollegeSelect = (schoolName) => {
        this.props.onCollegeAddGlobal(schoolName)
    }
    render(){
        return(
            <div>
                {this.props.searchResults.map(x => {
                    return (
                        <div>
                        <h1>{x['school.name']}</h1>
                        <Link to = '/form'>
                        <button onClick = {() => this.onCollegeSelect(x['school.name'])}>Select This College</button>
                        </Link>
                        </div>
                    )
                })}
            </div>
        )
}
}


const mapDispatchToProps = (dispatch) => {
    return {
      onCollegeAddGlobal: (schoolName) => dispatch({type: 'SELECT_COLLEGE', schoolName:schoolName})
    }
  }

  export default connect(null, mapDispatchToProps)(Results)
