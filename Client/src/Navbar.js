import React, {Component} from 'react'
import Button from 'react-bulma-components/lib/components/button';
import './HeaderNav.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import Popup from 'reactjs-popup' 

class TopNavbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            userId:null
        }
    }
    onFacebookLogin = () => {
        window.FB.login(function(response) {
            if (response.status === 'connected') {
            let accessToken = response.authResponse.accessToken
            window.FB.api('/me?fields=first_name,last_name,email', {fields: '' }, {  access_token : accessToken }, function(response) {
                this.props.onAddUsername(response.first_name, response.id)
            }.bind(this))
            } else {
              // The person is not logged into this app or we are unable to tell. 
            }
          }.bind(this));
        }

    onFacebookLogout = () => {
        window.FB.logout(function(response) {
            this.props.onAddUsername('',null)
          }.bind(this))
    }

    routeRedirect = (path) => {
        if(this.props.location === '/'){
        }
        this.props.history.push(path)
    }

    onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile()
        console.log(profile.getId())
    }

    render(){
        return(
            <div>
            <div className = 'nav-container'>
            <div class = 'g-signin2' data-onsuccess = {this.onSignIn}></div>
                <Button onClick = {() => this.routeRedirect('/')}>Home</Button>
                {this.props.userId ? <Button onClick = {() => this.routeRedirect('/main/saved')}>My Colleges</Button> : null}
                {this.props.userId ? <Button onClick = {this.onFacebookLogout}>Logout</Button> :<Popup trigger = {<Button>Login</Button>}>
                    <div>
                        <h5>Click on one of the three icons below to log in!</h5>
                    <div className = 'login-icon-container'>
                        <img onClick = {(this.onFacebookLogin)} alt = 'facebook-login-icon' src = 'https://image.flaticon.com/icons/svg/733/733547.svg'/>
                        <img alt = 'google-plus-login' src = 'https://image.flaticon.com/icons/svg/174/174851.svg'/>
                        <img alt = 'twitter-login-icon' src = 'https://image.flaticon.com/icons/svg/174/174876.svg'/>
                    </div>  
                    </div>
                    </Popup>}
                    <Button onClick = {() => this.routeRedirect('/main/faq')}>FAQ</Button>
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


const mapDispatchToProps = (dispatch) => {
    return {
      onAddUsername: (userName, userId) => dispatch({type: 'ADD_USERNAME', userName:userName, userId: userId})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TopNavbar))