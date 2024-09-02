import React, { useState } from 'react';
import './Profile.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function ConsumerProfile() {

  const [edit, setEdit] = useState(false);

  return (
    <div className="consumer-profile-wrapper">
      {
        edit === false ? (
          <>
            <div className="consumer-profile-titlebar">
              <h2 className="consumer-profile-title">
                Account Details
              </h2>
              <button className="consumer-profile-edit-button" onClick={() => setEdit(true)}>
                <MdEdit className="consumer-profile-edit-icon" /> Edit
              </button>
            </div>
            <div className="consumer-profile-info">
              <img src="" alt="" className="consumer-profile-info-img" />
              <div className="consumer-profile-info-item consumer-profile-info-item--name">
                <label className="consumer-profile-info-item-label">Name</label>
                <input className="consumer-profile-info-item-input" type="text" placeholder="John Doe" readOnly="true" />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--email">
                <label className="consumer-profile-info-item-label">Email</label>
                <input className="consumer-profile-info-item-input" type="text" placeholder="john.doe@gmail.com" readOnly="true" />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--phone">
                <label className="consumer-profile-info-item-label">Phone</label>
                <input className="consumer-profile-info-item-input" type="text" placeholder="123-456-7890" readOnly="true" />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--address">
                <label className="consumer-profile-info-item-label">Address</label>
                <textarea className="consumer-profile-info-item-input" type="text" placeholder="Address.." readOnly="true" />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--bio">
                <label className="consumer-profile-info-item-label">Bio</label>
                <textarea className="consumer-profile-info-item-input consumer-profile-info-item-input--bio" placeholder="Bio..." readOnly="true" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="consumer-edit-profile-topbar">
              <IoMdArrowRoundBack className="consumer-profile-back-icon" onClick={() => setEdit(false)}> </IoMdArrowRoundBack>
              <button className="consumer-profile-save-button">
                Save Changes
              </button>
            </div>
            <div className="consumer-profile-info">
              <img src="" alt="" className="consumer-profile-info-img" />
              <div className="consumer-profile-info-item consumer-profile-info-item--name">
                <label className="consumer-profile-info-item-label">Name</label>
                <input className="consumer-profile-info-item-input" type="text" placeholder="John Doe" />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--email">
                <label className="consumer-profile-info-item-label">Email</label>
                <input className="consumer-profile-info-item-input" type="text" placeholder="john.doe@gmail.com" />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--phone">
                <label className="consumer-profile-info-item-label">Phone</label>
                <input className="consumer-profile-info-item-input" type="text" placeholder="123-456-7890" />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--address">
                <label className="consumer-profile-info-item-label">Address</label>
                <textarea className="consumer-profile-info-item-input" type="text" placeholder="Address.." />
              </div>
              <div className="consumer-profile-info-item consumer-profile-info-item--bio">
                <label className="consumer-profile-info-item-label">Bio</label>
                <textarea className="consumer-profile-info-item-input consumer-profile-info-item-input--bio" placeholder="Bio..." />
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default ConsumerProfile