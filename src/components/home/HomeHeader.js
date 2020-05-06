import React from 'react';
// import HomeNavigation from './HomeNavigation';

import Button from './../ui/button';

export default (props) => {
    return (

        <div className="header" id="header">
            <div className="container">
                {/* <HomeNavigation handleScroll={props.handleScroll} /> */}
                <div className="row hero-text">
                    <div className="col-7">

                        <h3>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h3>

                        <Button text="ODDAJ RZECZY" target="/login" />
                        <Button text="ZORGANIZUJ ZBIÓRKĘ" target="/login" />

                        {/* <button to="/login">ODDAJ RZECZY</button> */}
                        {/* <button to="/login">ZORGANIZUJ ZBIÓRKĘ</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}