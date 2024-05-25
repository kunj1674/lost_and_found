import React from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import Navbar from './components/navbar';

const App = () => {
    return (
        <div className="App bg-slate-500">
            <Navbar />
            <AddItem />
            <ItemList />
        </div>
    );
};

export default App;
