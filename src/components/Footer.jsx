import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-5'>
              <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className='w-50%' />
            </div>
            <div className='col-md-7'>
              <h2> <b style={{ color: "orange" }}>CONTACT</b> US</h2>
              <p>We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and revolutioning the F & B industry!</p>
              <div className='row'>
                <div className='col-md-6'>
                  <h2>Address</h2>
                  <p>
                    S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi 110017
                  </p>
                </div>
                <div className='col-md-6'>
                  <h2>Enquiry</h2>
                  <p>Email: customercare@firstfiddle.in</p>
                </div>
              </div>
              {/* row end */}
            </div>

          </div>
          {/* row end */}
        </div>
        {/* container-fluid end */}
      </footer>

      <div className='container-fluid' style={{backgroundColor:"black"}}>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 text-light'>
            <p className='mt-3' style={{fontWeight:"250"}}>
              EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG | APP</p>
          </div>

        </div>
        {/* row end */}
      </div>
      {/* container-fluid end */}
    </>
  )
}

export default Footer
