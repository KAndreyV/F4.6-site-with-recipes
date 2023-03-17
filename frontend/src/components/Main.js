import React from "react";
import "../styles/Main.css"
import Dishes from "./Dishes";


function Main(props){
    return(
        <>
            <Dishes dishes={props.dishes}/>
        </>
    );
}

export default Main;