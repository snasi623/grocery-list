import React, { Component } from 'react';
import axios from 'axios';
import Meals from './Meals/Meals';

class GroceryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.getGroceries();
        this.addMeal = this.addMeal.bind(this);
    }

    getGroceries() {
        var foodAPI = {
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            apikey: '57c2c90b38msheb41e5bb4afcb98p17dd72jsn599dc11da7b1'
        }

        var params = {
            fmt: 'json',
            params: {from: '0', size: '20', q: 'apple'},
            headers: {
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': '57c2c90b38msheb41e5bb4afcb98p17dd72jsn599dc11da7b1'
            }
        }

        axios.get(foodAPI.url, params).then(response => 
            console.log(response)
        )
    }

    addMeal(e) {
        if (this.mealName.value !== "") {
            var newItem = {
                text: this.mealName.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this.mealName.value = "";
        }
        e.preventDefault();
        console.log(this.state.items)
    }

    render() {
        return (
            <div>
                <h1>React App</h1>
                <p>Search for a recipe you want to cook this week to get a list of groceries you will need to buy.</p>
                <form onSubmit={this.addMeal}>
                    <input placeholder="Search for a recipe" type="text"/>
                    <button>Submit</button>
                </form>
                <Meals entries={this.state.items}/>
            </div>
        )
    }
}

export default GroceryList;