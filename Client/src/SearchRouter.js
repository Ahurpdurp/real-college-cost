import React, {Component} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Search from './Search.js'
import 'react-bulma-components/lib/components/form';
import './Main.css'
import Tuition from './Tuition.js'
import RoomAndBoard from './RoomAndBoard.js'
import Textbooks from './Textbooks.js'
import Monthly from './Monthly.js'
import Subscriptions from './Subscriptions.js'
import Misc from './Misc.js'
import TitleHeader from './Header.js'
import TotalCost from './TotalCost.js'
class Main extends Component{
    render(){
        return(
        <div className = 'body-container'>
            <BrowserRouter>

                <Switch>
                    <Route exact path = {this.props.match.path} component={Search}/>
                    <Route exact path = {`${this.props.match.path}/2`} component = {Tuition} />
                    <Route exact path = {`${this.props.match.path}/3`} component = {RoomAndBoard} />
                    <Route exact path = {`${this.props.match.path}/4`} component = {Textbooks} />
                    <Route exact path = {`${this.props.match.path}/5`} component = {Monthly} />
                    <Route exact path = {`${this.props.match.path}/6`} component = {Subscriptions} />
                    <Route exact path = {`${this.props.match.path}/7`} component = {Misc} />
                    <Route exact path = '/main/total' component = {TotalCost} />
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