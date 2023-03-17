import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main"
import axios from 'axios';
import Categories from "./Categories";


function App () {
    const [response, setResponse] = React.useState([]);
    let [requested, dishReq] = React.useState(false);
    

    const LINK = `http://127.0.0.1:8000/dishes/`;

    var dishes = [];
    

    function ReqDishes(){
        axios.get(LINK).then(res => {
            setResponse(res.data.results);
        });
    };


    for(let i = 0; i < response.length; i+=1) {
        dishes.push(response[i]);
    };
    console.log(dishes);

    if(requested === false){
        ReqDishes();
        dishReq(true);
    };

    return (
        <>
            <Header />
            <Main dishes={dishes}/>
        </>
    );
}

export default App;