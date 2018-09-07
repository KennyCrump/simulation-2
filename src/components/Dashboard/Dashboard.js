import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state = {
            houses: []
        }
        // this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
        axios.get('/api/houses')
        .then(res => this.setState({houses: res.data}))
    }
    
    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then(res => {
            console.log("delete info sent from front end")
            console.log("Delete RES DATA: ", res.data)
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        console.log("Dashboard State: ", this.state)
        console.log("Match Params: ", this.props.match)

        
        const houseList = this.state.houses.map(house => {
            console.log("House: ", house)
            let {id, name, address, city, state, zip, img, mortgage, rent} = house
            return <House key={id}
                    houseId={id}
                    name={name}
                    address={address}
                    city={city}
                    state={state}
                    zip={zip}
                    img={img}
                    mortgage={mortgage}
                    rent={rent}
                    deleteHouse={this.deleteHouse}
                    />
        })
        return(
            <div className="Dashboard">
                <div className="top-dash">
                    <h1>Dashboard</h1>
                    <Link to='/wizard/stepone'>
                        <button className="add-new-button"><h2>Add New Property</h2></button>
                    </Link>
                </div>
                    <h2 className="section-name">Home Listings</h2>
                    {houseList}
                {/* <House /> */}
            </div>
        )
    }
}
export default Dashboard