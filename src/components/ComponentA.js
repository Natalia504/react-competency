import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';



// COMP 36C 36D 36E 36F 36G 36H 36I 36J 37 42H 42E 
export default class ComponentA extends Component {
    constructor(){
        super();

        this.state = {
            allHeroes: []
        }
    }

    componentDidMount(){
        console.log(this.props)
        axios.get('https://swapi.co/api/people')
            .then(res => {
                // console.log(res)
                this.setState({
                    allHeroes: res.data.results
                })
            })
    }


  render() {
    let heroes = this.state.allHeroes.map((item, i) => {
        console.log(item)
        return (
            <div key={i}>
               <Link to={`/componentD/${i + 1}`}><p>NAME:{item.name}</p></Link> 
               <p> HAIR COLOR: {item.hair_color}</p>
            </div>
        )
    })
    return (
    <div>
        <Header/>
        {heroes}
        <Link to='/ComponentB'><button>Planets</button></Link>
    </div>
      
    )
  }
}