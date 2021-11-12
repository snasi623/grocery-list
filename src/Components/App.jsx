import React from 'react';
import GroceryList from './GroceryList/GroceryList';
import ContactMe from './ContactMe/ContactMe';
import TabList from './TabList/TabList';


function App() {
    return (
        <div>
            <div className="header">
                <h1>Fridge Friend</h1>
            </div>        
            <div className="instructions">Search for a meal you want to cook this week to get a list of groceries you will need to buy. Right click on the meal to open a copy of the recipe for reference.</div>    
            <TabList>
                <div label="Grocery List">
                    <GroceryList/>
                </div>
                <div label="Contact Me">
                    <ContactMe/>
                </div>
            </TabList>
        </div>
    );
}

export default App;