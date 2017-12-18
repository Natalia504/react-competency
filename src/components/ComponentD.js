import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';



// COMP 
export default class ComponentD extends Component {
    constructor(){
        super()
         this.state={
             character: {}
         }
    }
    
    componentDidMount(id){
        // console.log(this.props)
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
            .then(res => {
                console.log(res)
                this.setState({
                    character: res.data
                })
            })
    }


  render() {
    return (
    <div>
        {this.state.character.name}
        <Link to='/'><button>Back to Names</button></Link>
    </div>
      
    )
  }
}