import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import "./Misc.css"
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';

class Misc extends Component {
    constructor(props){
        super(props)
        this.state = {
            drinkCost:this.props.drinkTotal,
            alcoholCost:this.props.alcoholTotal,
            clubCost:this.props.clubTotal,
            clothingCost:this.props.clothingTotal,
            videoCost:this.props.videoTotal,
            customCost:this.props.customTotal

        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    onBackButton = () => {
        this.props.history.push('/main/6');
    }

    handleTextChange = (e,typeCost) => {
        this.setState({
            [typeCost]:e.target.value
        })
    }

    onEstimateTotal = () => {
        let drinkTotal = parseInt(this.state.drinkCost)
        let alcoholTotal = parseInt(this.state.alcoholCost)
        let clubTotal = parseInt(this.state.clubCost) 
        let clothingTotal = parseInt(this.state.clothingCost)
        let videoTotal = parseInt(this.state.videoCost)
        let customTotal = parseInt(this.state.customCost)
        this.props.onAddTotal(drinkTotal,alcoholTotal,clubTotal,clothingTotal,videoTotal,customTotal)
        this.props.history.push('/main/total');
    } 

    render(){
        return(
            <div>
                <TitleHeader />
                <Heading className = 'misc-title' subtitle>
                    Last Page...we're in the end game now. The most important part of college is having fun (the second being studying...), so naturally the this whole page is dedicated to 
                    entertainment and recreational activities. 
                </Heading>
                <div className = 'grid-container'>
                <Hero gradient className = 'misc-hero' color="primary">
                    <Hero.Body>
                        <Container>
                        <Heading size = {4}>Drinks/Starbucks/Boba/Snacks</Heading>
                        <Heading className = 'misc-description' subtitle size={5}>
                            Boba is my personal sin. This category is for drinks and snacks you buy way too much of. The best way to estimate is by 
                            thinking about how much you spend per week, and multiplying by <b>52</b>.
                        </Heading>
                        <InputNumber className = 'input misc-input' value = {this.state.drinkCost} onChange = {(event) => this.handleTextChange(event, "drinkCost")}></InputNumber>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero gradient className = 'misc-hero' color="success">
                    <Hero.Body>
                        <Container>
                        <Heading size = {4}>Alcohol</Heading>
                        <Heading className = 'misc-description'  subtitle size={5}>
                        According to recent surveys, the average student spends about $900/year on alcohol <a target = '_blank' href = "https://www.banyanpompano.com/2015/03/23/college-binge-drinking-alcohol-abuse-florida-alcoholism-rehab-young-adult/">(Source)</a>. 
                    Not everyone drinks though, so the default value is 0.
                        </Heading>
                        <InputNumber className = 'input misc-input' value = {this.state.alcoholCost} onChange = {(event) => this.handleTextChange(event, "alcoholCost")}></InputNumber>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero gradient className = 'misc-hero' color="info">
                    <Hero.Body>
                        <Container>
                        <Heading size = {4}>Club Costs</Heading>
                        <Heading className = 'misc-description' subtitle size={5}>
                        If you want to join a club that involves physical activity, it'll probably have an equipment fee, usually around 25-50 dollars. College clubs might have websites that you can find the fees on.
                        </Heading>
                        <InputNumber className = 'input misc-input' value = {this.state.clubCost} onChange = {(event) => this.handleTextChange(event, "clubCost")}></InputNumber>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero gradient className = 'misc-hero' color="link">
                    <Hero.Body>
                        <Container>
                        <Heading size = {4}>Clothing/Makeup</Heading>
                        <Heading className = 'misc-description' subtitle size={5}>
                            I'm not even going to try to estimate how much people usually spend on clothing and/or makeup, so that's completely on you. Laundry detergent will 
                            cost about <b>$20/year</b>, so that'll be the default value.
                        </Heading>
                        <InputNumber className = 'input misc-input' value = {this.state.clothingCost} onChange = {(event) => this.handleTextChange(event, "clothingCost")}></InputNumber>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero gradient className = 'misc-hero' color="light">
                    <Hero.Body>
                        <Container>
                        <Heading size = {4}>Movies/Videogames/Other Media</Heading>
                        <Heading className = 'misc-description' subtitle size={5}>
                            I personally have spent way too much on videogames. The good news is that it's really easy to estimate how often you go to the movies and buy new videogames.
                            Each person has their own preferences, so it'll be up to you to change. 
                        </Heading>
                        <InputNumber className = 'input misc-input' value = {this.state.videoCost} onChange = {(event) => this.handleTextChange(event, "videoCost")}></InputNumber>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero gradient className = 'misc-hero' color="dark">
                    <Hero.Body>
                        <Container>
                        <Heading size = {4}>Other Costs</Heading>
                        <Heading className = 'misc-description' subtitle size={5}>
                            I'm constantly adding new categories, and I definitely haven't covered everything. If there's anything you want to add that isn't displayed, put that here. If it's 
                            something obvious, let me know and I'll add it!
                        </Heading>
                        <InputNumber className = 'input misc-input' value = {this.state.customCost} onChange = {(event) => this.handleTextChange(event, "customCost")}></InputNumber>
                        </Container>
                    </Hero.Body>
                </Hero>
                </div> 
                <div className = 'nav-button-container'>
                <Button className = 'back-next-buttons' onClick = {this.onBackButton}>
                    <b>Back</b>
                </Button>  
                <Button className = 'back-next-buttons' onClick = {this.onEstimateTotal}>
                    <b>Next</b>
                </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        schoolId:state.schoolId,
        drinkTotal:state.drinkTotal,
        alcoholTotal:state.alcoholTotal,
        clubTotal:state.clubTotal,
        clothingTotal:state.clothingTotal,
        videoTotal:state.videoTotal,
        customTotal:state.customTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (drinkTotal,alcoholTotal,clubTotal,clothingTotal,videoTotal,customTotal) => dispatch({type: 'ADD_MISC_TOTAL', drinkTotal:drinkTotal,alcoholTotal:alcoholTotal,clubTotal:clubTotal,clothingTotal:clothingTotal,videoTotal:videoTotal,customTotal:customTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Misc)