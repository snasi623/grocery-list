import React, { Component } from 'react';
import axios from 'axios';
import Meals from './Meals/Meals';

class GroceryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.onSearch = this.onSearch.bind(this);
    }

    getRecipes(query) {
        var foodAPI = {
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            apikey: '57c2c90b38msheb41e5bb4afcb98p17dd72jsn599dc11da7b1'
        }

        var params = {
            fmt: 'json',
            params: {from: '0', size: '3', q: query},
            headers: {
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': '57c2c90b38msheb41e5bb4afcb98p17dd72jsn599dc11da7b1'
            }
        }

        return axios.get(foodAPI.url, params);
    }

    onSearch(e) {
        if (this.mealName.value !== "") {
            this.getRecipes(this.mealName.value).then(response => {
                console.log('Response', response);

                let recipe = response.data.results[0].canonical_id.indexOf('compilation') !== -1 ?
                    response.data.results[0].recipes[0]
                    : response.data.results[0]
                console.log('Recipe', recipe);

                let newItem = {
                    text: this.mealName.value,
                    key: Date.now(),
                    link: recipe.slug,
                };

                this.setState((prevState) => {
                    return {
                        items: prevState.items.concat(newItem)
                    };
                });

                this.mealName.value = "";
            });
        }
        e.preventDefault();
        console.log(this.state.items)
    }

    render() {
        return (
            <div>
                <h1>React App</h1>
                <p>Search for a recipe you want to cook this week to get a list of groceries you will need to buy.</p>
                <form onSubmit={this.onSearch}>
                    <input ref={(a) => this.mealName = a} placeholder="Search for a recipe" type="text"/>
                    <button>Submit</button>
                </form>
                <Meals entries={this.state.items}/>
            </div>
        )
    }
}

export default GroceryList;