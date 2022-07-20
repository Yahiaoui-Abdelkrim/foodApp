import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className="container">
      <div className="my-5">
        <h1 className="p-2 text-center">Lorem ipsum dolor sit amet.</h1>
        <h3 className="text-secondary p-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, itaque.
        </h3>
      </div>
      <div className="row d-md-flex justify-content-center g-3">
        <div className="col-12 col-md-6 col-lg-3">
          <PizzaCard />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <PizzaCard />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <PizzaCard />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <PizzaCard />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <PizzaCard />
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
