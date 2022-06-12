import React, { Component } from 'react';
import "./About.css";
import profile_image from "../assets/profile_image.png";
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          src={profile_image}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Arya Naren</div>
        <div className="brief_description">
          Rising Junior @ Virginia Tech | Intern @ Visa 
        </div>
      </div>
    </div>
      </div>
    )
  }
}