import React from 'react';

const Header = () => {
    return (
        <div className='header'>

            <img src={process.env.PUBLIC_URL + '/img/Instagram_logo.svg'} alt="insta logo" />

            <input type="text"/>

            <div>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>

            
        </div>
    )
}

export default Header
