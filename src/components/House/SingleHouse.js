import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class SingleHouse extends Component{
    constructor(props){
        super(props)

        this.state={
            name: '',
            address: '', 
            city: '', 
            state: '', 
            img: '', 
            mortgage: '', 
            rent: ''

        }
    }
    componentDidMount(){
        if(this.props.match.path !== '/newHouse'){
            // console.log("Match: ", this.props.match)
            axios.get(`/api/house/${this.props.match.params.id}`).then(res => {
                console.log(res.data)
                let {name, address, city, state, img, mortgage, rent} = res.data[0]
                this.setState({
                    name,
                    address, 
                    city, 
                    state, 
                    img, 
                    mortgage, 
                    rent
                })
            })
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            axios.get(`/api/house/${this.props.match.params.id}`).then(res => {
                console.log(res.data)
                let {name, address, city, state, img, mortgage, rent} = res.data[0]
                this.setState({
                    name,
                    address, 
                    city, 
                    state, 
                    img, 
                    mortgage, 
                    rent
                })
            });
        }
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default SingleHouse