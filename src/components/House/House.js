import React from 'react'
import './House.css'


export default function House(props){
    let {name, address, city, state, zip, img, mortgage, rent, houseId, deleteHouse} = props
    
    return(
        <div className="House">
            <img className="house-img" src={img} alt="house"/>
            <div className="house-info">
                <p className="house-info-text">Property Name: {name}</p>
                <p className="house-info-text">Address: {address}</p>
                <p className="house-info-text">City: {city}</p>
                <p className="house-info-text">State: {state}</p>
                <p className="house-info-text">Zip: {zip}</p>
            </div>
            <div className="house-info">
                <p className="house-info-text">Monthly Mortgage: {mortgage}</p>
                <p className="house-info-text">Desired Rent: {rent}</p>
            </div>
            <button className="delete-button" onClick={() => deleteHouse(houseId)}><h2>X</h2></button>

        </div>

    )
}