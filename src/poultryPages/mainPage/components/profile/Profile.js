import React, { useState } from 'react';
import './Profile.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function PoultryProfile() {

  const [edit, setEdit] = useState(false);

  return (
    <div className="poultry-profile-wrapper">
      {
        edit === false ? (
          <>
            <div className="poultry-profile-titlebar">
              <h2 className="poultry-profile-title">
                Account Details
              </h2>
              <button className="poultry-profile-edit-button" onClick={() => setEdit(true)}>
                <MdEdit className="poultry-profile-edit-icon" /> Edit
              </button>
            </div>
            <div className="poultry-profile-info">
              <img src="" alt="" className="poultry-profile-info-img" />
              <div className="poultry-profile-info-item poultry-profile-info-item--name">
                <label className="poultry-profile-info-item-label">Name</label>
                <input className="poultry-profile-info-item-input" type="text" placeholder="John Doe" readOnly="true" />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--email">
                <label className="poultry-profile-info-item-label">Email</label>
                <input className="poultry-profile-info-item-input" type="text" placeholder="john.doe@gmail.com" readOnly="true" />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--phone">
                <label className="poultry-profile-info-item-label">Phone</label>
                <input className="poultry-profile-info-item-input" type="text" placeholder="123-456-7890" readOnly="true" />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--address">
                <label className="poultry-profile-info-item-label">Address</label>
                <textarea className="poultry-profile-info-item-input" type="text" placeholder="Address.." readOnly="true" />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--bio">
                <label className="poultry-profile-info-item-label">Bio</label>
                <textarea className="poultry-profile-info-item-input poultry-profile-info-item-input--bio" placeholder="Bio..." readOnly="true" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="poultry-edit-profile-topbar">
              <IoMdArrowRoundBack className="poultry-profile-back-icon" onClick={() => setEdit(false)}> </IoMdArrowRoundBack>
              <button className="poultry-profile-save-button">
                Save Changes
              </button>
            </div>
            <div className="poultry-profile-info">
              <img src="" alt="" className="poultry-profile-info-img" />
              <div className="poultry-profile-info-item poultry-profile-info-item--name">
                <label className="poultry-profile-info-item-label">Name</label>
                <input className="poultry-profile-info-item-input" type="text" placeholder="John Doe" />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--email">
                <label className="poultry-profile-info-item-label">Email</label>
                <input className="poultry-profile-info-item-input" type="text" placeholder="john.doe@gmail.com" />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--phone">
                <label className="poultry-profile-info-item-label">Phone</label>
                <input className="poultry-profile-info-item-input" type="text" placeholder="123-456-7890" />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--address">
                <label className="poultry-profile-info-item-label">Address</label>
                <textarea className="poultry-profile-info-item-input" type="text" placeholder="Address.." />
              </div>
              <div className="poultry-profile-info-item poultry-profile-info-item--bio">
                <label className="poultry-profile-info-item-label">Bio</label>
                <textarea className="poultry-profile-info-item-input poultry-profile-info-item-input--bio" placeholder="Bio..." />
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default PoultryProfile