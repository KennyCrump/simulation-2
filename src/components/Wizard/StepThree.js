import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

import {updateMortgage, updateRent, clearStore} from '../../ducks/reducer'

class StepThree extends Component{
    constructor(props){
        super(props)

        this.state ={
            mortgage: '',
            rent: ''
        }
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

    postNewHouse = () => {
        console.log(this.props)
        let {name, address, city, state, zip, img, mortgage, rent} = this.props
        axios.post('/api/house', {name, address, city, state, zip, img, mortgage, rent})
        .then(this.props.clearStore)

        // this.resetState()
    }


    render(){
        console.log(this.state)
        return(
            <div>
                <p>StepThree</p>
                <div className="stepThree">
                    <h2>Monthly Mortgage Amount</h2>
                    <input placeholder="Monthly Mortgage Amount" 
                        onChange={e => this.props.updateMortgage(e.target.value)} 
                        value={this.props.mortgage} 
                        type="text"/>
                    <h2>Desired Monthly Rent</h2>
                    <input placeholder="Desired Monthly Rent" 
                        onChange={e => this.props.updateRent(e.target.value)} 
                        value={this.props.rent} 
                        type="text"/>
                    <Link to='/wizard/steptwo'>
                        <button>Previous</button>
                    </Link>
                    <Link to='/'>
                    <button onClick={this.postNewHouse}>Add New House</button>
                    </Link>
                </div>
                
            </div>
        )
    }
}

function moveFromStoreToProps(appState){
    let { name, address, city, state, zip, img, mortgage, rent } = appState
    return {
        name,
        address,
        city,
        state,
        zip,
        img,
        mortgage,
        rent
    }
}

const outputActions = {
    updateMortgage,
    updateRent,
    clearStore

}

const connected = connect(moveFromStoreToProps, outputActions)
export default connected(StepThree)