import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';


class Misc extends Component {
    constructor(props){
        super(props)
        this.state = {
            drinkCost:this.props.drinkTotal,
            alcoholCost:this.props.alcoholTotal,
            clubCost:this.props.clubTotal,
            clothingCost:this.props.clothingTotal,
            customCost:this.props.customTotal

        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
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
        let customTotal = parseInt(this.state.customCost)
        this.props.onAddTotal(drinkTotal,alcoholTotal,clubTotal,clothingTotal,customTotal)
        this.props.history.push('/main/total');
    } 

    render(){
        return(
            <div>
                <TitleHeader />
                <Heading subtitle>
                    If you're getting exhausted/about to have a panic attack as the inevitable force of cripping debt overwhelms you, <b>don't worry.</b> We're on the last page. Here we're just going to 
                    enter in some miscellaneous stuff and then you'll be on your merry way. These costs highly variable though, so for the most part you'll have to fill in your own estimates (you're probably wondering
                    why you're even using this aren't you. Hah...)
                </Heading>
                <Heading subtitle size = {5}>Drinks. Whether it's Boba, Starbucks, or other drinks you regularly buy, think about how often you buy it per week. Then multiply that number by 52. 
                Because I've seen people buy obscene amounts of Starbucks, there's no good estimate. You're going to have to fill this field by yourself.</Heading>
                <InputNumber className = 'input' value = {this.state.drinkCost} onChange = {(event) => this.handleTextChange(event, "drinkCost")}></InputNumber>
                <Heading subtitle size = {5}>Alcohol. According to recent surveys, the average student spends about $900/year on alcohol <a target = '_blank' href = "https://www.banyanpompano.com/2015/03/23/college-binge-drinking-alcohol-abuse-florida-alcoholism-rehab-young-adult/">(Source)</a>. 
                Peer pressure is bad, so the default value is 0. Change if needed.</Heading>
                <InputNumber className = 'input' value = {this.state.alcoholCost} onChange = {(event) => this.handleTextChange(event, "alcoholCost")}></InputNumber>
                <Heading subtitle size = {5}>Club costs. If the club you're joining involves physical activity, it'll probably have an equipment fee, usually around 25-50 dollars.</Heading>
                <InputNumber className = 'input' value = {this.state.clubCost} onChange = {(event) => this.handleTextChange(event, "clubCost")}></InputNumber>
                <Heading subtitle size = {5}>Clothing. Laundry detegent will cost you about 20 dollars a year as well.</Heading>
                <InputNumber className = 'input' value = {this.state.clothingCost} onChange = {(event) => this.handleTextChange(event, "clothingCost")}></InputNumber>
                <Heading subtitle size = {5}>And last but not least, if there are any other significant costs you can think of, put that here. In future updates I'll add custom boxes with labels, but 
                for now this'll have to do. Sorry about that.</Heading>
                <InputNumber className = 'input' value = {this.state.customCost} onChange = {(event) => this.handleTextChange(event, "customCost")}></InputNumber>
                <Button onClick = {this.onEstimateTotal}>
                    Next
                </Button>
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
        customTotal:state.customTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (drinkTotal,alcoholTotal,clubTotal,clothingTotal,customTotal) => dispatch({type: 'ADD_MISC_TOTAL', drinkTotal:drinkTotal,alcoholTotal:alcoholTotal,clubTotal:clubTotal,clothingTotal:clothingTotal,customTotal:customTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Misc)