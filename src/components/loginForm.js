import React from 'react';

import {
    Link
} from "gatsby"

export default () => {
    return (
        <div className="login">
            <div className="login-module">
                <h3>Zaloguj się</h3>
                <form>
                    <span>
                        Email
                    </span>
                    <input type="text"></input>
                    <span>Hasło</span>
                    <input type="password"></input>
                </form>
                <div className="controls">

                    <Link to="/register">Załóż konto</Link>
                    <Link to="/">Zaloguj się</Link>
                </div>


            </div>

        </div>


    )

}