import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './Components/GroceryList/GroceryList'
import MyTabs from './Components/GroceryList/MyTabs/MyTabs';

var container = document.querySelector("#container")

ReactDOM.render(
    <MyTabs/>,
    container
)