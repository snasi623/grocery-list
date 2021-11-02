import React, { Component } from 'react';
import axios from 'axios';
import Meals from './Meals/Meals';
import Groceries from './Groceries/Groceries';
import './styles.css';

class GroceryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.onSearch = this.onSearch.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }

    getRecipes(query) {
        var foodAPI = {
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            apikey: '57c2c90b38msheb41e5bb4afcb98p17dd72jsn599dc11da7b1'
        }

        var params = {
            fmt: 'json',
            params: {from: '0', size: '25', q: query},
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

                let recipe;
                for (let i = 0; i < response.data.results.length; i++) {
                    if (response.data.results[i].canonical_id.indexOf('recipe') !== 0) {
                        continue;
                    }
                    recipe = response.data.results[i];
                }

                if (!recipe) {
                    window.alert('No recipe found');
                    return;
                }

                let newItem = {
                    text: this.mealName.value,
                    key: Date.now(),
                    link: recipe.slug,
                    ingredients: this.calculateIngredients(recipe)
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
    }

    calculateIngredients(recipe) {
        let result = [];
        for (let i = 0; i < recipe.sections.length; i++) {
            for (let j = 0; j < recipe.sections[i].components.length; j++) {
                let ingredientName = recipe.sections[i].components[j].ingredient.display_singular
                result.push(ingredientName);
            }
        }

        return result;
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="row">
                <h1>Fridge Friend</h1>
                <p>Search for a recipe you want to cook this week to get a list of groceries you will need to buy.</p>
                <div className="col">
                    <form onSubmit={this.onSearch}>
                        <input ref={(a) => this.mealName = a} placeholder="Search for a recipe" type="text"/>
                        <button class="btn btn-light">Submit</button>
                    </form>
                    <Meals entries={this.state.items} delete={this.deleteItem} />
                </div>
                <Groceries items={this.state.items}/>
            </div>
        )
    }
}

export default GroceryList;