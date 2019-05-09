import React, {Component} from 'react'
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import titleicon from './images/imagecrop.png'
import Button from 'react-bulma-components/lib/components/button';
import './Home.css'

class Home extends Component{

    handleSearchRedirect = () => {
        this.props.history.push('/main/1');
    }


    render(){
        return(
            <div>
                <div style = {{'borderBottom':'3px solid rgb(82, 82, 82);','justifyContent':'center','display':'flex','marginLeft':'auto','marginRight':'auto'}}>
                    <img style = {{'paddingTop':'2em','paddingBottom':'2em','height':'50%','width':'50%'}} src = {titleicon} alt = 'awefaefw'/>
                </div>
        <Hero color="primary" gradient>
            <Hero.Body>
                <Container>
                <Heading style = {{'textAlign':'center'}}size = {1}>RealCollegeCost</Heading>
                <Heading style = {{'paddingTop':'3em','textAlign':'center'}} subtitle size={4}>
                    College's expensive, and tuition isn't the whole picture. 
                </Heading>
                </Container>
            </Hero.Body>
        </Hero>
        <Content className = 'description' >
            <p>
                When you're thinking about which college to go to, one thing to always think about is money, because this world 
                is run by bullshit fucking rich bastards. Unfortunately, while tuition is the bulk of the cost, there are many other things
                you gotta worry about, such as room and boarding, food, certain types of liquids, etc. That's where RealCollegeCost comes in. Using this app, you can get an accurate estimate of 
                the true annual cost of attending a university. 
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

export default Home 