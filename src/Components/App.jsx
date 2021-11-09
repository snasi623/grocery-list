import React from 'react';
import GroceryList from './GroceryList/GroceryList';
import ContactMe from './ContactMe/ContactMe';
import TabList from './TabList/TabList';


function App() {
    return (
        <div>
            <div className="header">
                <img src="/images/icon.png" alt="Fridge Logo" className="icon"/>
                <h1>Fridge Friend</h1>
                <img src="/images/icon.png" alt="Fridge Logo" className="icon"/>
            </div>        
            <div className="instructions">Search for a meal you want to cook this week to get a list of groceries you will need to buy. Right click on the meal to open a copy of the recipe for reference.</div>    
            <TabList>
                <div label="GroceryList">
                    <GroceryList/>
                </div>
                <div label="ContactMe">
                    <ContactMe/>
                </div>
            </TabList>
        </div>
    );
}

export default App;