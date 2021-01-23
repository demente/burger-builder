import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(k => {
            return <li key={k}>
                <span style={{ textTransform: 'capitalize' }}>{k}</span>: {props.ingredients[k]}
            </li>
        })

    return (
        <>
            <h3>Your order</h3>
            <p>Delicious burger with the following inredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <Button type="Danger"
            clicked={props.cancel}>Cancel</Button>
            <Button type="Success"
            clicked={props.order}>Continue to checkout</Button>
        </>
    );
};

export default orderSummary;