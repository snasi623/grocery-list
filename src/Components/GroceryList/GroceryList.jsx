import React, { Component } from 'react';
import axios from 'axios';

class GroceryList extends Component {
    constructor(props) {
        super(props);

        this.getGroceries();
    }

    getGroceries() {
        var foodAPI = 'https://api.kroger.com/v1/'
        var params = {
            limit: 6,
            fmt: 'json'
        }

        axios.get(`${foodAPI}?${params}`).then(response => 
            console.log(response)
        )

    }

    render() {
        return (
            <p>TESTED</p>
        )
    }
}

export default GroceryList;