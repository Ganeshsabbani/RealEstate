import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PriceList from "./PriceList";
import PropertyList from "./PropertyList";
import Button from "react-bootstrap/Button";
import LocationList from "./LocationList";

const Filter = ({ products, setFilter }) => {
  const [date, setDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");

  const applyFilters = () => {
    const updatedproducts = products.filter(
      (product) =>
        product.state === selectedLocation &&
        product.type === selectedProperty &&
        {}
    );
    const finalProducts = updatedproducts.filter((product) => {
      let result = product.price.slice(1);
      let filteredPrice = Number(result.split(",").join(""));

      if (
        selectedPrice === "$500-$2500" &&
        filteredPrice >= 500 &&
        filteredPrice <= 2500
      ) {
        return product;
      } else if (
        selectedPrice === "$2500-$4000" &&
        filteredPrice > 2500 &&
        filteredPrice <= 4000
      ) {
        return product;
      } else if (
        selectedPrice === "$4000-$8000" &&
        filteredPrice > 4000 &&
        filteredPrice < 10000
      ) {
        return product;
      }
    });

    setFilter(finalProducts);
  };

  return (
    <div className="filter">
      <div>
        <div>
          <h5>Location</h5>
          <LocationList
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
      </div>
      <div>
        <div>
          <h5>When</h5>
          <div style={{ display: "flex" }}>
            <DatePicker
              placeholderText="Select Move-in Date"
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="dd/MM/yyyy"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar"
              viewBox="0 0 16 16"
              style={{color:"#7065ef"}}
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h5>Price</h5>
        <PriceList
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </div>
      <div>
        <h5>Property Type</h5>
        <PropertyList
          selected={selectedProperty}
          setSelected={setSelectedProperty}
        />
      </div>
      <div>
        <Button
          variant="success"
          onClick={() => {
            applyFilters();
          }}
        >
          Search
        </Button>{" "}
      </div>
    </div>
  );
};

export default Filter;
