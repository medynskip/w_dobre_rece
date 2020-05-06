import React from 'react';

export default ({ text, name, active, handleClick }) => {
    const activeClass = () => {
        return active === name ? 'active tab' : 'tab';
    }

    return (
        <button name={name} className={activeClass()} onClick={handleClick}>{text}</button>
    )

}