import React, {Component} from 'react'
import { connect } from 'react-redux'
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'


class Textbooks extends Component {
    constructor(){
        super()
        this.state = {
            textbookCost:1200,
            laptopCost:0
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
        let textbookTotal = parseInt(this.state.textbookCost)
        let laptopTotal = parseInt(this.state.laptopCost)
        this.props.onAddTotal(textbookTotal,laptopTotal)
        this.props.history.push('/main/5');
    } 

    render(){
        return(
            <div>
                <TitleHeader />
                <Heading subtitle>
                    Alright, we have tuition and housing out of the way. Next we gotta think about those one time 
                    big-ticket items. The two things that come to mind are textbooks and laptops. Now, the cost of these
                    two items <i>wildly</i> vary; College Board estimates that the yearly cost of textbooks is <b>$1,200</b> a year (holy crap!). Obviously, this depends on your major, so feel free to change this value. Remember kids,
                    always buy used textbooks (although sometimes you're forced to buy the new edition to do homework assignments).
                    As for laptops, chances are you probably already have one. If you do, leave the number at 0.
                </Heading>
                <Heading subtitle size = {5}>Estimated Textbook Cost: </Heading>
                <input className = 'input' value = {this.state.textbookCost} onChange = {(event) => this.handleTextChange(event, "textbookCost")}></input>
                <Heading subtitle size = {5}>Estimated Laptop Cost: </Heading>
                <input className = 'input' value = {this.state.laptopCost} onChange = {(event) => this.handleTextChange(event, "laptopCost")}></input>
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
        schoolId:state.schoolId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (textbookTotal,laptopTotal) => dispatch({type: 'ADD_TEXTBOOK_TOTAL', textbookTotal:textbookTotal,laptopTotal:laptopTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Textbooks)