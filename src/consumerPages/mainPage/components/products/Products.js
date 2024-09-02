import React, { useState } from 'react';
import './Products.css';
import { FiShoppingCart } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";

function ConsumerProducts() {

  const [cart, setCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="consumer-products-wrapper">
      {cart === false ? (
        <>
          <div className="consumer-products-topbar">
            <input type="text" placeholder='Search Product' className="consumer-products-search" />
            <img src="" alt="" className="consumer-products-topbar-profile" />
          </div>
          <div className="consumer-products-title-bar">
            <h1 className="comsumer-products-title">
              Products
            </h1>
            <FiShoppingCart className="consumer-products-cart-icon" onClick={() => setCart(true)}></FiShoppingCart>
          </div>
          <div className="consumer-products-cards">
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
            <div className="consumer-products-card">
              <p className="consumer-products-card-company">
                Company 1
              </p>
              <img src="" alt="" className="consumer-products-card-img" />
              <p className="consumer-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="consumer-products-card-row">
                <p className="consumer-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="consumer-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="consumer-products-card-button">
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="consumer-products-topbar">
            <IoMdArrowRoundBack className="consumer-products-cart-icon" onClick={() => setCart(false)}> </IoMdArrowRoundBack>
            <img src="" alt="" className="consumer-products-topbar-profile" />
          </div>
          <div className="consumer-products-cart">
            <div className="consumer-products-cart-products">
              <h2 className="consumer-products-cart-title">
                Your Cart
              </h2>
              <div className="consumer-cart-products">
                <div className="consumer-cart-product">
                  <p className="consumer-cart-product-company">
                    Company 1
                  </p>
                  <div className="consumer-cart-product-row">
                    <img src="" alt="" className="consumer-cart-product-img" />
                    <div className="consumer-cart-product-details">
                      <p className="consumer-cart-product-title">
                        Product 1
                      </p>
                      <p className="consumer-cart-product-price">
                        <FaRupeeSign /> 359
                      </p>
                      <p className="consumer-cart-product-rating">
                        4.5 <FaStar />
                      </p>
                      <p className="consumer-cart-product-quantity">
                        Quantity: <GrSubtractCircle onClick={() => setQuantity(quantity - 1)} /> {quantity} <MdOutlineAddCircleOutline onClick={() => setQuantity(quantity + 1)} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="consumer-cart-product">
                  <p className="consumer-cart-product-company">
                    Company 1
                  </p>
                  <div className="consumer-cart-product-row">
                    <img src="" alt="" className="consumer-cart-product-img" />
                    <div className="consumer-cart-product-details">
                      <p className="consumer-cart-product-title">
                        Product 1
                      </p>
                      <p className="consumer-cart-product-price">
                        <FaRupeeSign /> 359
                      </p>
                      <p className="consumer-cart-product-rating">
                        4.5 <FaStar />
                      </p>
                      <p className="consumer-cart-product-quantity">
                        Quantity: <GrSubtractCircle onClick={() => setQuantity(quantity - 1)} /> {quantity} <MdOutlineAddCircleOutline onClick={() => setQuantity(quantity + 1)} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="consumer-cart-product">
                  <p className="consumer-cart-product-company">
                    Company 1
                  </p>
                  <div className="consumer-cart-product-row">
                    <img src="" alt="" className="consumer-cart-product-img" />
                    <div className="consumer-cart-product-details">
                      <p className="consumer-cart-product-title">
                        Product 1
                      </p>
                      <p className="consumer-cart-product-price">
                        <FaRupeeSign /> 359
                      </p>
                      <p className="consumer-cart-product-rating">
                        4.5 <FaStar />
                      </p>
                      <p className="consumer-cart-product-quantity">
                        Quantity: <GrSubtractCircle onClick={() => setQuantity(quantity - 1)} /> {quantity} <MdOutlineAddCircleOutline onClick={() => setQuantity(quantity + 1)} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="consumer-cart-summary">
              <h2 className="consumer-cart-summary-title">
                Summary
              </h2>
              <div className="consumer-cart-summary-bill">
                <div className="consumer-cart-summary-bill-row">
                  <p className="consumer-cart-summary-key">
                    Subtotal
                  </p>
                  <p className="consumer-cart-summary-key">
                    <FaRupeeSign /> 359
                  </p>
                </div>
                <div className="consumer-cart-summary-bill-row">
                  <p className="consumer-cart-summary-key">
                    Delivery Charges
                  </p>
                  <p className="consumer-cart-summary-key">
                    Free
                  </p>
                </div>
                <div className="consumer-cart-summary-bill-row">
                  <p className="consumer-cart-summary-key">
                    Taxes
                  </p>
                  <p className="consumer-cart-summary-key">
                    <FaRupeeSign /> 359
                  </p>
                </div>
                <hr />
                <div className="consumer-cart-summary-bill-row">
                  <p className="consumer-cart-summary-key">
                    Taxes
                  </p>
                  <p className="consumer-cart-summary-key">
                    <FaRupeeSign /> 359
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ConsumerProducts