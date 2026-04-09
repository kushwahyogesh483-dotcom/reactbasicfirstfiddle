import React from 'react'

function Home() {
    return (
        <>
            {/* slider start */}
            <div className='carousel slide' data-bs-ride='carousel' id='ab'>
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3000' >
                        <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" alt="" className='w-100' />
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <img src="https://pn-paul.netlify.app/image/slider22.jpg" alt="" className='w-100' />

                    </div>

                </div>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#ab' data-bs-slide-to='0' className='active'></button>
                    <button type='button' data-bs-target='#ab' data-bs-slide-to='1'></button>
                </div>

            </div>
            {/* slider end */}
            <div className='container'>
                <h2 className='a'>Welcome To <b style={{ color: 'orange' }}>FIRST FIDDLE</b></h2>
                <br />
                <div className='row'>
                    <div className='col-md-7'>
                        <p className='b'>First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector, is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands, and franchises across India.

                        </p>
                        <div className='text-center'>
                            <button className='btn btn-info'>Read More...</button>
                        </div>
                    </div>

                    <div className='col-md-5'>
                        <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" className='img123' />
                    </div>


                </div>

            </div>

            <div className='container-fluid e'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center mt-4'>
                        <h2 className='c'>MEDIA MENTIONS</h2>
                        <p className='d'>We've been making splashes and headlines since 1999 for our innovative concepts and aesthetic ideations, experimental gastronomic affairs, and exotic mixology. We’ve made our way from the heart of the country into the hearts of its people!</p>
                        <div className='text-center'>
                            <button className='btn btn-info'>Read More...</button>
                        </div>
                    </div>
                    <div className='col-md-2'></div>

                </div>
                {/* row end */}
            </div>
            {/* container-fluid end */}

            <div className='container'>
                <h2 className='a'>EXPLORE <b style={{ color: "orange" }}>OUR BRANDS</b></h2>
                <div className='row'>
                    <div className='col-md-3 mb-3'>
                        <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" className='w-100' />
                    </div>
                    <div className='col-md-3 mb-3'>
                        <img src="https://pn-paul.netlify.app/image/ffpic2.jpg" alt="" className='w-100' />
                    </div>

                    <div className='col-md-3 mb-3'>
                        <img src="https://pn-paul.netlify.app/image/ffpic3.jpg" alt="" className='w-100' />
                    </div>

                    <div className='col-md-3 mb-3'>
                        <img src="https://pn-paul.netlify.app/image/ffpic4.jpg" alt="" className='w-100' />
                    </div>

                </div>
                {/* row end */}
            </div>
            {/* container end */}

            <div className='container-fluid e'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center mt-4'>
                        <h2 className='c'>EXPERIENCE OUR CONCEPTS</h2>
                        <p className='d'>Moving beyond just offering Indian, international, and fusion cuisines, our restaurants create magic with our special events, mood-setting music, Insta-worthy aesthetics, and tongue-tingling signatures! Head over to experience it for yourself!</p>

                        <div className='text-center'>
                            <button className='btn btn-info'>Read More...</button>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                {/* row end */}
            </div>
            {/* container-fluid end */}
        </>
    )
}

export default Home
