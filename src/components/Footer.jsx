import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className='container-fluid'>
          <div className='row align-items-center'>

            {/* Logo */}
            <div className='col-12 col-md-5 text-center text-md-start mb-4 mb-md-0'>
              <img
                src="https://pn-paul.netlify.app/image/ff-logo-02.png"
                alt="logo"
                className='img-fluid footer-logo'
              />
            </div>

            {/* Content */}
            <div className='col-12 col-md-7 text-center text-md-start'>
              <h2>
                <b style={{ color: "orange" }}>CONTACT</b> US
              </h2>

              <p className='footer-text'>
                We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across India.
              </p>

              <div className='row text-center text-md-start'>

                <div className='col-12 col-md-6 mb-3'>
                  <h5>Address</h5>
                  <p>
                    S-357 2nd floor, Panchsheel Park South, New Delhi
                  </p>
                </div>

                <div className='col-12 col-md-6'>
                  <h5>Enquiry</h5>
                  <p>Email: customercare@firstfiddle.in</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className='footer-bottom text-center text-light'>
        <p>
          EMPLOYEE POLICIES | PRIVACY POLICY | TERMS | BLOG | APP
        </p>
      </div>

    </>
  )
}

export default Footer
