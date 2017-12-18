import axios from 'axios';


const initialState = {
    allPlanets: []
}

const GET_ALL = 'GET_ALL';

export function getAll(){
    return {
        
        type: GET_ALL, 
        payload: axios.get('https://swapi.co/api/planets').then(res => res) 
        
    }
}
export default function reducer (state = initialState, action){
    switch(action.type) {
        
        case 'GET_ALL_FULFILLED':
        return Object.assign({}, state, {allPlanets: action.payload.data.results})
        

        default: return state
    }
}