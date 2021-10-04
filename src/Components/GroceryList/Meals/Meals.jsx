import React, { Component } from 'react';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.createMeal = this.createMeal.bind(this);
    }

    createMeal(item) {
        return <div key={item.key}>{item.text}</div>
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