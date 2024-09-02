import React, { useState } from 'react';
import './Products.css';
import { IoMdAdd } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

function FuelProducersProducts() {

  const [newProduct, setnewProduct] = useState(false);

  return (
    <div className="fuel-producers-products-wrapper">
      {newProduct === false ? (
        <>
          <div className="fuel-producers-products-topbar">
            <input type="text" placeholder='Search Product' className="fuel-producers-products-search" />
            <img src="" alt="" className="fuel-producers-products-topbar-new-products" />
          </div>
          <div className="fuel-producers-products-title-bar">
            <h2 className="consumer-products-title">
              My Products
            </h2>
            <button className="fuel-producers-products-newpost-button" onClick={() => setnewProduct(true)}>
              Add Product <IoMdAdd className="fuel-producers-products-newpost-icon" />
            </button>
          </div>
          <div className="fuel-producers-products-cards">
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="fuel-producers-products-card">
              <p className="fuel-producers-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="fuel-producers-products-card-img" />
              <p className="fuel-producers-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="fuel-producers-products-card-row">
                <p className="fuel-producers-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="fuel-producers-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="fuel-producers-products-card-button">
                Edit Product
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="fuel-producers-edit-profile-topbar">
            <IoMdArrowRoundBack className="fuel-producers-profile-back-icon" onClick={() => setnewProduct(false)}> </IoMdArrowRoundBack>
            <button className="fuel-producers-profile-save-button">
              Add Product
            </button>
          </div>
          <div className="fuel-producers-products-newProduct">
            <div className="fuel-producers-profile-info-item fuel-producers-new-products-info-item-company-name">
              <label className="fuel-producers-new-products-info-item-label">Company Name</label>
              <input className="fuel-producers-new-products-info-item-input" type="text" placeholder="Company Name" />
            </div>
            <div className="fuel-producers-profile-info-item fuel-producers-new-products-info-item-product-name">
              <label className="fuel-producers-new-products-info-item-label">Product Name</label>
              <input className="fuel-producers-new-products-info-item-input" type="text" placeholder="Product Name" />
            </div>
            <div className="fuel-producers-profile-info-item fuel-producers-new-products-info-item-product-description">
              <label className="fuel-producers-new-products-info-item-label">Description</label>
              <textarea className="fuel-producers-new-products-info-item-input" type="text" placeholder="Description" />
            </div>
            <div className="fuel-producers-profile-info-item fuel-producers-new-products-info-item-product-price">
              <label className="fuel-producers-new-products-info-item-label">Set Price(In Rs.)</label>
              <input className="fuel-producers-new-products-info-item-input" type="number" placeholder="00" />
            </div>
            <div className="fuel-producers-new-products-info-item-product-images">
              <label className="fuel-producers-new-products-info-img-label">Product Images</label>
              <img src="" alt="" className="fuel-producers-new-product-img" />
              <img src="" alt="" className="fuel-producers-new-product-img" />
              <img src="" alt="" className="fuel-producers-new-product-img" />
              <img src="" alt="" className="fuel-producers-new-product-img" />
              <img src="" alt="" className="fuel-producers-new-product-img" />
            </div>
            <div className="fuel-producers-profile-info-item fuel-producers-new-products-info-item-product-location">
              <label className="fuel-producers-new-products-info-item-label">Location</label>
              <input className="fuel-producers-new-products-info-item-input" type="number" placeholder="Coimbatore, Tamil Nadu" />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default FuelProducersProducts