import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="hidden sm:flex icons">
      <div className="social flex items-center justify-center">
        <a href="https://www.facebook.com/profile.php?id=100009558465904" target="_blank">
          <i className="social-icon fab fa-facebook-f"></i>
        </a>
      </div>
     
      <div className="social">
        <a href="https://www.linkedin.com/in/ss0603/" target="_blank">
          <i className="social-icon fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
