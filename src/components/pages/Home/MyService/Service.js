import React from "react";
import useServices from "../../../../hook/useServices";
import ServiceDetails from "../MyService/ServiceDetails";

const Service = () => {
  const [services] = useServices();
  return (
    <div className="bg-bg-white">
      <div className="container my-lg-5">
        <div className="service-title text-center mb-5">
          <h1 className="blue-color fs-1 fw-bold">Service</h1>
          <p className="fs-3   text-black-50">
            The Major PHOTOGRAPHY Services That We Are Offering For You
          </p>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceDetails key={service.id} service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
