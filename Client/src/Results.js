import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Results extends Component{

    onCollegeSelect = (schoolName,schoolId) => {
        this.props.onCollegeAddGlobal(schoolName,schoolId)
    }
    render(){
        return(
            <div>
                {this.props.searchResults.map(x => {
                    return (
                        <div>
                        <h1>{x['school.name']}</h1>
                        <Link to = '/form'>
                        <button onClick = {() => this.onCollegeSelect(x['school.name'], x.id)}>Select This College</button>
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
      onCollegeAddGlobal: (schoolName,schoolId) => dispatch({type: 'SELECT_COLLEGE', schoolId:schoolId, schoolName:schoolName})
    }
  }

  export default connect(null, mapDispatchToProps)(Results)
