import React from 'react';

export default () => {
    return (
        <div className="about" id="about">

            {/* <div className="container"> */}
            {/* <div className="row"> */}
            <div className="half-screen">
                <h3>O nas</h3>
                <p>Praesent in lobortis nunc. Integer pulvinar nisi quis mollis dictum. Suspendisse vel sollicitudin lectus. Phasellus mollis scelerisque ultricies. Cras eu dapibus magna.</p>
                <img src={require(`../../images/Signature.svg`)} alt='' />
                {/* {require(`../../images/${el.icon}`)} */}
            </div>
            <div className="half-screen about-bkg"> </div>
            {/* </div> */}
            {/* </div> */}


        </div>


    )
}