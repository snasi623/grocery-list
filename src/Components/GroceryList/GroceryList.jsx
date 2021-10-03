import React, { Component } from 'react';
import axios from 'axios';
import Meals from './Meals/Meals';

class GroceryList extends Component {
    constructor(props) {
        super(props);

        this.getGroceries();
    }

    getGroceries() {
        var foodAPI = {
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            apikey: '57c2c90b38msheb41e5bb4afcb98p17dd72jsn599dc11da7b1'
        }

        console.log(foodAPI.toString());

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

    render() {
        return (
            <div>
                <h1>TESTED</h1>
                <form>
                    <input placeholder="Search for a recipe" type="text"/>
                    <button>Submit</button>
                </form>
                <Meals/>
            </div>
        )
    }
}

export default GroceryList;