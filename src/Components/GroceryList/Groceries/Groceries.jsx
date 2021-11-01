import React, { Component } from 'react';
import _ from 'lodash';

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

    getAllIngredients() {
        let result = []
        for (var i = 0; i < this.props.items.length; i++) {
            for (var j = 0; j < this.props.items[i].ingredients.length; j++) {
                result.push(this.props.items[i].ingredients[j])
            }
        }
        result = result.filter((element, index, array) => array.indexOf(element) === index);
        result = _.orderBy(result, [el => el.toLowerCase()], ['asc'])
        return result;
    }

    render() {
        let ingredients = []
        this.getAllIngredients().forEach((ingredient) => {
            ingredients.push(<div><input type="checkbox" /> {ingredient}</div>);
        })

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