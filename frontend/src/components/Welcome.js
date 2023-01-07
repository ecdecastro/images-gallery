import React from 'react';
import { Row, Button, Col, Container } from 'react-bootstrap';

const jumbotronStyle = {
  backgroundColor: '#eeeeee',
  padding: '4rem 2rem',
  marginBottom: '2rem',
  borderRadius: '.3rem',
};

const Welcome = () => {
  return (
    <Container style={jumbotronStyle}>
      <Row>
        <h1>Hello, world!</h1>
      </Row>
      <Row>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" href="" target="_blank">
            Learn More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
