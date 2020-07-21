import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, Alert
} from 'reactstrap';
import moment from 'moment'

const Details = (props) => {
  if (props.weatherData.error) {
    return (
      <Alert color="danger" className="display-4">{props.weatherData.error.message}</Alert>
    )
  }
  else {
    let dayAndTime = moment(props.weatherData.location.localtime).format('dddd hh:mm A')
    let last_updated = moment(props.weatherData.current.last_updated).format('dddd hh:mm A')
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="display-4">{props.weatherData.location.name}</CardTitle>
            <CardSubtitle className="lead"><b>{props.weatherData.location.region}, {props.weatherData.location.country}</b></CardSubtitle>
            <br />
            <CardSubtitle className="lead">{dayAndTime}</CardSubtitle>
            <hr />
            <CardSubtitle className="lead"><b>{props.weatherData.current.condition.text}</b></CardSubtitle>
          </CardBody>
          <CardBody>
            <Container>
              <Row>
                <Col sm md="2">
                  <img width="100" src={props.weatherData.current.condition.icon} alt="condition" />
                </Col>
                <Col sm md="10">
                  <span className="display-4"> {props.weatherData.current.temp_c} &#176;C</span>
                </Col>
              </Row>
              <Row>
                <Col md>
                  <span className="lead">(Last updated on: {last_updated})</span>
                </Col>
              </Row>
              <Row>
                <Col md>
                  <span className="lead">Feels like: {props.weatherData.current.feelslike_c} &#176;C</span>
                </Col>
              </Row>
              <Row>
                <Col md>
                  <span className="lead">Wind: {props.weatherData.current.wind_kph} km/h</span>
                </Col>
              </Row>
              <Row>
                <Col md>
                  <span className="lead">Humidity: {props.weatherData.current.humidity} %</span>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    );
  }
};

export default Details;