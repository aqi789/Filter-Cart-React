import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

const PhoneCard = ({ phone }) => {
  return (
    <Container>
    <Card>
      <Card.Img variant="top" src={phone.img} alt={phone.iphone_version} />
      <Card.Body>
        <Card.Title>{phone.iphone_version}</Card.Title>
        <Card.Text>{phone.color}</Card.Text>
        <Button className="danger">Read More</Button>{' '}
      </Card.Body>
    </Card>
    </Container>
  );
};

export default PhoneCard;

