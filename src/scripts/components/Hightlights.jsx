import React from 'react'
import arc1 from '../../images/hightlights/arc1.jpeg'
import arc2 from '../../images/hightlights/arc2.jpeg'
import cabin from '../../images/hightlights/cabin.jpeg'

const Hightlights = () => {
    const hightlights = [{name: "Arcitecture One", img: arc1}, {name: "Arcitecture Two", img: arc2}, {name: "Cabin", img: cabin}]

    const renderHightlights = () => {
        return hightlights.map((hightlight, index) => {
            return (
                    <div className="hightlightItem" key={index}>
                        <img src={hightlight.img} alt={hightlight.name}/>
                        <div className="caption">
                            <p>{hightlight.name}</p>
                        </div>
                    </div>
            )
        })
    }
    return (
        <div className='highlights'>
            {renderHightlights()}
        </div>
    )
}

export default Hightlights
