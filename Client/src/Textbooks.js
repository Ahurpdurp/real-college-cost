import React, {Component} from 'react'
import { connect } from 'react-redux'
import 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import TitleHeader from './Header.js'
import InputNumber from 'react-input-just-numbers';
import Message from 'react-bulma-components/lib/components/message';
import "./Textbooks.css"

class Textbooks extends Component {
    constructor(props){
        super(props)
        this.state = {
            textbookCost:this.props.textbookTotal,
            laptopCost:this.props.laptopTotal
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

    onBackButton = () => {
        this.props.history.push('/main/3');
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
                <div className = 'textbook-message-containers'>
                <Message className = 'textbook-laptop message is-success'>
                <Message.Header className = 'textbook-header'>
                    <h1>Textbook costs</h1>
                </Message.Header>
                <Message.Body className = 'textbook-body'>
                    <p>College Board estimates that the yearly cost of textbooks is <b>$1,200</b> a year (<a rel="noopener noreferrer" target = '_blank' href = 'https://studentpirgs.org/campaigns/make-textbooks-affordable/'>Source</a>). You can buy used textbooks most of the time, but for intro classes especially the class will require you to have the latest edition. The default estimate will be $1,200 as shown below - if you know the major you're choosing doesn't require as many textbooks then feel free to change the estimate as desired.</p>
                    <InputNumber className = 'textbook-input input' value = {this.state.textbookCost} onChange = {(event) => this.handleTextChange(event, "textbookCost")}></InputNumber>
                </Message.Body>
                </Message>
                <Message className = 'textbook-laptop message is-warning'>
                <Message.Header className = 'textbook-header'>
                    <h1>Let's think about laptops</h1>
                </Message.Header>
                <Message.Body className = 'textbook-body'>
                    <p>A laptop or, less commonly, a desktop is basically mandatory for college life. The good news is that you probably already have something you can bring to college. If not, you can buy a pretty solid new one for <b>$800</b>. You could always buy a used one as well (
                        this website was created using a MacBook I bought for $400)! If you have one, just leave the box blank. If not, do some research and put in your best estimate.</p>
                    <InputNumber className = 'textbook-input input' value = {this.state.laptopCost} onChange = {(event) => this.handleTextChange(event, "laptopCost")}></InputNumber>
                </Message.Body>
                </Message>
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
        textbookTotal:state.textbookTotal,
        laptopTotal:state.laptopTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTotal: (textbookTotal,laptopTotal) => dispatch({type: 'ADD_TEXTBOOK_TOTAL', textbookTotal:textbookTotal,laptopTotal:laptopTotal})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Textbooks)