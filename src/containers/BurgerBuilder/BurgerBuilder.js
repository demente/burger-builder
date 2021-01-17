import { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "./../../components/Burger/Burger";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.5,
    bacon: 0.7
};

class BuilderBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };

        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount === 0){
            return;
        }

        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };

        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}/>
        
            </>
        );
    }
}

export default BuilderBuilder;