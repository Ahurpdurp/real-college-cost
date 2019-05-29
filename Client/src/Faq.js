import React, { Component } from "react";
import './Faq.css'
import Button from 'react-bulma-components/lib/components/button';
import './Home.css'

class Faq extends Component{
    handleFaq = () => {
        this.props.history.push('/')
        window.location.reload();
    }
    render(){
        return(
            <div>
                <div className = 'faq-button'>
                    <Button onClick = {this.handleFaq}>
                        Home
                    </Button> 
                </div>
                <h1 className = 'faq-header'>Frequetly Asked Questions:</h1>
                <div className = 'faq-container'>
                    <h2>Is this website intended to discourage students from intending college?</h2>
                </div>
                <div className = 'faq-container'>
                    <p>Absolutely not. As someone who attended a fairly expense college (Rice University), the purpose of this website is to give an <i>honest</i> outlook 
                    at the total cost of college. I've worked as a part-time SAT/ACT and College Prep tutor for years now and have always encouraged students to attend college - I created this so that people would know exactly what was to be expected.
                    </p>
                </div>
                <div className = 'faq-container'>
                    <h2>Why are some values filled in already and some blank?</h2>
                </div>
                <div className = 'faq-container'>
                    <p>The estimates for tuition and housing that you see pre-filled come from College Scorecard (<a target = '_blank' rel="noopener noreferrer" href = 'https://collegescorecard.ed.gov/data/documentation/'>Source</a>). 
                    Everything else is just my ballpark estimate. For example, grocery costs are <i>fairly</i> consistent, regardless of where you live. So that's why there's a pre-filled estimate. For other things, like clothing, it's really hard to get a 
                    comprehensive estimate for everyone, so I just leave that blank for each person to fill out. There isn't data for every college, so if you select one of those colleges, you'll have to fill out your own stuff.
                    </p>
                </div>
                <div className = 'faq-container'>
                    <h2>What does logging in actually do?</h2>
                </div>
                <div className = 'faq-container'>
                    <p>
                        Logging in allows you to save your results. If you want to compare different colleges or see your past results, then log in. If not,
                        you can still use everything - you just can't save your results. Why are you only allowed to log in through Facebook or Twitter? Well...to be honest who the heck's going to use 
                        the login feature if they have to create their own username and special password? No one has time for that :)
                    </p>
                </div>
                <div className = 'faq-container'>
                    <h2>Something's bugged/the website broke.</h2>
                </div>
                <div className = 'faq-container'>
                    <p>Sorry about that. There might still be some bugs to figure out, especially in the tuition estimate section. Email me at j.paul.wu@gmail.com if you see anything that you want to report.
                    </p>
                </div>
                <div className = 'faq-container'>
                    <h2>Who made this?</h2>
                </div>
                <div className = 'faq-container'>
                    <p>My name is Paul Wu. Check out <a href = 'https://paul-wu.net' target = '_blank' rel = 'noopener noreferrer'>my website</a> for more information :) 
                    </p>
                </div>
            </div>
        )
    }
}

export default Faq