import React from 'react';
import { PropertyType } from '../../../../types';
import { CameraFilled } from '@ant-design/icons';
import { getImage } from '../../../functions';
const noPhoto = require("../../../../assets/img/nophoto.jpg");


const ObjectGallery: React.FC<PropertyType> = (obj) => {
    
    if (obj.values) {
        const imageObj = getImage(obj);
       // console.log(imageObj)
    
        return (
            <div className="image-gallery">
                <div className="primary-image">
                    <div style={{position: 'relative'}} className='primary-image_image'>
                        <img src={imageObj.title} alt="obj-img" style={{width: '100%'}}/>
                        <div className='image-count'>
                            <CameraFilled style={{color: '#fff'}} />
                            {imageObj.allImgLength}
                        </div>
                    </div>
                </div>
                <div className="secondary-image">
                    <div style={{backgroundImage: `url(${imageObj.interior[0]})`}}></div>
                    <div style={{backgroundImage:  `url(${imageObj.interior[1]})`}}></div>
                    <div style={{backgroundImage: `url(${imageObj.extrerior[0]})`}}></div>
                </div>
                <div>
    
                </div>
                <div id="gallery" hidden/>
            </div>
        )
    } else {
        return (
                <div className="image-gallery-no-photo">
                    <img src={noPhoto} alt='no'/>
                </div>  
        )
    }
}

export default ObjectGallery;