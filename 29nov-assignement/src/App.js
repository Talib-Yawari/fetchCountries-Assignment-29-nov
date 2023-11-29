import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountryCard from './CountryCard';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Countries</h1>
      <Row>
        {countries.map((country) => (
          <Col key={country.cca2} className="mb-4">
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
