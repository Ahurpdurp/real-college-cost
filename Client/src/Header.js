import Heading from 'react-bulma-components/lib/components/heading';
import React, {Component} from 'react'
import { connect } from 'react-redux'
import "./Header.css"

class TitleHeader extends Component{
    render(){
        return(
            <div className = 'header-header'>
                <Heading size = {5} className = 'header'>RealCollegeCost</Heading>
                <Heading style = {{'textAlign':'center','color':'grey'}}subtitle>Current Total: ${this.props.total.toLocaleString()}</Heading>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(TitleHeader)