import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Col,
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Col xs="6" md="4" lg="3">
      <Card style={{background: 'black'}} body outline color='warning' className='m-1'>
        <CardHeader style={{color: 'white'}}className='text-center'>{props.name}</CardHeader>
        <CardBody>
          <CardText style={{fontSize: 15, color: 'white'}}>Status: {props.status}</CardText>
          <CardText style={{fontSize: 10, color: 'white'}}>Origin: {props.origin.name}</CardText>
          <CardImg src={props.image} />
        </CardBody>
      </Card>
    </Col>
  );
}