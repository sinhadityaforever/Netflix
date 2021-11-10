import React from "react";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function ProfileScreen() {
  let date = new Date().toLocaleDateString();

  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <div className="profileScreen">
        <Nav></Nav>
        <div className="profileScreen__body">
          <h1>Edit profile</h1>
          <div className="profileScreen__info">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            ></img>
            <div className="profileScreen__details">
              <h2>{user.email}</h2>
              <div className="profileScreen__plans">
                <h3>Plans</h3>
                <p className="profileScreen__renewal">Renewal date: {date}</p>
                <div className="profileScreen__plan">
                  <div className="profileScreen__plan--text">
                    <h4>Netflix Standard</h4>
                    <h5>1080p</h5>
                  </div>
                  <button className="profileScreen__plan--button">
                    Subscribe
                  </button>
                </div>
                <div className="profileScreen__plan">
                  <div className="profileScreen__plan--text">
                    <h4>Netflix Basic</h4>
                    <h5>480p</h5>
                  </div>
                  <button className="profileScreen__plan--button">
                    Subscribe
                  </button>
                </div>
                <div className="profileScreen__plan">
                  <div className="profileScreen__plan--text">
                    <h4>Netflix Premium</h4>
                    <h5>4K+HDR</h5>
                  </div>
                  <button className="profileScreen__plan--button--current">
                    Current Plan
                  </button>
                </div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
