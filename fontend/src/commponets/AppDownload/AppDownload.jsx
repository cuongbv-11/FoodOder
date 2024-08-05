import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Để Trải Nghiệm Tốt Hơn, Hãy Tải Ứng Dụng <br />
        Tomato
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Tải từ Google Play" />
        <img src={assets.app_store} alt="Tải từ App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
