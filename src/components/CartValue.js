import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Import the useContext hook, and pass AppContext to it - this is how a component connects to the context in order to get values from global state.
const CartValue = () => {
    const{expenses, Location} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span>
        </div>
    )
};

export default CartValue;
