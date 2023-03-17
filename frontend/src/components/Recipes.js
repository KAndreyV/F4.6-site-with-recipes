import * as React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Dishes.css"


function Recipes(props) {
    const [response, setResponse] = React.useState([]);
    let [requested, resipeReq] = React.useState(false);
    

    const LINK = `http://127.0.0.1:8000/steps/?dish=${props.dish.id}`;

    var steps = [];
    

    function ReqRecipe(){
        axios.get(LINK).then(res => {
            setResponse(res.data.results);
            // console.log(res);
            resipeReq(true);
        });
    };


    for(let i = 0; i < response.length; i+=1) {
        steps.push(response[i]);
    };
    console.log(steps);


    return (
        <>
            <Button onClick={() => ReqRecipe()}>Рецепт</Button> 
        </> 
    );
}

export default Recipes;