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

    function handlerLike(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        setLike(!like);
        if (dislike) {
            setDislike(false);
        }
        setIsModalOpen(true);
    }

    function handlerDislike(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
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
        <Link to={path} >
            <Card
                className="teaser-tile"
                hoverable
            >
                <ObjectGallery {...props.values['52']} />
                <Space direction="vertical" className="desc">
                    <Row className="title">  
                        {props.values['2'].value ? props.values['2'].value : ''} ???
                        {props.values['61'].value.length ? props.values['61'].value[0].recordTitle : ''}
                    </Row>
                    <Row className="geo">
                        <Col className="geo-icon">
                            <img src={loc} alt='icon-geo'/>
                        </Col>
                        <Col>
                         гео
                        </Col>
                    </Row>
                    <Row className="units">
                        <div className="unit-item">
                            <img src={rooms} alt="rooms"/>
                            <span>???</span>
                        </div>
                        <div className="unit-item">
                            <img src={bath} alt="baths"/>
                            <span>{props.values['75'].value ? props.values['75'].value : ''}</span>
                        </div>
                        <div className="unit-item">
                            <img src={square} alt="square"/>
                            <span>{props.values['39'].value ? props.values['39'].value : ''} м²</span>
                        </div>
                        <div className="unit-item">
                            <img src={storeys} alt="storeys"/>
                            <span>{props.values['38'].value ? props.values['38'].value : ''}</span>
                        </div>
                    </Row>
                </Space>
                <Divider />
                <Row className="price">
                    {props.values['27'].value ? `${getCurrency(props.values['70'].value[0].recordTitle)} ${props.values['27'].value}` : 'Цена не указана'}
                </Row>
                <Divider />
                <Row className="text">
                    текст
                </Row>
                <Row className="social-actions">
                    <div className="social-action" onClick={(e) => {handlerLike(e)}}>
                        {like ? <LikeFilled style={{color: '#0ca'}} /> :
                        <LikeOutlined style={{color: '#0ca'}} />}
                        Like
                    </div>
                    <div className="social-action" onClick={(e) => {handlerDislike(e)}}>
                        {dislike ? <DislikeFilled /> :
                        <DislikeOutlined />}
                        Dislike
                    </div>
                </Row>
                <Modal title='' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className="modal-feedback">
                        <p>Ваш комментарий поможет нам подобрать для вас лучший вариант</p>
                        <textarea placeholder="Enter your message..." cols={25} rows={5}></textarea>
                    </div>
                </Modal>
            </Card>
        </Link>
    )
}

export default CardTemplate;