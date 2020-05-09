import React from 'react'

import classes from './BuildControl.module.css'
const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>-</button>      
            <button className={classes.More} onClick={props.added}>+</button>
        </div>
    )
}

export default BuildControl
