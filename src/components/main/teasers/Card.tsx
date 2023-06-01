import React, { useState } from "react";
import { Card, Row, Col, Space, Divider } from 'antd';
import { CardType } from "../../../types";
import loc from '../../../assets/icons/location.svg';
import './card.css';
import rooms from '../../../assets/icons/unit-rooms.svg';
import bath from '../../../assets/icons/unit-baths.svg';
import square from '../../../assets/icons/unit-square.svg';
import storeys from '../../../assets/icons/unit-storeys.svg';
import { Link } from "react-router-dom";
import { LikeOutlined, DislikeOutlined, LikeFilled, DislikeFilled } from "@ant-design/icons";
import ObjectGallery from "../offers/object/ObjectGallery";

const CardTemplate: React.FC<CardType> = (props) => {
    const path: string = '/offers/' + props.id;
    const [like, setLike] = useState<boolean>(false);
    const [dislike, setDislike] = useState<boolean>(false);

    function handlerLike(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        setLike(!like);
        if (dislike) {
            setDislike(false);
        }
    }

    function handlerDislike(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        setDislike(!dislike);
        if (like) {
            setLike(false)
        }
    }

    function handlerComment(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        console.log('comment', e)
    }

    return (
        <Link to={path} target="_blank">
            <Card
                className="teaser-tile"
                hoverable
            >
                <ObjectGallery {...props} />
                <Space direction="vertical" className="desc">
                    <Row className="title">  
                        Квартира 2 комнаты 
                    </Row>
                    <Row className="geo">
                        <Col className="geo-icon">
                            <img src={loc} alt='icon-geo'/>
                        </Col>
                        <Col>
                        {props.geo}
                        </Col>
                    </Row>
                    <Row className="units">
                        <div className="unit-item">
                            <img src={rooms} alt="rooms"/>
                            <span>2</span>
                        </div>
                        <div className="unit-item">
                            <img src={bath} alt="baths"/>
                            <span>1</span>
                        </div>
                        <div className="unit-item">
                            <img src={square} alt="square"/>
                            <span>58 м²</span>
                        </div>
                        <div className="unit-item">
                            <img src={storeys} alt="storeys"/>
                            <span>2/5</span>
                        </div>
                    </Row>
                </Space>
                <Divider />
                <Row className="price">
                    $ 230,000
                </Row>
                <Divider />
                <Row className="text">
                    {props.text}
                </Row>
                <Row className="social-actions">
                    <div className="actions-like">
                        <div onClick={(e) => {handlerLike(e)}}>
                            {like ? <LikeFilled style={{color: '#0ca'}} /> :
                            <LikeOutlined style={{color: '#0ca'}} />}
                        </div>
                        <div onClick={(e) => {handlerDislike(e)}}>
                            {dislike ? <DislikeFilled /> :
                            <DislikeOutlined />}
                        </div>
                    </div>
                    <div>
                        <span onClick={(e) => handlerComment(e)}>Комментировать</span>
                    </div>
                    
                </Row>
            </Card>
        </Link>
    )
}

export default CardTemplate;