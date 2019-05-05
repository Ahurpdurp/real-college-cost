import React, {Component} from 'react'
import { connect } from 'react-redux'

class CollegeForm extends Component{
    render(){
        return(
            <div>
                <h1>Let's determine the true cost of {this.props.schoolName}. Answer the questions below :)</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      schoolName: state.schoolName
    }
  }

export default connect(mapStateToProps)(CollegeForm)
