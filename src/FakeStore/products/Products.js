import React from "react";
import { useEffect, useState } from "react";
import "./ProductsSass.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import { useMemo } from "react";
import { memo } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [electronicsItems, setelectronicsItems] = useState([]);
  const [jeweleryItems, setjeweleryItems] = useState([]);
  const [mencloths, setmencloths] = useState([]);
  const [womencloths, setwomencloths] = useState([]);

  useEffect(() => {
    return async () => {
      const { data } = await axios("https://fakestoreapi.com/products");
      setProducts(data);
      setelectronicsItems(
        data.filter((item) => item.category === "electronics")
      );
      setjeweleryItems(data.filter((item) => item.category === "jewelery"));
      setmencloths(data.filter((item) => item.category === "men's clothing"));
      setwomencloths(
        data.filter((item) => item.category === "women's clothing")
      );
    };
  }, []);
  const electronicsHandler = () => {
    setProducts(electronicsItems);
  };
  const jeweleryHandler = () => {
    setProducts(jeweleryItems);
  };
  const menclothsHandler = () => {
    setProducts(mencloths);
  };
  const womenclothsHandler = () => {
    setProducts(womencloths);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2 ">
          <div className="col-sm-3">
            <button onClick={electronicsHandler}>
              <Button value="electronics" />
            </button>
          </div>
          <div className="col-sm-3">
            <button onClick={jeweleryHandler}>
              <Button value="jewelery" />
            </button>
          </div>
          <div className="col-sm-3">
            <button onClick={menclothsHandler}>
              <Button value="men's clothes" />
            </button>
          </div>
          <div className="col-sm-3">
            <button onClick={womenclothsHandler}>
              <Button value="women's clothes" />
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row text-center mt-2">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mt-5">
              <div className="product">
                <span className="product__price">${product.price}</span>
                <img className="product__image" src={product.image} />
                <h3 className="product__title">{product.title}</h3>
                <hr />
                <p style={{ color: "black" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti, dicta? Dolores suscipit id nam quae quia. Pariatur
                  veniam fugit aliquid.
                </p>
                <a
                  href="/"
                  className="product__btn btnp btn "
                  data-toggle="modal"
                  data-target="#exampleModal"
                  id={product.id}
                >
                  View More Details
                </a>
                {/* popup window code here */}
                {/*TODO */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Product Details
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body" key={product.id}>
                        <p>{product.title}</p>
                        <img src={product.image} />
                        <p>{product.description}</p>
                        <p>price of thr product is {product.price} </p>
                        <p>category {product.category}</p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Products);
