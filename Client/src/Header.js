import Heading from 'react-bulma-components/lib/components/heading';
import React, {Component} from 'react'
import { connect } from 'react-redux'


class TitleHeader extends Component{
    render(){
        return(
            <div>
                <Heading size = {3} className = 'header'>RealCollegeCost</Heading>
                <Heading style = {{'text-align':'center','color':'grey'}}subtitle>Current Total: ${this.props.total.toLocaleString()}</Heading>
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