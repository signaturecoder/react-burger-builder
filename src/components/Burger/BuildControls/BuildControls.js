import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const BuildControls = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
  ];

  return (
    <div className={classes.BuildControls}>
     <p>Current Price : <strong>{props.price}</strong></p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.addIngredients(ctrl.type)}
          removed={() => props.removeIngredients(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>   
    </div>
  );
};

export default BuildControls;
