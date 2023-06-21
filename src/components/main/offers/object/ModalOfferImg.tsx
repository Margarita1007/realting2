import React from "react";
import './modal.css';
import { ArrowLeftOutlined, ArrowRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Carousel } from "antd";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../../../app/hooks";

interface ChildProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SampleNextArrow: React.FC<any> = (props: any) => {
    const { className, style, onClick } = props
    return (
        <ArrowRightOutlined
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
        />
    )
}  

const SamplePrevArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props
    return (
      <ArrowLeftOutlined
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    )
  }
  
const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

const ModalOfferImg: React.FC<ChildProps> = ( {setShowModal}) => {
    //let refCarousel = useRef(null);

    function closeModal() {
        document.body.style.overflow = "visible";
        setShowModal(false);
    }

    const { id } = useParams();
    const stateObj = useAppSelector(state => state.objects.objects);
    
    const obj = stateObj.find((card) => card.id === id);
    if (obj) {
        const leafEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
          //.log(refCarousel)
        }

        return (
            <div className="modal-offer">
                <CloseCircleOutlined className="modal-close" onClick={closeModal}/>
                <div className="offer-carousel" onKeyDown={(e) => leafEvent(e)}>
                    <Carousel 
                        // ref={refCarousel.current} 
                        arrows 
                        {...settings}
                    >
                        {obj.values['52'].value.map((item: any) => (
                            <div className="modal-img" key={item.id}>
                                <img src={item.url} alt="img1"/>
                            </div>
                        ))}                                       
                    </Carousel>
                </div>
                
            </div>
        )
    } else {
        return (
            <div>Not found</div>
        )
    }
    
}

export default ModalOfferImg;