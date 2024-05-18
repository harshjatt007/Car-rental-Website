import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/Raju.jpg";
import ava02 from "../../assets/all-images/Farhan.jpg";
import ava03 from "../../assets/all-images/Rancho.jpeg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Exceptional service! From start to finish, our rental experience was seamless. The car was clean, comfortable, and exceeded our expectations.Amazing selection of cars and excellent customer service. Will definitely be using their services again in the future."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Raju Rastogi</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Professional and reliable. The whole process, from booking to drop-off, was effortless. Highly recommend! Impressed with the ease of booking and the quality of vehicles available. Made our trip even more enjoyable."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Farhan Qureshi</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Outstanding experience! The staff was friendly and accommodating, and the car was in perfect condition. Thank you for making our journey memorable!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ranchoddas Chanchad</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      {/* <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p> */}

        {/* <div className="mt-3 d-flex align-items-center gap-4">
          <img src={} alt="" className="w-25 h-25 rounded-2" /> */}

          {/* <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </Slider>
  );
};

export default Testimonial;
