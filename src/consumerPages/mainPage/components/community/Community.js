import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import './Community.css';

function ConsumerCommunity() {

  const [newPost, setNewPost] = useState(false);

  return (
    <div className="consumer-community-wrapper">
      {
        newPost === false ? (
          <>
            <div className="consumer-community-topbar">
              <img src="" alt="" className="consumer-community-topbar-profile" />
            </div>
            <div className="consumer-community-content">
              <div className="consumer-community-left-content">
                <div className="consumer-community-titlebar">
                  <h2 className="consumer-community-title">
                    Community
                  </h2>
                  <button className="consumer-community-newpost-button" onClick={() => setNewPost(true)}>
                    Post <IoMdAdd className="consumer-community-newpost-icon" />
                  </button>
                </div>
                <div className="consumer-community-posts">
                  <div className="consumer-community-post">
                    <div className="consumer-community-post-owner-info">
                      <img src="" alt="" className="consumer-community-post-owner-profile" />
                      <p className="consumer-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="consumer-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="consumer-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="consumer-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="consumer-community-post">
                    <div className="consumer-community-post-owner-info">
                      <img src="" alt="" className="consumer-community-post-owner-profile" />
                      <p className="consumer-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="consumer-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="consumer-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="consumer-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="consumer-community-post">
                    <div className="consumer-community-post-owner-info">
                      <img src="" alt="" className="consumer-community-post-owner-profile" />
                      <p className="consumer-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="consumer-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="consumer-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="consumer-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="consumer-community-post">
                    <div className="consumer-community-post-owner-info">
                      <img src="" alt="" className="consumer-community-post-owner-profile" />
                      <p className="consumer-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="consumer-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="consumer-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="consumer-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="consumer-community-right-content">
                <h2 className="consumer-community-title">
                  For You
                </h2>
                <hr />
                <div className="consumer-comunity-foryou-post">
                  <h4 className="consumer-community-post-title">
                    Title
                  </h4>
                  <p className="consumer-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="consumer-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="consumer-comunity-foryou-post">
                  <h4 className="consumer-community-post-title">
                    Title
                  </h4>
                  <p className="consumer-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="consumer-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="consumer-comunity-foryou-post">
                  <h4 className="consumer-community-post-title">
                    Title
                  </h4>
                  <p className="consumer-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="consumer-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="consumer-comunity-foryou-post">
                  <h4 className="consumer-community-post-title">
                    Title
                  </h4>
                  <p className="consumer-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="consumer-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="consumer-community-newpost-topbar">
              <IoMdArrowRoundBack className="consumer-community-newpost-icon" onClick={() => setNewPost(false)}> </IoMdArrowRoundBack>
              <img src="" alt="" className="consumer-community-topbar-profile" />
            </div>
            <h2 className="consumer-community-title">
              New Post
            </h2>
            <div className="consumer-community-new-post-container">
              <input type="text" placeholder="Add Heading" className="consumer-community-new-post-title" />
              <textarea placeholder="Write yout post here...." className="consumer-community-new-post-description" />
              {/* <hr /> */}
              <input type="file" />
              {/* <hr /> */}
              <button className="consumer-community-new-post-button">
                Post
              </button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default ConsumerCommunity