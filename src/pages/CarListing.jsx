import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortOption, setSortOption] = useState("default");
  const [sortedCars, setSortedCars] = useState(carData);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    let sortedData = [...carData];

    if (option === "low") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (option === "high") {
      sortedData.sort((a, b) => b.price - a.price);
    }

    setSortedCars(sortedData);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select value={sortOption} onChange={handleSortChange}>
                  <option value="default">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {/* Render sorted car data */}
            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
