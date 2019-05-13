import React, {Component} from 'react';
import 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import { connect } from 'react-redux'
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';
import './TotalCost.css'


class TotalCost extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){

        let tuitionPercentage = (100 * this.props.tuitionTotal/this.props.total).toFixed(0)
        let roomingPercentage = (100 * this.props.roomingTotal/this.props.total).toFixed(0)
        let textbookTotal = this.props.laptopTotal + this.props.textbookTotal
        let textbookPercentage = (100 * textbookTotal/this.props.total).toFixed(0)
        let monthlyTotal = this.props.foodTotal + this.props.internetTotal + this.props.phoneTotal
        let monthlyPercentage = (100 * monthlyTotal/this.props.total).toFixed(0)
        let subscriptionTotal = this.props.spotifyTotal + this.props.amazonPrimeTotal + this.props.netflixTotal
        let subscriptionPercentage = (100 * subscriptionTotal/this.props.total).toFixed(0)
        let miscTotal = this.props.drinkTotal + this.props.alcoholTotal + this.props.clubTotal + this.props.clothingTotal + this.props.customTotal
        let miscPercentage = (100 * miscTotal/this.props.total).toFixed(0)
        let fourYearTuition = (this.props.tuitionTotal + this.props.tuitionTotal*1.035 + this.props.tuitionTotal * 1.071 + this.props.tuitionTotal * 1.108).toFixed(2)
        let nonTuitionTotal = this.props.roomingTotal + textbookTotal + monthlyTotal + subscriptionTotal + miscTotal
        let fourYearNonTuition = (nonTuitionTotal + nonTuitionTotal * 1.02 + nonTuitionTotal * 1.0404 + nonTuitionTotal * 1.061208).toFixed(2)
        let fourYearCompleteTotal = (parseInt(fourYearNonTuition) + parseInt(fourYearTuition)).toFixed(2)
        return(
            <div>
                <Heading subtitle>For one year, your total is: </Heading>
                <Heading>{this.props.total} Dollars!.</Heading>
                <Heading>Let's see how your costs break down for {this.props.schoolName}:</Heading>
                <div className = 'flex-container'>
                <Card>
                    <Card.Image src="https://www.pinclipart.com/picdir/big/253-2533581_tuition-clipart.png" />
                    <Card.Content>            
                        <Heading size={4}>Tuition</Heading>
                        <Content>
                            Tuition's usually the biggest cost. According to these estimates, your tuition costs will be ${this.props.tuitionTotal} for one year, or about {tuitionPercentage}%. If you're not thinking about tuition
                            for the estimate, then this percentage should be 0.
                        </Content>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Image src="https://www.pinclipart.com/picdir/big/113-1130894_dorms-hotel-room-icon-clipart.png" />
                    <Card.Content>            
                        <Heading size={4}>Housing</Heading>
                        <Content>
                            Your total Housing costs will be the biggest month by month cost if you're living off campus. Your estimate is ${this.props.roomingTotal}, 
                            which totals to {roomingPercentage}% of the total. 
                        </Content>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Image src="https://www.pinclipart.com/picdir/big/160-1605719_graphic-black-and-white-library-buyback-campaign-on.png" />
                    <Card.Content>            
                        <Heading size={4}>School Equipment</Heading>
                        <Content>
                            School Equipment, aka laptop and textbooks. Totaled to ${textbookTotal}, which is {textbookPercentage}% of the total.
                        </Content>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Image src="https://www.pinclipart.com/picdir/big/22-220493_grow-room-financing-blue-cash-svg-clipart.png" style = {{'margin-bottom':'-2em'}}/>
                    <Card.Content>            
                        <Heading size={4}>Monthly Costs</Heading>
                        <Content>
                            These are the main monthly costs other than rent. Your estimate is ${monthlyTotal}, which makes up {monthlyPercentage}% of your 
                            total estimate. 
                        </Content>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Image src="https://www.pinclipart.com/picdir/big/8-88018_iphone-with-headphones-clipart-apple-earbuds-headphones-phone.png" />
                    <Card.Content>            
                        <Heading size={4}>Subscriptions and Services</Heading>
                        <Content>
                            I don't see how anyone can live without Netflix or Spotify. This is definitely the most important section. Estimate: ${subscriptionTotal}, making up {subscriptionPercentage}% of the total.
                        </Content>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Image src="https://www.pinclipart.com/picdir/big/58-582431_pizza-clip-soda-soft-drink-png-download.png" />
                    <Card.Content>            
                        <Heading size={4}>Recreational Costs</Heading>
                        <Content>
                            College is, after all, just one big party. ${miscTotal} is your estimate, {miscPercentage}% of the total.
                        </Content>
                    </Card.Content>
                </Card>
                </div>
                <Content>So that's the cost of one year. Now what's the total cost? Let's start with tuition, since tuition increase at a much higher rate than the average 
                    rate of inflation. According to the College Board data <a href = 'https://www.savingforcollege.com/tutorial101/the-real-cost-of-higher-education' target = '_blank'>(Source)</a>,
                    the average rate of inflation recently was around the 3-4% range. Using this estimate, your estimated four year tuition cost is: <b>${fourYearTuition}</b>
                </Content>
                <Content>
                    So this part gets a little tricky. Your non-tuition estimate is {nonTuitionTotal}. You can always be sure that tuition will rise at disgusting rates every year, but inflation can vary.
                    Plus, inflation affects all of our categories in different ways. For our estimation, we're going to assume an inflation rate of 2% every year because that's what it's been for the past 
                    few years. Using that estimate, your four year non-tuition estimate is <b>${fourYearNonTuition}</b>. 
                </Content>
                <Heading>So without further ado, you're grand grand total is....</Heading>
                <Heading><b>${fourYearCompleteTotal}</b></Heading>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        schoolName:state.schoolName,
        tuitionTotal:state.tuitionTotal,
        roomingTotal:state.roomingTotal,
        textbookTotal:state.textbookTotal,
        laptopTotal:state.laptopTotal,
        foodTotal:state.foodTotal,
        restaurantTotal:state.restaurantTotal,
        phoneTotal:state.phoneTotal,
        internetTotal:state.internetTotal,
        spotifyTotal:state.spotifyTotal,
        amazonPrimeTotal:state.amazonPrimeTotal,
        netflixTotal:state.netflixTotal,
        drinkTotal:state.drinkTotal,
        alcoholTotal:state.alcoholTotal,
        clubTotal:state.clubTotal,
        clothingTotal:state.clothingTotal,
        customTotal:state.customTotal
    }
}

export default connect(mapStateToProps)(TotalCost)