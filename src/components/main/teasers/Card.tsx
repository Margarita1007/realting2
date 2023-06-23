import React, { useState } from "react";
import { Card, Row, Col, Space, Divider, Modal } from 'antd';
import { PropertyType } from "../../../types";
import loc from '../../../assets/icons/location.svg';
import './card.css';
import rooms from '../../../assets/icons/unit-rooms.svg';
import bath from '../../../assets/icons/unit-baths.svg';
import square from '../../../assets/icons/unit-square.svg';
import storeys from '../../../assets/icons/unit-storeys.svg';
import { Link } from "react-router-dom";
import { LikeOutlined, DislikeOutlined, LikeFilled, DislikeFilled } from "@ant-design/icons";
import ObjectGallery from "../offers/object/ObjectGallery";
import { getCurrency } from "../../functions";

const CardTemplate: React.FC<PropertyType> = (props) => {
    const path: string = '/offers/' + props.id;
    const [like, setLike] = useState<boolean>(false);
    const [dislike, setDislike] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    //console.log('utj', props.values['62'].value)

    function handlerLike(e: React.MouseEvent<HTMLSpanElement>) {
        setIsModalOpen(true);
        //e.preventDefault();
        setLike(!like);
        if (dislike) {
            setDislike(false);
        }
    }

    function handlerDislike(e: React.MouseEvent<HTMLSpanElement>) {
        // e.preventDefault();
        setDislike(!dislike);
        if (like) {
            setLike(false)
        }
        setIsModalOpen(true);
    }


    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        
        <Card
            className="teaser-tile"
            hoverable
        >
            <Link to={path} style={{color: '#606873'}}>
                <ObjectGallery {...props} />
                <Space direction="vertical" className="desc">
                    <Row className="title">  
                        {props.values['56'].value ? props.values['56'].value : ''} 
                        {/* {props.values['61'].value.length ? props.values['61'].value[0].recordTitle : ''} */}
                    </Row>
                    <Row className="geo">
                        <Col className="geo-icon">
                            <img src={loc} alt='icon-geo'/>
                        </Col>
                        <Col>
                            {props.values['55'].value.length ? props.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город'}
                            <span>, </span>
                            {props.values['55'].value.length ? props.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна'}
                        </Col>
                    </Row>
                    <Row className="units">
                        <div className="unit-item">
                            <img src={rooms} alt="rooms"/>
                            <span>
                                {props.values['62'].value.length ? props.values['62'].value[0].recordTitle : 'layout'}
                            </span>
                        </div>
                        <div className="unit-item">
                            <img src={bath} alt="baths"/>
                            <span>{props.values['75'].value ? props.values['75'].value : 'bath'}</span>
                        </div>
                        <div className="unit-item">
                            <img src={square} alt="square"/>
                            <span>{props.values['39'].value ? props.values['39'].value : 'square'} м²</span>
                        </div>
                        <div className="unit-item">
                            <img src={storeys} alt="storeys"/>
                            <span>
                                {props.values['38'].value ? props.values['38'].value : 'floor'}/
                                {props.values['55'].value.length ? props.values['55'].value[0].recordValues['19'] : 'total'}

                            </span>
                        </div>
                    </Row>
                </Space>
                <Divider />
                <Row className="price">
                    {props.values['27'].value ? `${getCurrency(props.values['70'].value[0].recordTitle)} ${props.values['27'].value}` : 'Цена не указана'}
                </Row>
                <Divider />
                <Row className="text">
                    {props.values['64'].value ? props.values['64'].value : 'текст'}
                </Row>
                </Link>
                <Row className="social-actions">
                    <div className="social-action" onClick={(e) => {handlerLike(e)}}>
                        {like ? <LikeFilled style={{color: '#0ca'}} /> :
                        <LikeOutlined style={{color: '#0ca'}} />}
                        Нравится
                    </div>
                    <div className="social-action" onClick={(e) => {handlerDislike(e)}}>
                        {dislike ? <DislikeFilled /> :
                        <DislikeOutlined />}
                        Не нравится
                    </div>
                    <Modal title='' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className="modal-feedback">
                            <p>Ваш комментарий поможет нам подобрать для вас лучший вариант</p>
                            <textarea placeholder="Enter your message..." cols={25} rows={5}></textarea>
                        </div>
                    </Modal>
                </Row>
            </Card>
    )
}

export default CardTemplate;