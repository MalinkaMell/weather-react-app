import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from './Header';

const Body = props => {
  return (
    <Container className="content">
      <Row className="justify-content-center">
        <Col md={8} className="text-center mt-3">
          <Card>
            <Header title="Weather App" />
            {props.children}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Body;