import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const {
    price,
    serviceName,
    serviceTitle,
    serviceItem01,
    serviceItem02,
    serviceItem03,
    picture,
  } = service;
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
      <div className="card-border p-3 bg-white rounded">
        <Card className="p-4 bg-white shadow-lg border-0 rounded">
          <div className="position-relative">
            <Card.Img className="" variant="top" src={picture} />
            <Card.Title className="position-absolute ms-3 mt-5 top-50 fs-3 fw-bold text-white p-2 bg-blue-color">{serviceName}</Card.Title>
          </div>
          <Card.Body className="text-center">
            <Card.Title className="fs-4 fw-bold blue-color">{serviceTitle}</Card.Title>
            <div className="line-div mx-auto w-50 mt-3"></div>
            <Card.Text className=" mt-3 fs-4 fw-bold orange-color">
                Price: <span className=""> {price}</span>
            </Card.Text>
            <div className="line-div mx-auto w-50 mt-3"></div>
            <Card.Text className=" mt-3 fs-5 blue-color">
                {serviceItem01}
            </Card.Text>
            <div className="line-div mx-auto w-50 mt-3"></div>
            <Card.Text className=" mt-3 fs-5  blue-color">
                {serviceItem02}
            </Card.Text>
            <div className="line-div mx-auto w-50 mt-3"></div>
            <Card.Text className=" mt-3 fs-5 blue-color">
                {serviceItem03}
            </Card.Text>
            <div>
                <Link className="d-block w-100 fs-5 fw-bold bg-orange py-2 text-decoration-none text-white" to='/bookNow'>BOOK NOW</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetails;
