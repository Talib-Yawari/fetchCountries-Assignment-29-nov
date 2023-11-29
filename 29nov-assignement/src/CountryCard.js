import React from 'react';
import { Card } from 'react-bootstrap';

const CountryCard = ({ country }) => {
  const { common, cca2, population, region } = country;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`https://flagsapi.com/${cca2}/flat/64.png`}
        alt={`${common} Flag`}
      />
      <Card.Body>
        <Card.Title>{common}</Card.Title>
        <Card.Text>Population: {population}</Card.Text>
        <Card.Text>Region: {region}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
