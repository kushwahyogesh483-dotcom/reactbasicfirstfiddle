import React from 'react'

function Ourteam() {
    return (
        <>
            <div>
                <img src="https://pn-paul.netlify.app/image/new-our-team.jpg" alt="" className='w-100' />
            </div>

            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-5 mt-4'>
                        <img src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg" alt="" className='w-100' />
                    </div>
                    <div className='col-md-6 ms-1'>
                        <h2 className='mt-4'>Priyank Sukhija</h2>
                        <h6>C.E.O. & M.D.</h6>
                        <p className='b'>A 19-year-old dropout kid, who was just setting up his first venture, envisioned what nobody thought would make him a business tycoon in the hospitality industry. Once he began, there was no stopping this entrepreneur from reaching the heights he has reached today. It is the passion and creative streak of Priyank Sukhija that has made him the most watched-out restaurateur of today’s time. Coming from a family of lawyers, he ventured into the business world on his own with Lazeez Affaire in 1999 and has never looked back since.</p>

                    
                            <button className='btn btn-warning btn-lg mb-3 text-light'>Read More...</button>
                        
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <a href=""><i></i></a>

                            </div>

                        </div>
                    </div>

                </div>
                
                {/* row end */}
            </div>
            {/* container end */}
        </>
    )
}

export default Ourteam
