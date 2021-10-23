import React, { Component } from 'react';

class Groceries extends Component {
    constructor(props) {
        super(props);

        this.state = {buttonClickState: false};

        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick() {
        this.setState({
            buttonClickState: true
        });
        console.log(this.state.buttonClickState);
    }

    render() {
        let ingredients = []
        for (var i = 0; i < this.props.items.length; i++) {
            for (var j = 0; j < this.props.items[i].ingredients.length; j++) {
                let ingredient = this.props.items[i].ingredients[j]

                ingredients.push(<div><b>Ingredient: </b> {ingredient.name}</div>);
            }
        }

        let { buttonClickState } = this.state;
        let GroceryListView;

        if (buttonClickState) {
            GroceryListView = <div>{ingredients}</div>
        } else {
            GroceryListView = <span></span>
        }

        return (
            <div>
                <button onClick={this.onButtonClick}>Get Grocery List</button> 
                {GroceryListView}
            </div>
        );
    }
}

export default Groceries;