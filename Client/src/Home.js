import React, {Component} from 'react'
import { connect } from 'react-redux'
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import titleicon from './images/imagecrop.png'
import Button from 'react-bulma-components/lib/components/button';
import './Home.css'

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            firstName: '',
            userId:''
        }
    }
    handleSearchRedirect = () => {
        this.props.history.push('/main');
    }

    handleFaq = () => {
        this.props.history.push('/main/faq')
    }

    componentDidMount(){
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
          });
          this.setState({
              isLoggedIn: false
          })
    }

    render(){
        return(
            <div>
                <div style = {{'borderBottom':'3px solid rgb(82, 82, 82)','justifyContent':'center','display':'flex','marginLeft':'auto','marginRight':'auto'}}>
                    <img style = {{'paddingTop':'2em','paddingBottom':'2em','height':'50%','width':'50%'}} src = {titleicon} alt = 'awefaefw'/>
                </div>
        <Hero color="primary" gradient>
            <Hero.Body>
                <Container>
                <Heading className = 'home-header-title' style = {{'textAlign':'center'}} size = {1}><u>RealCollegeCost</u></Heading>
                <Heading style = {{'paddingTop':'3em','textAlign':'center'}} subtitle size={4}>
                    College's expensive. Let's plan ahead.
                </Heading>
                </Container>
            </Hero.Body>
        </Hero>
        <Content className = 'description' >
            <p>
                When thinking about the cost of college, tuition isn't the whole picture (unfortunately). This website is intended to 
                give you an honest outlook on your overall cost for college so you can plan ahead. 
            </p>
        </Content>
        <Columns className = 'facts'>
            <Columns.Column className = 'facts-box'>
            <Heading style = {{'textAlign':'center'}} size={4}>
                1) Select Your College
            </Heading>
            <Heading style = {{'textAlign':'center','paddingBottom':'1em'}}subtitle size={4}>
                Choose from over 7,000 U.S. colleges, all full of the latest info
            </Heading>
            </Columns.Column>
            <Columns.Column className = 'facts-box'>
            <Heading style = {{'textAlign':'center'}} size={4}>
                2) Choose Your Preferences
            </Heading>
            <Heading style = {{'textAlign':'center','paddingBottom':'1em'}}subtitle size={4}>
                Account for costs from over 20 categories, including rent, textbooks, food, etc
            </Heading>
            </Columns.Column>
            <Columns.Column className = 'facts-box'>
            <Heading style = {{'textAlign':'center'}} size={4}>
                3) Calculate Your Final Cost
            </Heading>
            <Heading style = {{'textAlign':'center','paddingBottom':'1em'}}subtitle size={4}>
                Get the most accurate estimate, save your results, and compare your dream colleges
            </Heading>
            </Columns.Column>
        </Columns> 
        <div className = 'start-button'>
        <Button onClick = {this.handleSearchRedirect}>
            GET STARTED →
         </Button> 
        </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userName:state.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddUsername: (userName, userId) => dispatch({type: 'ADD_USERNAME', userName:userName, userId: userId})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)