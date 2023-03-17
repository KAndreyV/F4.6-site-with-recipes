import React from "react";
import '../styles/Header.css'
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <>
            <div className="head"> 
                <Button className="btn-primary" >Главная</Button>
                <Button className="btn-primary" href="http://localhost:8080/categories/">Категории</Button>
            </div>
        </>
    );
}

export default Header;