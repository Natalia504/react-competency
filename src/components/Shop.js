import React, { Component } from 'react'
import axios from 'axios'
import './../components/shop.css'

export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            itemName: "",
            itemPrice: null,
            itemCreated: false,
            allItems: [], 
            deletedItem: [], 
            itemEdited: false, 
            found: []
        }

        this.handleClick = this.handleClick.bind(this)  
        this.deleteItem  = this.deleteItem.bind(this)  
        this.showAllItems = this.showAllItems.bind(this)    
        this.searchItems = this.searchItems.bind(this)    
        
    }

    handleChange1(val) {
        this.setState({
            itemName: val
        })
    }
    handleChange2(val) {

        this.setState({
            itemPrice: val
        })
    }

    handleClick() {
        axios.post('http://localhost:8080/api/addItem', { item_name: this.state.itemName, item_price: this.state.itemPrice })
            .then(res => ({
                itemCreated: true
            })
            )
    }

    showAllItems() {
        axios.get('http://localhost:8080/api/allItems')
            .then(res => {
                this.setState({
                    allItems: res.data
                })
            })
    }

    deleteItem(id){
        axios.delete(`http://localhost:8080/api/deleteItem/${id}`)
        .then(res => {
            console.log("DELETE", res)
            this.setState({
                deletedItem: res.data
            })
        })
    }
    editItem(id){
        axios.put(`http://localhost:8080/api/editItem/${id}`, { item_name: this.state.itemName, item_price: this.state.itemPrice })
        .then(res => {
            itemEdited: true
        })
        
    }

    searchItems(){
        axios.get(`http://localhost:8080/api/search?name=${this.state.itemName}`)
        
        .then(res => {
            this.setState({
                found: res.data
            })
            // console.log(res.data, "search")
        }) 
    }

    render() {
        console.log("STATE", this.state)

       
        return (
            <div>
                <input type="text" onChange={(e) => this.handleChange1(e.target.value)} />
                <input type='text' onChange={(e) => this.handleChange2(e.target.value)} />
                <button onClick={this.handleClick}>Create Item</button>    
                <button onClick={this.showAllItems}>Show ALL Item</button>  
                <button onClick={this.searchItems}>Search</button>  


                 {this.state.allItems.map((item, i) => {
            return (
                <div key={i}>
                    <p>NAME: {item.item_name}</p>
                    <p>PRICE: {item.item_price}</p>
                    <button onClick={() => {this.deleteItem(item.id)}}>X</button>
                    <button onClick={() => {this.editItem()}}>Edit item</button>

                </div>
            )
        })}
        {this.state.found.map((item, i) => {
            return <div key={i}>
                {item.item_name}
                {item.item_price}
            </div>

        })}
            </div>
        )
    }
}
