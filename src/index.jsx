import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './Components/GroceryList/GroceryList'

var container = document.querySelector("#container")

ReactDOM.render(
    <GroceryList/>,
    container
)