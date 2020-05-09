import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.2,
  meat: 2.5,
  bacon: 1.5,
  cheese: 1,
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients).map((igKey) => {
      return ingredients[igKey];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0)
    this.setState({purchasable: sum > 0});
    console.log(sum);
  }

  handleLessClick = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    
    this.updatePurchasable(updatedIngredients);
  };

  handleMoreClick = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchasable(updatedIngredients);
  };
  render() {

    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.handleMoreClick}
          removeIngredients={this.handleLessClick}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
     
      </Aux>
    );
  }
}

export default BurgerBuilder;
