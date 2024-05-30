import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import CarItem from '../components/UI/CarItem'; // Importing CarItem component

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Sample car data for demonstration
  const carData = [
    { id: 1, name: 'Swift' },
    { id: 2, name: 'Bolero' },
    { id: 3, name: 'Grand i10' },
    { id: 4, name: 'Baleno' },
    { id: 5, name: 'Santro' },
    { id: 6, name: 'XUV500' },
    { id: 7, name: 'Dzire' },
    { id: 8, name: 'Creta' },
  ];

  // Filtering cars based on the search query
  const results = carData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <Container>
      <Row>
        <Col>
          <h2>Search Results for "{query}"</h2>
          {results.length > 0 ? (
            <Row>
              {results.map(result => (
                <Col md="4" key={result.id}>
                  {/* Rendering CarItem component for each result */}
                  <CarItem item={result} />
                </Col>
              ))}
            </Row>
          ) : (
            <p>No results found</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
