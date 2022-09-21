import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


export default function JumbotronComponent(props) {
  return (
    <div><Jumbotron>
      <h1>Hello, world</h1>
      <p>{props.children}</p>
    </Jumbotron></div>
  )
}
