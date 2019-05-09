import React, {Component} from 'react'
import { connect } from 'react-redux'

class Room extends Component {
    render(){
        return(
            <div>{this.props.total} HIHIs</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(Room)