import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {updateImg} from '../../ducks/reducer'

class StepTwo extends Component{
    constructor(props){
        super(props)

        this.state ={
            img: ''
        }
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <p>StepTwo</p>
                <div className="stepThree">
                    <h2>Image URL</h2>
                    <input placeholder="Image URL" 
                        onChange={e => this.props.updateImg(e.target.value)} 
                        value={this.props.img} 
                        type="text"/>
                    <Link to='/wizard/stepone'>
                        <button>Previous</button>
                    </Link>
                    <Link to='/wizard/stepthree'>
                        <button>Next</button>
                    </Link>
                </div>
                
            </div>
        )
    }
}

function moveFromStoreToProps(appState){
    let { img } = appState
    return {
        img
    }
}

const outputActions = {
    updateImg

}

const connected = connect(moveFromStoreToProps, outputActions)
export default connected(StepTwo)