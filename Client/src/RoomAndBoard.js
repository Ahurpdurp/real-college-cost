import React, {Component} from 'react'
import { connect } from 'react-redux'

class RoomAndBoard extends Component {
    render(){
        return(
            <div>{this.props.total}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(RoomAndBoard)