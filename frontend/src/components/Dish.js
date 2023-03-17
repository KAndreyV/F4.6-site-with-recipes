import React from "react";
import Button from 'react-bootstrap/Button';
import Recipes from './Recipes';
import "../styles/Dish.css"

function Dish(props) {
    return(
        <>
            <tr key={props.dish.id}>
                <td>{props.dish.name}</td>
                <td>
                    <img src={props.dish.photo} className="photo_of_dish"/>    
                </td>
                <td>{props.dish.category}</td>
                <td> <Recipes dish={props.dish}/> </td>
            </tr>
        </>
    );
}

export default Dish;