import React from 'react';
import { Link } from "gatsby"

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    myButton: {
        display: 'inline-block',
        padding: '10px 40px',
        border: '0.75px solid #3C3C3C',
        fontSize: 24,
        margin: 5,
        width: 220,
        fontWeight: 300,
        '&:hover': {
            backgroundColor: '#222',
            color: '#fff'
        }
    }
})

export default ({ text, target }) => {
    const classes = useStyles()
    return (
        <Link className={classes.myButton} to={target}>{text}</Link>
    )

}