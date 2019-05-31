import React, { Component } from "react";
import './Faq.css'
import './Home.css'

class InfoPage extends Component{
    handleFaq = () => {
        this.props.history.push('/')
        window.location.reload();
    }
    render(){
        return(
            <div className = 'faq-div'>
                <h1 className = 'faq-header'>If the final number's looking a little high...don't panic</h1>
                <div className = 'faq-container'>
                    <h3>College is expensive, but it's an investment - countless students have graudated from college to do great things. It's always important to plan ahead. Remember, I didn't make this website to discourage 
                        people from going, but to simply have an honest outlook. There are plenty of ways to cut the cost down, and I'll list a few below:
                    </h3>
                </div>
                <div className = 'faq-container'>
                    <h3>Scholarships.</h3>
                    <p>This is a huge one. There are many websites that can help you, <a target = '_blank' rel = 'noopener noreferrer' href = 'https://www.collegerank.net/best-scholarship-websites/'>like this one.</a></p>
                    <h3>Community College.</h3>
                    <p>Community colleges are insanely cheap and you can always transfer to a more expensive college later on.</p>
                    <h3>Buy Used Textbooks.</h3>
                    <p>I know it sounds simple, but seriously: do it. I know some classes require you to buy the latest edition so you can get the online key to do homework, 
                        but whenever you can, buy used textbooks. You can basically sell them for the same price afterwards. Also, probably shouldn't say this, but oftentimes you can find the textbook online (or at least an edition of it).
                    </p>
                    <h3>Live off-campus</h3>
                    <p>Living on-campus is super fun, but getting roommates and finding an apartment nearby is far cheaper.</p>
                    <h3>You may qualify for in-state even if you're not in the same state.</h3>
                    <p>For public colleges, you can usually get a discount if you're in the same state that the college is in. But in many instances, 
                        you can get in-state tuition even if you're not in the same state (ex. students from Texas can get in-state tuition for Oklahoma University).
                    </p>
                    <h3>Graduate Early.</h3>
                    <p>Taking AP classes and high school classes that give college credit can allow you to graduate early, which save a boatload.</p>
                    <h3>Work Part-Time</h3>
                    <p>Universities usually offer work-study programs, or you can find a part-time job somewhere to take care of the day to day costs. Also tutoring is a 
                        great way to help others and make money on the side.
                    </p>
                    <h3>And Many More Options...</h3>
                    <p>I'm only glossing over each topic, and chances are, I haven't covered a lot of things. College is a challenging, yet great, experience. It's not the only route you can take after high school, 
                        but if you're set on going to college, the most important is planning ahead. Good luck :)
                    </p>
                </div>
            </div>
        )
    }
}

export default InfoPage