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
    render(){
        return(
            <div>
                <div style = {{'borderBottom':'3px solid grey','justifyContent':'center','display':'flex','marginLeft':'auto','marginRight':'auto'}}>
                    <img style = {{'padding-top':'2em','padding-bottom':'2em','height':'50%','width':'50%'}} src = {titleicon} alt = 'awefaefw'/>
                </div>
        <Hero color="primary" gradient>
            <Hero.Body>
                <Container>
                <Heading style = {{'textAlign':'center','paddingBottom':'1em'}}size = {1}>RealCollegeCost</Heading>
                <Heading style = {{'textAlign':'center'}} subtitle size={4}>
                    College's expensive, and tuition isn't the whole picture. 
                </Heading>
                </Container>
            </Hero.Body>
        </Hero>
        <Content className = 'description' style = {{'backgroundColor':'#E8E8E8'}}>
            <p>
                When you're thinking about which college to go to, one thing to always think about is money, because this world 
                is run by bullshit fucking rich bastards. Unfortunately, while tuition is the bulk of the cost, there are many other things
                you gotta worry about, such as room and boarding, food, certain types of liquids, etc. That's where RealCollegeCost comes in. Using this app, you can get an accurate estimate of 
                the true annual cost of attending a university. 
            </p>
        </Content>
        <Columns className = 'facts'>
            <Columns.Column>
            <Heading style = {{'text-align':'center','padding-bottom':'1em'}}subtitle size={4}>
                Get the latest college info from over 7,000 colleges.
            </Heading>
            </Columns.Column>
            <Columns.Column>
            <Heading style = {{'text-align':'center','padding-bottom':'1em'}}subtitle size={4}>
                Add costs from preset options such as textbooks, drugs, and gas money - but also add your own special costs 
                wherever you'd like.
            </Heading>
            </Columns.Column>
            <Columns.Column>
                <Heading style = {{'text-align':'center'}} subtitle size={4}>
                    100% free - create an account to save your preferences and compare more college costs at a time. 
                </Heading>
            </Columns.Column>
        </Columns> 
        <div className = 'start-button'>
        <Button>
            Click here to get started
         </Button> 
        </div>
      
            </div>
        )
    }
}

export default Home 