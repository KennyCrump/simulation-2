import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'

import {updateName, updateAddress, updateCity, updateState, updateZip} from '../../ducks/reducer'

class StepOne extends Component{
    constructor(props){
        super(props)

        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    handleInputChange = () => {

    }
    
    resetState = () => {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })
    }

    // postNewHouse = () => {
    //     console.log('sending house info')
    //     axios.post('/api/house', this.state)
    //     .then(console.log("house info sent to backend"))

    //     this.resetState()
    // }
    render(){
        console.log(this.state)
        return(
            <div>
                <p>StepOne</p>
                <div className="stepOne">
                    <h2>Property Name</h2>
                    <input placeholder="Property Name" 
                        onChange={e => this.props.updateName(e.target.value)} 
                        value={this.props.name} 
                        type="text"/>
                    <br/>
                    <h2>Address</h2>
                    <input placeholder="Address" 
                        onChange={e => this.props.updateAddress(e.target.value)} 
                        value={this.props.address} 
                        type="text"/>
                    <br/>
                    <h2>City</h2>
                    <input placeholder="City" 
                        onChange={e => this.props.updateCity(e.target.value)} 
                        value={this.props.city} 
                        type="text"/>
                    <br/>
                    <h2>State</h2>
                    <input placeholder="State" 
                        onChange={e => this.props.updateState(e.target.value)} 
                        value={this.props.state} 
                        type="text"/>
                    <br/>
                    <h2>Zip Code</h2>
                    <input placeholder="Zip Code" 
                        onChange={e => this.props.updateZip(e.target.value)} 
                        value={this.props.zip} 
                        type="text"/>    
                    <Link to='/wizard/steptwo'><button>Next</button></Link>
                </div>
                
            </div>
        )
    }
}
function moveFromStoreToProps(appState){
    let { name, address, city, state, zip } = appState
    return {
        name,
        address,
        city,
        state,
        zip
    }
}

const outputActions = {
    updateName,
    updateAddress,
    updateCity,
    updateState,
    updateZip

}

const connected = connect(moveFromStoreToProps, outputActions)
export default connected(StepOne)


