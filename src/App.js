
import './App.css';
import Products from './Products';
import {Button, Jumbotron} from 'react-bootstrap';
import Rating from './Rating';
import Product from './Product';
import React from "react";
import JumbotronComponent from './JumbotronComponent';


function formatName(user){
  return user.firstName +" "+ user.lastName
}
function App() {
  
  const user ={
    firstName: 'Collins',
    lastName: 'Adhola',
    imageUrl: 'https://picsum.photos/200/300'

  }
   const isValid = true;

  return (
    <div>
      <h1>
        Learn React Hooks
        <br />
        <img src={user.imageUrl} alt=""></img>
      </h1>
      {/* <h3>Hello, {formatName(user)}</h3> */}
      <br />

      {/* <Button variant="danger" disabled={!isValid}>
        Default
      </Button>
      <h5>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </h5> */}
      <JumbotronComponent>
        This is a long sentence, and I want to insert content into the jumbotron
        component from the outside.
      </JumbotronComponent>
      <Products />
    </div>
  );
}

export default App;
