import React from 'react'

function About() {
  return (
    <section id="about">
    <div className="container mil-p-120-30">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 col-xl-5">
          {/* About content */}
        </div>
        <div className="col-lg-5">
          <div className="mil-about-photo mil-mb-90">
            <img src="/img/int_1.jpg" alt="Interior" className="mil-scale" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About;