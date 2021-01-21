import React from 'react';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(k => {
        return <li key={k}>
            <span style={{textTransform: 'capitalize'}}>{k}</span>: {props.ingredients[k]}
            </li>
    })
   
   return (
        <>
            <h3>Your order</h3>
            <p>Delicious burger with the following inredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <button>Continue to checkout</button>
        </>
    );
};

export default orderSummary;