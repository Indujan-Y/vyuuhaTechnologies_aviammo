import React, { useState } from 'react';
import './Products.css';
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

function PoultryProducts() {

  const [newProduct, setnewProduct] = useState(false);

  return (
    <div className="poultry-products-wrapper">
      {newProduct === false ? (
        <>
          <div className="poultry-products-topbar">
            <input type="text" placeholder='Search Product' className="poultry-products-search" />
            <img src="" alt="" className="poultry-products-topbar-new-products" />
          </div>
          <div className="poultry-products-title-bar">
            <h2 className="consumer-products-title">
              My Products
            </h2>
            <button className="poultry-products-newpost-button" onClick={() => setnewProduct(true)}>
              Add Product <IoMdAdd className="poultry-products-newpost-icon" />
            </button>
          </div>
          <div className="poultry-products-cards">
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
            <div className="poultry-products-card">
              <p className="poultry-products-card-company">
                Product 1
              </p>
              <img src="" alt="" className="poultry-products-card-img" />
              <p className="poultry-products-card-title">
                Manure for Plants (5KG)
              </p>
              <div className="poultry-products-card-row">
                <p className="poultry-products-card-price">
                  <FaRupeeSign /> 359
                </p>
                <p className="poultry-products-card-rating">
                  4.5 <FaStar />
                </p>
              </div>
              <button className="poultry-products-card-button">
                Edit Product
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="poultry-edit-profile-topbar">
            <IoMdArrowRoundBack className="poultry-profile-back-icon" onClick={() => setnewProduct(false)}> </IoMdArrowRoundBack>
            <button className="poultry-profile-save-button">
              Add Product
            </button>
          </div>
          <div className="poultry-products-newProduct">
            <div className="poultry-profile-info-item poultry-new-products-info-item-company-name">
              <label className="poultry-new-products-info-item-label">Company Name</label>
              <input className="poultry-new-products-info-item-input" type="text" placeholder="Company Name" />
            </div>
            <div className="poultry-profile-info-item poultry-new-products-info-item-product-name">
              <label className="poultry-new-products-info-item-label">Product Name</label>
              <input className="poultry-new-products-info-item-input" type="text" placeholder="Product Name" />
            </div>
            <div className="poultry-profile-info-item poultry-new-products-info-item-product-description">
              <label className="poultry-new-products-info-item-label">Description</label>
              <textarea className="poultry-new-products-info-item-input" type="text" placeholder="Description" />
            </div>
            <div className="poultry-profile-info-item poultry-new-products-info-item-product-price">
              <label className="poultry-new-products-info-item-label">Set Price(In Rs.)</label>
              <input className="poultry-new-products-info-item-input" type="number" placeholder="00" />
            </div>
            <div className="poultry-new-products-info-item-product-images">
              <label className="poultry-new-products-info-img-label">Product Images</label>
              <img src="" alt="" className="poultry-new-product-img" />
              <img src="" alt="" className="poultry-new-product-img" />
              <img src="" alt="" className="poultry-new-product-img" />
              <img src="" alt="" className="poultry-new-product-img" />
              <img src="" alt="" className="poultry-new-product-img" />
            </div>
            <div className="poultry-profile-info-item poultry-new-products-info-item-product-location">
              <label className="poultry-new-products-info-item-label">Location</label>
              <input className="poultry-new-products-info-item-input" type="number" placeholder="Coimbatore, Tamil Nadu" />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PoultryProducts