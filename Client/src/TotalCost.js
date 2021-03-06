import React, {Component} from 'react';
import 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import { connect } from 'react-redux'
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import './TotalCost.css'
import axios from 'axios'
import ReactMinimalPieChart from 'react-minimal-pie-chart'


class TotalCost extends Component{
    constructor(){
        super()
        this.state = {
            tuitionTotalGraph:null,
            roomingTotalGraph:null,
            isSaved:false,
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        if(this.props.tuitionTotal !== 0){
            this.setState({
                tuitionTotalGraph: this.props.tuitionTotal
            })
        }

        if(this.props.roomingTotal !== 0){
            this.setState({
                roomingTotalGraph:this.props.roomingTotal
            })
        }
    }

    onHomeScreenRedirect = () => {
        this.props.onSearchAgain()
        this.props.history.push('/main');
    }

    handleSaveResult = (fourYearTotal) => {
        axios.post('https://realcollegecost.herokuapp.com/add-college',{
            userName:this.props.userName,
            userId:this.props.userId,
            schoolName:this.props.schoolName,
            tuitionTotal:this.props.tuitionTotal,
            roomingTotal:this.props.roomingTotal,
            textbookTotal:this.props.textbookTotal,
            laptopTotal:this.props.laptopTotal,
            carTotal:this.props.carTotal,
            foodTotal:this.props.foodTotal,
            restaurantTotal:this.props.restaurantTotal,
            phoneTotal:this.props.phoneTotal,
            internetTotal:this.props.internetTotal,
            healthTotal:this.props.healthTotal,
            carMaintTotal:this.props.carMaintTotal,
            spotifyTotal:this.props.spotifyTotal,
            amazonPrimeTotal:this.props.amazonPrimeTotal,
            netflixTotal:this.props.netflixTotal,
            drinkTotal:this.props.drinkTotal,
            alcoholTotal:this.props.alcoholTotal,
            clubTotal:this.props.clubTotal,
            clothingTotal:this.props.clothingTotal,
            videoTotal:this.props.videoTotal,
            customTotal:this.props.customTotal,
            yearTotal:this.props.total,
            fourYearTotal:fourYearTotal
          })
        this.setState({
            isSaved:true
        })
    }


    handleInfoRedirect = () => {
        if (window.confirm('Make sure you saved your result!')) {
            this.props.history.push('/main/info')
        }
    }
    render(){

        let tuitionPercentage = (100 * this.props.tuitionTotal/this.props.total).toFixed(0)
        let roomingPercentage = (100 * this.props.roomingTotal/this.props.total).toFixed(0)
        let textbookTotal = this.props.laptopTotal + this.props.textbookTotal + this.props.carTotal
        let textbookPercentage = (100 * textbookTotal/this.props.total).toFixed(0)
        let monthlyTotal = this.props.foodTotal + this.props.restaurantTotal + this.props.internetTotal + this.props.phoneTotal + this.props.healthTotal + this.props.carMaintTotal
        let monthlyPercentage = (100 * monthlyTotal/this.props.total).toFixed(0)
        let subscriptionTotal = this.props.spotifyTotal + this.props.amazonPrimeTotal + this.props.netflixTotal
        let subscriptionPercentage = (100 * subscriptionTotal/this.props.total).toFixed(0)
        let miscTotal = this.props.drinkTotal + this.props.alcoholTotal + this.props.clubTotal + this.props.clothingTotal + this.props.videoTotal + this.props.customTotal
        let miscPercentage = (100 * miscTotal/this.props.total).toFixed(0)
        let fourYearTuition = (this.props.tuitionTotal + this.props.tuitionTotal*1.035 + this.props.tuitionTotal * 1.071 + this.props.tuitionTotal * 1.108).toFixed(2)
        let nonTuitionTotal = this.props.roomingTotal + textbookTotal + monthlyTotal + subscriptionTotal + miscTotal
        let fourYearNonTuition = (nonTuitionTotal + nonTuitionTotal * 1.02 + nonTuitionTotal * 1.0404 + nonTuitionTotal * 1.061208).toFixed(2)
        let fourYearCompleteTotal = (parseFloat(fourYearNonTuition) + parseFloat(fourYearTuition))

        return(
            <div>
                <div className = 'total-cost-header'>
                    <Heading subtitle>Whew, finally done! For one year, your estimated cost for going to {this.props.schoolName} is: </Heading>
                    <Heading className = 'total-cost-value' style = {{'paddingTop':'.5em'}}>{this.props.total.toLocaleString()} Dollars!</Heading>
                    <Heading>Let's see a break down of the costs:</Heading>
                </div>
                <ReactMinimalPieChart className = 'pie-chart'  
                animate
                label
                labelStyle={{
                    fontSize: '2px',
                    fontFamily: 'Ubuntu, sans-serif',
                    fill: '#121212'
                  }}
                    radius={20}
                    labelPosition={112}
                     data={[
                        {
                            title: "Tuition",
                            value: this.state.tuitionTotalGraph,
                            color: 'rgb(255, 184, 184)'
                        },
                        {
                            title: "Room and Board",
                            value: this.state.roomingTotalGraph,
                            color: 'rgb(255, 230, 183)'
                        },
                        {
                            title: "School Equipment",
                            value: textbookTotal,
                            color: 'rgb(255, 255, 208)'
                        },
                        {
                            title: "Monthly Costs",
                            value: monthlyTotal,
                            color: 'rgb(137, 255, 137)'
                        },
                        {
                            title: "Subscriptions",
                            value: subscriptionTotal,
                            color: 'rgb(138, 138, 255)'
                        },
                        {
                            title: "Recreation",
                            value: miscTotal,
                            color: 'rgb(255, 206, 255)'
                        }
                ]} />
                <div className = 'total-cost-container'>
                {this.props.tuitionTotal !== 0 ? 
                <Card className = 'total-cost-1'>
                    <Card.Image size = {64} src="https://image.flaticon.com/icons/png/512/62/62627.png" />
                    <Card.Content>            
                        <Heading size={4}>Tuition</Heading>
                        <Content>
                            Tuition's usually the biggest cost. According to these estimates, your tuition costs will be <b>${this.props.tuitionTotal.toLocaleString()}</b> for one year, or about <b>{tuitionPercentage}%</b>. If you're not thinking about tuition
                            for the estimate, then this percentage should be 0.
                        </Content>
                    </Card.Content>
                </Card>
                : null    
                }
                {this.props.roomingTotal !== 0 ? 
                <Card className = 'total-cost-2'>
                    <Card.Image size = {64} src="https://image.flaticon.com/icons/png/512/70/70370.png" />
                    <Card.Content>            
                        <Heading size={4}>Housing</Heading>
                        <Content>
                            Your total Housing costs will be the biggest month by month cost if you're living off campus. Your estimate is <b>${this.props.roomingTotal.toLocaleString()}</b>, 
                            which totals to <b>{roomingPercentage}%</b> of the total. 
                        </Content>
                    </Card.Content>
                </Card>
                : null
                }
                <Card className = 'total-cost-3'>
                    <Card.Image size = {64} src="https://image.flaticon.com/icons/png/512/120/120092.png" />
                    <Card.Content>            
                        <Heading size={4}>School Equipment</Heading>
                        <Content>
                            School Equipment, aka a laptop, textbooks, and maybe a car. Totaled to <b>${textbookTotal.toLocaleString()}</b>, which is <b>{textbookPercentage}%</b> of the total.
                        </Content>
                    </Card.Content>
                </Card>
                <Card className = 'total-cost-4'>
                    <Card.Image size = {64} src="https://image.flaticon.com/icons/png/512/67/67773.png" />
                    <Card.Content>            
                        <Heading size={4}>Monthly Costs</Heading>
                        <Content>
                            These are the main monthly costs other than rent. Your estimate is <b>${monthlyTotal.toLocaleString()}</b>, which makes up <b>{monthlyPercentage}%</b> of your 
                            total estimate. 
                        </Content>
                    </Card.Content>
                </Card>
                <Card className = 'total-cost-5'>
                    <Card.Image size = {64} src="https://image.flaticon.com/icons/png/512/54/54718.png" />
                    <Card.Content>            
                        <Heading size={4}>Subscriptions and Services</Heading>
                        <Content>
                            I don't see how anyone can live without Netflix or Spotify. This is definitely the most important section. Estimate: <b>${subscriptionTotal.toLocaleString()}</b>, making up <b>{subscriptionPercentage}%</b> of the total.
                        </Content>
                    </Card.Content>
                </Card>
                <Card className = 'total-cost-6'>
                    <Card.Image size = {64} src="https://image.flaticon.com/icons/png/512/99/99954.png" />
                    <Card.Content>            
                        <Heading size={4}>Recreational Costs</Heading>
                        <Content>
                            College is, after all, just one big party. <b>${miscTotal.toLocaleString()}</b> is your estimate, <b>{miscPercentage}%</b> of the total.
                        </Content>
                    </Card.Content>
                </Card>
                </div>
                <div className = 'college-inflation-section'>
                <p>So that's the cost of one year. Now what's the <b>total</b> cost? Let's start with <u>tuition</u>, since tuition increases at a much higher rate than the average 
                    rate of inflation. According to the College Board data <a rel="noopener noreferrer" href = 'https://www.savingforcollege.com/tutorial101/the-real-cost-of-higher-education' target = '_blank'>(source)</a>,
                    the average rate of inflation recently was around the 3-4% range. Using this estimate, your estimated four year tuition cost is: 
                </p>
                <Heading className = 'college-total'>
                    <b>${fourYearTuition.toLocaleString()}</b>
                </Heading>
                </div>
                <div className = 'non-tuition college-inflation-section'>
                <p>
                    So this part gets a little tricky. Your non-tuition estimate is <b><u>${nonTuitionTotal.toLocaleString()}</u></b>. You can always be sure that tuition will rise at disgusting rates every year, but inflation can vary.
                    Plus, inflation affects all of our categories in different ways. For our estimation, we're going to assume an inflation rate of 2% every year because that's what it's been for the past 
                    few years. Using that estimate, your four year estimate of everything non-tuition is: 
                </p>
                </div>
                <Heading className = 'college-total'>
                    <b>${fourYearNonTuition.toLocaleString()}</b>
                </Heading>
                <div className = 'total-total'>
                    <h1>So without further ado, your grand total is....</h1>
                </div>
                <Heading className = 'college-total'><b>${fourYearCompleteTotal.toLocaleString()}</b></Heading>
                <p className = 'additional-info'><a  onClick = {this.handleInfoRedirect}><u>So Now What?</u></a></p>
                <div className = 'search-again-button-container'>
                {!this.props.userId ? <Button className = 'saved-button'>Log In To Save</Button>   
                :
                this.state.isSaved ? <Button className = 'saved-button'>Saved!</Button>
                : <Button className = 'save-button' inverted = {'true'} onClick = {() => this.handleSaveResult(fourYearCompleteTotal)}>Save This Result</Button>
                }
                <Button className = 'search-again-button' onClick = {this.onHomeScreenRedirect}>Search Again!</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName:state.userName,
        userId:state.userId,
        total: state.total,
        schoolName:state.schoolName,
        tuitionTotal:state.tuitionTotal,
        roomingTotal:state.roomingTotal,
        textbookTotal:state.textbookTotal,
        laptopTotal:state.laptopTotal,
        carTotal:state.carTotal,
        foodTotal:state.foodTotal,
        restaurantTotal:state.restaurantTotal,
        phoneTotal:state.phoneTotal,
        internetTotal:state.internetTotal,
        healthTotal:state.healthTotal,
        carMaintTotal:state.carMaintTotal,
        spotifyTotal:state.spotifyTotal,
        amazonPrimeTotal:state.amazonPrimeTotal,
        netflixTotal:state.netflixTotal,
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
      onSearchAgain: () => dispatch({type: 'SEARCH_AGAIN'})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(TotalCost)
