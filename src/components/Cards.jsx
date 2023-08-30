import React, { useEffect, useState } from "react";
import Card from "./Card";
import './Cards.css'

const Cards = () => {
  const [data, setData] = useState([]);
  console.log(data, "data");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="shopping-list">
      {data.map((item) => {
        return (
          <div>
            <Card
              imageUrl={item.imageURL}
              name={item.name}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
