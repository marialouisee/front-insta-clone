import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import { AiOutlineTable, AiOutlineYoutube } from "react-icons/ai";
import { FiTv } from "react-icons/fi";
import { BsPersonBoundingBox } from "react-icons/bs";




const Navigation = () => {
    return (
        <div className='navigation'>
            <Link to='/posts'>
                <AiOutlineTable />
                <p>POSTS</p>
            </Link>
            
            <Link to='/reels'>
                <AiOutlineYoutube />
                <p>REELS</p>
            </Link>

            <Link to='/igtv'>
                <FiTv />
                <p>IGTV</p>
            </Link>

            <Link>
                <BsPersonBoundingBox />
                <p>TAGGED</p>
            </Link>
            
        </div>
    )
}

export default Navigation
