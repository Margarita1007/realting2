import React from 'react';
import { CardType } from '../../../../types';


const img1 = require("../../../../assets/img/img1.jpg");
const img2 = require("../../../../assets/img/img2.jpg");
const img3 = require("../../../../assets/img/img3.jpg");

const ObjectGallery: React.FC<CardType> = (obj) => {
    return (
        <div className="image-gallery">
            <div className="primary-image">
                <div style={{position: 'relative'}}>
                    <img src={obj.img} alt="obj-img" style={{width: '100%'}}/>
                </div>
            </div>
            <div className="secondary-image">
                <div style={{backgroundImage: `url(${img1})`}}></div>
                <div style={{backgroundImage:  `url(${img2})`}}></div>
                <div style={{backgroundImage: `url(${img3})`}}></div>
            </div>
            <div>

            </div>
            <div id="gallery" hidden/>
        </div>
    )
}

export default ObjectGallery;