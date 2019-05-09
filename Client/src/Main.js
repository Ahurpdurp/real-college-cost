import React, {Component} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './Search.js'
import 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import './Main.css'
import Tuition from './Tuition.js'
import RoomAndBoard from './RoomAndBoard.js'

class Main extends Component{
    render(){
        return(
        <div className = 'body-container'>
            <Heading className = 'header'>RealCollegeCost</Heading>
            <BrowserRouter>
                <Switch>
                    <Route exact path ='/main/1' component={Search}/>
                    <Route exact path ='/main/2' component = {Tuition} />
                    <Route exact path ='/main/3' component = {RoomAndBoard} />
                </Switch>   
            </BrowserRouter>   
        </div>
        )
    }
}

export default Main