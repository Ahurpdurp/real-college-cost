import React, {Component} from 'react'
import Button from 'react-bulma-components/lib/components/button';
import './HeaderNav.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';

class TopNavbar extends Component{

    routeRedirect = (path) => {
        if(this.props.location === '/'){
            console.log('test')
        }
        this.props.history.push(path)
    }

    render(){
        return(
            <div>
            <div className = 'nav-container'>
                <Button onClick = {() => this.routeRedirect('/')}>Home</Button>
                <Button onClick = {() => this.routeRedirect('/main/faq')}>FAQ</Button>
                {this.props.userId ? <Button>Logout</Button> : null}
            </div>
                {!this.props.userId ? <h5>Log in to save your results!</h5> : <h5>Logged in as {this.props.userName}</h5> }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userId:state.userId,
        userName:state.userName
    }
}


export default connect(mapStateToProps)(withRouter(TopNavbar))