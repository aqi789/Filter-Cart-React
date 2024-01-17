import React from 'react';
import { Button, Container } from 'react-bootstrap';

const PhoneButton = ({ version, onClick }) => {
  return (
    <Container className='box'>
    <Button variant="primary" onClick={() => onClick(version)} className='button'>
      {version}
    </Button>
    </Container>
  );
};


export default PhoneButton;