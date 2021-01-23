import { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "./../../components/Burger/Burger";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 4,
        purchasing: false
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

        if (oldCount === 0) {
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

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        const purchasable = Object.keys({ ...this.state.ingredients }).map(
            key => {
                return disabledInfo[key]
            }
        ).reduce((s, el) => {
            return s && el;
        }, true);

        return (
            <>
                <Modal show={this.state.purchasing}
                    modalClosed={() => this.setState({ purchasing: false })}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    cancel= {() => this.setState({ purchasing: false })}
                    order={() => console.log("Ordering")}
                    price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={purchasable}
                    ordered={this.purchaseHandler}
                />

            </>
        );
    }
}

export default BuilderBuilder;