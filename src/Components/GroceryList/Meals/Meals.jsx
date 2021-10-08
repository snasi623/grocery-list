import React, { Component } from 'react';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.createMeal = this.createMeal.bind(this);
    }

    createMeal(item) {
        return (
            <div key={item.key}>
                <div id="mealName">{item.text}</div>
                <a href={`https://tasty.co/recipe/${item.link}`}>Recipe</a>
            </div>
        )
    }

    render() {
        var mealEntries = this.props.entries;
        var listMeals = mealEntries.map(this.createMeal);

        return (
            <div className="listOfMeals">
                {listMeals}
            </div>
        )
    }
}

export default Meals;