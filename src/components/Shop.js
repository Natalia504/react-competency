import React, { Component } from 'react'
import axios from 'axios'
import './../components/shop.css'

export default class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemName: "",
            itemPrice: null, 
            itemCreated: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange1(e){
        this.setState({
            itemName: e.target.value
        })
    }

    handleChange2(e){
        this.setState({
            itemPrice: e.target.value
        })
    }

    handleClick(){
       axios.post('/api/addItem', {item_name: this.state.itemName, item_price: this.state.itemPrice})
       
       .then( res => ({
           
           itemCreated: true
       })
       )}

  render() {
    return (
      <div>
        <input type="text" onChange={this.state.handleChange1}/>
        <input type='text' onChange={this.state.handleChange2}/>
        <button onClick={this.handleClick}>Create Item</button>
      </div>
    )
  }
}
