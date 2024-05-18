import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to our car rent service</h2>
              <p className="section__description">
             Welcome to <mark>RentKaro</mark>, where safety meets convenience.
             With a focus on reliability and customer satisfaction, we provide top-notch car rental services.
             Our meticulously maintained fleet and professional drivers ensure a safe and comfortable journey for every customer.
             Travel with confidence with us.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-start gap-2">
                  <i class="ri-checkbox-circle-line"></i> Advanced search filters enhance user experience by refining property searches.
                </p>
                
                <p className="section__description d-flex align-items-start gap-2">
                  <i class="ri-checkbox-circle-line"></i> Interactive maps integration provides visual representation of available properties.
                  
                </p>
              </div>

              <div className="about__section-item d-flex align-items-start">
                <p className="section__description d-flex align-items-c gap-2">
                  <i class="ri-checkbox-circle-line"></i> User reviews and ratings build trust and credibility among users.
                  
                </p>

                <p className="section__description d-flex align-items-start gap-2">
                  <i class="ri-checkbox-circle-line"></i>Secure online booking and payment system streamlines booking process.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
