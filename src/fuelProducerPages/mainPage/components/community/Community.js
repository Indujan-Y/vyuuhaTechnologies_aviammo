import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import './Community.css';

function FuelProducersCommunity() {

  const [newPost, setNewPost] = useState(false);

  return (
    <div className="fuelproducers-community-wrapper">
      {
        newPost === false ? (
          <>
            <div className="fuelproducers-community-topbar">
              <img src="" alt="" className="fuelproducers-community-topbar-profile" />
            </div>
            <div className="fuelproducers-community-content">
              <div className="fuelproducers-community-left-content">
                <div className="fuelproducers-community-titlebar">
                  <h2 className="fuelproducers-community-title">
                    Community
                  </h2>
                  <button className="fuelproducers-community-newpost-button" onClick={() => setNewPost(true)}>
                    Post <IoMdAdd className="fuelproducers-community-newpost-icon" />
                  </button>
                </div>
                <div className="fuelproducers-community-posts">
                  <div className="fuelproducers-community-post">
                    <div className="fuelproducers-community-post-owner-info">
                      <img src="" alt="" className="fuelproducers-community-post-owner-profile" />
                      <p className="fuelproducers-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="fuelproducers-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="fuelproducers-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="fuelproducers-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="fuelproducers-community-post">
                    <div className="fuelproducers-community-post-owner-info">
                      <img src="" alt="" className="fuelproducers-community-post-owner-profile" />
                      <p className="fuelproducers-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="fuelproducers-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="fuelproducers-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="fuelproducers-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="fuelproducers-community-post">
                    <div className="fuelproducers-community-post-owner-info">
                      <img src="" alt="" className="fuelproducers-community-post-owner-profile" />
                      <p className="fuelproducers-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="fuelproducers-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="fuelproducers-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="fuelproducers-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="fuelproducers-community-post">
                    <div className="fuelproducers-community-post-owner-info">
                      <img src="" alt="" className="fuelproducers-community-post-owner-profile" />
                      <p className="fuelproducers-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="fuelproducers-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="fuelproducers-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="fuelproducers-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="fuelproducers-community-right-content">
                <h2 className="fuelproducers-community-title">
                  For You
                </h2>
                <hr />
                <div className="fuelproducers-comunity-foryou-post">
                  <h4 className="fuelproducers-community-post-title">
                    Title
                  </h4>
                  <p className="fuelproducers-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="fuelproducers-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="fuelproducers-comunity-foryou-post">
                  <h4 className="fuelproducers-community-post-title">
                    Title
                  </h4>
                  <p className="fuelproducers-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="fuelproducers-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="fuelproducers-comunity-foryou-post">
                  <h4 className="fuelproducers-community-post-title">
                    Title
                  </h4>
                  <p className="fuelproducers-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="fuelproducers-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="fuelproducers-comunity-foryou-post">
                  <h4 className="fuelproducers-community-post-title">
                    Title
                  </h4>
                  <p className="fuelproducers-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="fuelproducers-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="fuelproducers-community-newpost-topbar">
              <IoMdArrowRoundBack className="fuelproducers-community-newpost-icon" onClick={() => setNewPost(false)}> </IoMdArrowRoundBack>
              <img src="" alt="" className="fuelproducers-community-topbar-profile" />
            </div>
            <h2 className="fuelproducers-community-title">
              New Post
            </h2>
            <div className="fuelproducers-community-new-post-container">
              <input type="text" placeholder="Add Heading" className="fuelproducers-community-new-post-title" />
              <textarea placeholder="Write yout post here...." className="fuelproducers-community-new-post-description" />
              {/* <hr /> */}
              <input type="file" />
              {/* <hr /> */}
              <button className="fuelproducers-community-new-post-button">
                Post
              </button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default FuelProducersCommunity