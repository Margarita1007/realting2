import React from 'react';
import { KeyImageType } from '../../../../types';
import { CameraFilled } from '@ant-design/icons';


const noPhoto = require("../../../../assets/img/nophoto.jpg");

const ObjectGallery: React.FC<KeyImageType> = (obj) => {
    
    if (obj.value.length) { 
        const imgArray = obj.value.map((item: any) => item.url);
    
        return (
            <div className="image-gallery">
                <div className="primary-image">
                    <div style={{position: 'relative'}} className='primary-image_image'>
                        <img src={imgArray[0]} alt="obj-img" style={{width: '100%'}}/>
                        <div className='image-count'>
                            <CameraFilled style={{color: '#fff'}} />
                            {imgArray.length}
                        </div>
                    </div>
                </div>
                <div className="secondary-image">
                <div style={{backgroundImage: `url(${imgArray[1]})`}}></div>
                    <div style={{backgroundImage:  `url(${imgArray[2]})`}}></div>
                    <div style={{backgroundImage: `url(${imgArray[3]})`}}></div>
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