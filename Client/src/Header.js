import Heading from 'react-bulma-components/lib/components/heading';
import React, {Component} from 'react'
import { connect } from 'react-redux'
import "./Header.css"

class TitleHeader extends Component{
    render(){
        return(
            <div className = 'header-header'>
                {this.props.userName === '' ? 
                    <Heading size = {5} className = 'header'>RealCollegeCost</Heading>
                    :
                    <Heading size = {5} className = 'header'>{this.props.userName}'s RealCollegeCost</Heading>            
                }
                <Heading style = {{'textAlign':'center','color':'grey'}}subtitle>Current Total: ${this.props.total.toLocaleString()}</Heading>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        userName:state.userName
    }
}

export default connect(mapStateToProps)(TitleHeader)