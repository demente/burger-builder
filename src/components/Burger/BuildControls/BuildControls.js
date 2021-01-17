import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(control => (
            <BuildControl 
            key={control.label} 
            label={control.label} 
            type={control.type}
            added={() => props.ingredientAdded(control.type)} 
            removed={() => props.ingredientRemoved(control.type)}/>
        )
        )}
    </div>
);

export default buildControls;