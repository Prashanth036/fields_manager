import React, { useEffect, useState } from "react";
import { services_data } from "../Constant/data";
import "../Styles/Services.css";
// import "../Styles/About.css";
import "../Styles/ImageGallery.css";
import Text from "../components/About";
import Icon_share from "../assets/Icon_share.svg";
import  Header  from "../components/Header";
import Image_Gallery_profile from "../assets/Image_Gallery_profile.svg";
import Image_Gallery from "../assets/Image_Gallery.svg";
import SportsForm from "../components/SportsForm";
import Footer from "../components/Footer";
import { SportsList } from "../components/SportsList";

export const Services = () => {
  return (
    <div className="services-page">
      <Header />
      <div className="body">
        <div className="image-section">
          <div className="card-image-gallery">
            <img
              src={Image_Gallery_profile}
              className="image-gallery_profile"
            />
            <h1 className="image-gallery-text">Live Streaming-Service</h1>
          </div>
          <img src={Image_Gallery} className="image_gallery" />
        </div>

        <div className="info-section">
          <div className="about">
            <div className="about-container">
              <h1 className="text">About</h1>
              <img src={Icon_share} className="share-icon" />
            </div>
            <Text />
            <SportsList></SportsList>
          </div>

          <div className="reserve-container">
            <SportsForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
