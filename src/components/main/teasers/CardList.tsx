import React from "react";
import { Row, Col } from 'antd';
import CardTemplate from "./Card";
import './teasers.css';
import SwitchMapList from "./SwitchMapList";
import { useAppSelector } from "../../../app/hooks";


const CardList: React.FC = () => {
    const objs = useAppSelector(state => state.objects.objects);
    if (objs) {
        return (
            <div className="card-list">
                <Row gutter={[16, 16]}>
                    { objs.map((obj) => (
                        <Col span={24} key={obj.id}>
                            <CardTemplate {...obj}/>
                        </Col>
                    ))}
                </Row>
                <SwitchMapList/>
            </div>
        )
    } else {
        return (
            <div> Загрузка </div>
        )
    }
    
}

export default CardList;