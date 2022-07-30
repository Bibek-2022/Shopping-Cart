import React, { useEffect, useState } from "react";
import { getProduct } from "../../helpers/axioshelper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Product = () => {
  const [getProd, setProd] = useState({});
  useEffect(() => {
    getProduct()
      .then((res) => {
        console.log(res);
        const { status, message, result } = res;
        setProd(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(getProd);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{getProd[0].name}</Card.Title>
          <Card.Text>{getProd[0].cost}</Card.Text>
          <Button variant="primary">More Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
