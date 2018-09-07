//type strings turned into variables
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_RENT = 'UPDATE_RENT'
const CLEAR_STORE = 'CLEAR_STORE'

//EXPORT FUNCTIONS
export function clearStore(){
    return{
        type: CLEAR_STORE,
        payload: initialState
    }
}

export function updateName(name){
    return{
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address){
    return{
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state){
    return{
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip){
    return{
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImg(img){
    return{
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateMortgage(mortgage){
    return{
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent){
    return{
        type: UPDATE_RENT,
        payload: rent
    }
}

const initialState ={
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
}

function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_NAME:{
            const newState = Object.assign({}, state, {name: action.payload})
            return newState
        }
        case UPDATE_ADDRESS:{
            const newState = Object.assign({}, state, {address: action.payload})
            return newState
        }
        case UPDATE_CITY:{
            const newState = Object.assign({}, state, {city: action.payload})
            return newState
        }
        case UPDATE_STATE:{
            const newState = Object.assign({}, state, {state: action.payload})
            return newState
        }
        case UPDATE_ZIP:{
            const newState = Object.assign({}, state, {zip: action.payload})
            return newState
        }
        case UPDATE_IMG:{
            const newState = Object.assign({}, state, {img: action.payload})
            return newState
        }
        case UPDATE_MORTGAGE:{
            const newState = Object.assign({}, state, {mortgage: action.payload})
            return newState
        }
        case UPDATE_RENT:{
            const newState = Object.assign({}, state, {rent: action.payload})
            return newState
        }
        case CLEAR_STORE:{
            const newState = Object.assign({}, initialState)
            return newState
        }
        default: return state
    }
}

export default reducer