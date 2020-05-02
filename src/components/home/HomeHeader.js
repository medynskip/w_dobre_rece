import React from 'react';
import HomeNavigation from './HomeNavigation';

export default (props) => {
    return (

        <div className="header" id="header">
            <div className="container">
                <HomeNavigation handleScroll={props.handleScroll} />
                <div className="row hero-text">
                    <div className="col-7">
                        <h3>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h3>
                        {/* <img src="./../../images/Decoration.svg" /> */}
                        <span>ODDAJ<br />RZECZY</span>
                        <span>ZORGANIZUJ<br />ZBIÓRKĘ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}