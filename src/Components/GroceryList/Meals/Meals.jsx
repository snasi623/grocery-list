import React, { Component } from 'react';
import '../styles.css';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.createMeal = this.createMeal.bind(this);
    }

    createMeal(item) {
        return (
            <div key={item.key} className="meal">
                <div className="mealName">
                    <a href={`https://tasty.co/recipe/${item.link}`}><h4>{item.text}</h4></a>
                    <button onClick={() => this.delete(item.key)} className="btn btn-dark">Delete</button>
                </div>
            </div>
        )
    }

    delete(key) {
        this.props.delete(key);
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