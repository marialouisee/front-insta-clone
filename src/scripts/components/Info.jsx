import React from 'react'
import profilePic from '../../images/pool.jpeg'

const Info = () => {
    return (
        <div className='info'>
            <div >
                <img src={profilePic} alt="" />
            </div>
            <div className='infoContainer'>
                <div className='name'>
                    <h2 className='light'>placesofInstagram</h2>
                    <button>follow</button>
                    <h3>...</h3>
                </div>
                <div className='stats'>
                    <div>
                        <h4>...</h4>
                        <h4 className='light'>Posts</h4>
                    </div>
                    <div>
                        <h4>...</h4>
                        <h4 className='light'>Follower</h4>
                    </div>
                    <div>
                        <h4>...</h4>
                        <h4 className='light'>Following</h4>
                    </div>
                   
                </div>
                <div className='further'>
                    <h4>Arcitcture and Nature</h4>
                    <h4 className='light'>Some places are just...better</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Info
