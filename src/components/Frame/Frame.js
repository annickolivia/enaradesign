// components/Frame/Frame.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Frame = () => {
  return (
    <div className="mil-frame">
      <div className="mil-frame-top">
        <Link to="/" className="mil-logo">Enara Design</Link>
        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
      <div className="mil-frame-bottom">
        <div className="mil-current-page"></div>
        <div className="mil-back-to-top">
          <Link to="#top" className="mil-link mil-dark mil-arrow-place">
            <span>Back to top</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frame;