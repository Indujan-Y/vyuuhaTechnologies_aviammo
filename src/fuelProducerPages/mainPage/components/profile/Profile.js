import React, { useState } from 'react';
import './Profile.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function FuelProducersProfile() {

  const [edit, setEdit] = useState(false);

  return (
    <div className="fuelproducers-profile-wrapper">
      {
        edit === false ? (
          <>
            <div className="fuelproducers-profile-titlebar">
              <h2 className="fuelproducers-profile-title">
                Account Details
              </h2>
              <button className="fuelproducers-profile-edit-button" onClick={() => setEdit(true)}>
                <MdEdit className="fuelproducers-profile-edit-icon" /> Edit
              </button>
            </div>
            <div className="fuelproducers-profile-info">
              <img src="" alt="" className="fuelproducers-profile-info-img" />
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--name">
                <label className="fuelproducers-profile-info-item-label">Name</label>
                <input className="fuelproducers-profile-info-item-input" type="text" placeholder="John Doe" readOnly="true" />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--email">
                <label className="fuelproducers-profile-info-item-label">Email</label>
                <input className="fuelproducers-profile-info-item-input" type="text" placeholder="john.doe@gmail.com" readOnly="true" />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--phone">
                <label className="fuelproducers-profile-info-item-label">Phone</label>
                <input className="fuelproducers-profile-info-item-input" type="text" placeholder="123-456-7890" readOnly="true" />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--address">
                <label className="fuelproducers-profile-info-item-label">Address</label>
                <textarea className="fuelproducers-profile-info-item-input" type="text" placeholder="Address.." readOnly="true" />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--bio">
                <label className="fuelproducers-profile-info-item-label">Bio</label>
                <textarea className="fuelproducers-profile-info-item-input fuelproducers-profile-info-item-input--bio" placeholder="Bio..." readOnly="true" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="fuelproducers-edit-profile-topbar">
              <IoMdArrowRoundBack className="fuelproducers-profile-back-icon" onClick={() => setEdit(false)}> </IoMdArrowRoundBack>
              <button className="fuelproducers-profile-save-button">
                Save Changes
              </button>
            </div>
            <div className="fuelproducers-profile-info">
              <img src="" alt="" className="fuelproducers-profile-info-img" />
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--name">
                <label className="fuelproducers-profile-info-item-label">Name</label>
                <input className="fuelproducers-profile-info-item-input" type="text" placeholder="John Doe" />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--email">
                <label className="fuelproducers-profile-info-item-label">Email</label>
                <input className="fuelproducers-profile-info-item-input" type="text" placeholder="john.doe@gmail.com" />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--phone">
                <label className="fuelproducers-profile-info-item-label">Phone</label>
                <input className="fuelproducers-profile-info-item-input" type="text" placeholder="123-456-7890" />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--address">
                <label className="fuelproducers-profile-info-item-label">Address</label>
                <textarea className="fuelproducers-profile-info-item-input" type="text" placeholder="Address.." />
              </div>
              <div className="fuelproducers-profile-info-item fuelproducers-profile-info-item--bio">
                <label className="fuelproducers-profile-info-item-label">Bio</label>
                <textarea className="fuelproducers-profile-info-item-input fuelproducers-profile-info-item-input--bio" placeholder="Bio..." />
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default FuelProducersProfile