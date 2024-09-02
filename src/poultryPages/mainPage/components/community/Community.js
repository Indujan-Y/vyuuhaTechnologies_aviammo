import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import './Community.css';

function PoultryCommunity() {

  const [newPost, setNewPost] = useState(false);

  return (
    <div className="poultry-community-wrapper">
      {
        newPost === false ? (
          <>
            <div className="poultry-community-topbar">
              <img src="" alt="" className="poultry-community-topbar-profile" />
            </div>
            <div className="poultry-community-content">
              <div className="poultry-community-left-content">
                <div className="poultry-community-titlebar">
                  <h2 className="poultry-community-title">
                    Community
                  </h2>
                  <button className="poultry-community-newpost-button" onClick={() => setNewPost(true)}>
                    Post <IoMdAdd className="poultry-community-newpost-icon" />
                  </button>
                </div>
                <div className="poultry-community-posts">
                  <div className="poultry-community-post">
                    <div className="poultry-community-post-owner-info">
                      <img src="" alt="" className="poultry-community-post-owner-profile" />
                      <p className="poultry-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="poultry-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="poultry-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="poultry-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="poultry-community-post">
                    <div className="poultry-community-post-owner-info">
                      <img src="" alt="" className="poultry-community-post-owner-profile" />
                      <p className="poultry-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="poultry-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="poultry-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="poultry-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="poultry-community-post">
                    <div className="poultry-community-post-owner-info">
                      <img src="" alt="" className="poultry-community-post-owner-profile" />
                      <p className="poultry-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="poultry-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="poultry-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="poultry-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                  <div className="poultry-community-post">
                    <div className="poultry-community-post-owner-info">
                      <img src="" alt="" className="poultry-community-post-owner-profile" />
                      <p className="poultry-community-post-owner-name">
                        John
                      </p>
                    </div>
                    <h4 className="poultry-community-post-title">
                      Title of Discussion
                    </h4>
                    <p className="poultry-community-post-description">
                      Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                    </p>
                    <hr />
                    <p className="poultry-community-post-info">
                      10 Likes | 20 Replies | 140 Views
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="poultry-community-right-content">
                <h2 className="poultry-community-title">
                  For You
                </h2>
                <hr />
                <div className="poultry-comunity-foryou-post">
                  <h4 className="poultry-community-post-title">
                    Title
                  </h4>
                  <p className="poultry-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="poultry-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="poultry-comunity-foryou-post">
                  <h4 className="poultry-community-post-title">
                    Title
                  </h4>
                  <p className="poultry-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="poultry-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="poultry-comunity-foryou-post">
                  <h4 className="poultry-community-post-title">
                    Title
                  </h4>
                  <p className="poultry-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="poultry-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
                <div className="poultry-comunity-foryou-post">
                  <h4 className="poultry-community-post-title">
                    Title
                  </h4>
                  <p className="poultry-community-post-description">
                    Poultry are domesticated birds kept by humans for the purpose of harvesting animal products such as meat, eggs or feathers. The practice of raising poultry is known as poultry farming. These birds are most typically members of the superorder Galloanserae, especially the order
                  </p>
                  <p className="poultry-community-post-info">
                    Details <FaArrowRight />
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="poultry-community-newpost-topbar">
              <IoMdArrowRoundBack className="poultry-community-newpost-icon" onClick={() => setNewPost(false)}> </IoMdArrowRoundBack>
              <img src="" alt="" className="poultry-community-topbar-profile" />
            </div>
            <h2 className="poultry-community-title">
              New Post
            </h2>
            <div className="poultry-community-new-post-container">
              <input type="text" placeholder="Add Heading" className="poultry-community-new-post-title" />
              <textarea placeholder="Write yout post here...." className="poultry-community-new-post-description" />
              {/* <hr /> */}
              <input type="file" />
              {/* <hr /> */}
              <button className="poultry-community-new-post-button">
                Post
              </button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default PoultryCommunity