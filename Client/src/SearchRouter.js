import React, {Component} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Search from './Search.js'
import 'react-bulma-components/lib/components/form';
import Tuition from './Tuition.js'
import RoomAndBoard from './RoomAndBoard.js'
import Textbooks from './Textbooks.js'
import Monthly from './Monthly.js'
import Subscriptions from './Subscriptions.js'
import Misc from './Misc.js'
import TotalCost from './TotalCost.js'
import StateLocation from './StateLocation.js';
import "./SearchRouter.css"
import Faq from './Faq.js'
import Home from './Home.js'
import TopNavbar from './Navbar.js'

class Main extends Component{
    
    onLeaveCheck = () => {
        if(window.confirm("Go back to the home page? All progress will be lost.")){
        }
    }

    render(){
        return(
        <div>
            <BrowserRouter>
            <TopNavbar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <div className = 'body-container'>
                    <Route exact path = '/main' component={Search}/>
                    <Route exact path = '/main/state' component = {StateLocation} />
                    <Route exact path = '/main/2' component = {Tuition} />
                    <Route exact path = '/main/3' component = {RoomAndBoard} />
                    <Route exact path = '/main/4' component = {Textbooks} />
                    <Route exact path = '/main/5' component = {Monthly} />
                    <Route exact path = '/main/6' component = {Subscriptions} />
                    <Route exact path = '/main/7' component = {Misc} />
                    <Route exact path = '/main/total' component = {TotalCost} />
                    <Route path = '/main/faq' component={Faq} />                        
                    </div>
                </Switch>   
            </BrowserRouter>   
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(Main)