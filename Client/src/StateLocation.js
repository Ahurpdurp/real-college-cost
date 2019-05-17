import { connect } from 'react-redux'
import React, {Component} from 'react';
import "./StateLocation.css"
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Image from 'react-bulma-components/lib/components/image';
class StateLocation extends Component {

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    onBackButton = () => {
        this.props.history.push('/main');
    }
    
    onSelectStateStatus = (stateStatus) => {
        this.props.onAddStateStatus(stateStatus)
        this.props.history.push('/main/2')
    }

    render(){
        return(
            <div>
                <Heading className = 'state-location-title'>Do you qualify for in-state tuition at {this.props.schoolName}?</Heading>
                <div className = 'statelocation-container'>
                <Heading subtitle>For public schools, the tuition is significantly lower if you're in the same state as the 
                college you're appying to. If you're not in the same state, not all hope is lost! Here are some regional programs that 
                may allow you to qualify for in-state even if you're not in the same state:
                <ul>
                    <li>
                        <a rel="noopener noreferrer" target = '_blank' href = 'https://nebhe.org/'>New England Board of Higher Education</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target = '_blank' href = 'https://www.sreb.org/academic-common-market'>Southern Regional Education Board</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target = '_blank' href = 'https://msep.mhec.org/'>Midwest Student Exchange Program</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target = '_blank' href = 'https://www.wiche.edu/wue'>Western Undergraduate Exchange</a>
                    </li>
                </ul>
                Do some research, and select one of the options below. 
                </Heading>
                </div>
                <div className = 'state-button-container'>
                    <div className = 'one state-buttons'>
                        <Image src = 'https://image.flaticon.com/icons/png/512/92/92596.png' size = {128} />
                        <Button onClick = {() => {this.onSelectStateStatus('in_state')}} color = 'link' style = {{'fontFamily':'Ubuntu, sans-serif'}}>In State</Button>
                    </div>
                    <div className = 'two state-buttons'>
                        <Image src = 'https://image.flaticon.com/icons/png/512/45/45896.png' size = {128} />
                        <Button onClick = {() => {this.onSelectStateStatus('out_of_state')}} color = 'warning' style = {{'fontFamily':'Ubuntu, sans-serif'}}>Out of State</Button>
                    </div>
                </div>
                <div className = 'nav-button-container'>
                    <Button className = 'back-next-buttons' onClick = {this.onBackButton}>
                        <b>Back</b>
                    </Button>  
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        schoolName: state.schoolName,
        schoolId: state.schoolId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddStateStatus: (stateStatus) => dispatch({type: 'ADD_STATE_STATUS', stateStatus:stateStatus})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(StateLocation)