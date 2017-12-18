import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAll } from './../redux/reducer'
import ComponentC from './ComponentC'
import { Link } from 'react-router-dom';



 class ComponentB extends Component {
     constructor(){
         super()
         this.state = {
             greeting : "Hello, All!"
         }
         this.handleClick = this.handleClick.bind(this)
     }

// COMP 36J 37C
     handleClick(){
        this.setState({
          greeting: "Goodbye"
        })
      }

// COMP 38C 38D

componentDidMount(){
 this.props.getAll();
}

  render() {
      let planet = this.props.allPlanets.map((item, i) => {
          return(
              <div key={i}>
                  {item.name}
              </div>
          )
      })
      
    return (
      <div>
          <h1>PLANETS</h1>
        {planet}
        <ComponentC greeting1={this.state.greeting} greeting2={"Goodbye"}/>
        <button onClick = {this.handleClick}>Click me</button>
        <Link to='/componentD'><button>Next Component</button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        allPlanets: state.allPlanets
    }
}
export default connect (mapStateToProps, {getAll})(ComponentB)