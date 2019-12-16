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
      <Card className='m-1'>
        <CardHeader tag='h6' className='text-center'>{props.name}</CardHeader>
        <CardBody>
          <CardText>Status: {props.status}</CardText>
          <CardImg src={props.image} />
        </CardBody>
      </Card>
    </Col>
  );
}