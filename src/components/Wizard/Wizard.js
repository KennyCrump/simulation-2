import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Wizard.css'
// import axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import {clearStore} from '../../ducks/reducer'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

class Wizard extends Component{
    // constructor(props){
    //     super(props)

    // }

    handleInputChange = () => {

    }
    
    // resetState = () => {
    //     this.setState({
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: ''
    //     })
    // }

    // postNewHouse = () => {
    //     console.log('sending house info')
    //     axios.post('/api/house', this.state)
    //     .then(console.log("house info sent to backend"))

        // this.resetState()
    // }
    render(){
        console.log(this.state)
        return(
            <div>
                <p>Wizard</p>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>

                <div className="form">
                    <Switch>
                        <Route exact path="/wizard/stepone" component={StepOne}/>
                        <Route path="/wizard/steptwo" component={StepTwo}/>
                        <Route path="/wizard/stepthree" component={StepThree}/>


                    </Switch>
                </div>
                
            </div>
        )
    }
}
function moveFromStoreToProps(appState){
    return {}
}
const outputActions = {
    clearStore
}

let connected = connect(moveFromStoreToProps, outputActions)
export default connected(Wizard)