import { Layout, Space, Row, Col, Button, Modal } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ModalOfferImg from "./ModalOfferImg";
import ObjectGallery from "./ObjectGallery";
import { useAppSelector } from "../../../../app/hooks";
import BuildParam from "./BuildParam";
import { getDate, getSI } from "../../../functions";


//import img4 from '../../../assets/img/img4.jpg';

const Object: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [isOpenModal, setIsModalOpen] = useState(false);
    const { id } = useParams();
    const stateObj = useAppSelector(state => state.objects.objects);
    const obj = stateObj.find((card) => card.id === id);
    
    function openModal() {
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

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

    if (obj) {
        const updateDate = obj.values['63'].value ? obj.values['63'].value : 'дата';
        
        return (
            <Layout className="object">
                {showModal ? <ModalOfferImg setShowModal={setShowModal}/> : <></>}
                <div onClick={openModal}>
                    <ObjectGallery {...obj}/>
                </div>
                <Space direction="vertical" className="object-params">
                    <div className="update_date">
                        <span>Обновлено: </span>
                        <span>
                            {getDate(updateDate, 'day')}
                        </span>
                    </div>
                    <div className="location param">
                        <h3>Местонахождение</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12} >
                                <span>Страна:</span>
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна'}
                            </Col>
                            {/* <Col xs={24} sm={24} md={12} >
                                <span>Район:</span>
                                Алания ????
                            </Col> */}
                            <Col xs={24} sm={24} md={12} >
                                <span>Город:</span>
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город'}
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Расстояние до моря:</span>
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['24'] : '0'}
                                <span>{getSI(obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['46'][0] : '0')}</span>
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Расстояние до центра:</span>
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['21'] : '0'}
                                <span>{getSI(obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['46'][0] : '0')}</span>
                            </Col>
                        </Row>        
                    </div>

                    <div className="apart param">
                        <h3>Параметры квартиры</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Тип:</span>
                                {obj.values['61'].value.length ? obj.values['61'].value[0].recordTitle : 'Тип'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество спален:</span>
                                {obj.values['62'].value.length ? obj.values['62'].value[0].recordTitle : 'layout'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Общая площадь:</span>
                                <span>
                                    {obj.values['39'].value ? obj.values['39'].value : ''}
                                    <span> </span>
                                    {obj.values['78'].value.length ? getSI(obj.values['78'].value[0]) : ''}²
                                </span>
                            </Col>
                            {/* <Col xs={24} sm={24} md={12}  >
                                <span>Количество комнат:</span>
                                2 ???
                            </Col> */}
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество ванных:</span>
                                {obj.values['75'].value ? obj.values['75'].value : ''}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Этаж:</span>
                                {obj.values['38'].value ? obj.values['38'].value : 'floor'}/
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['19'] : 'total'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Вид:</span>
                                {obj.values['73'].value.length ? obj.values['73'].value[0].recordTitle : 'Вид'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Мебель:</span>
                                {obj.values['72'].value.length ? obj.values['72'].value[0].recordTitle : 'Мебель'}
                            </Col>
                        </Row>
                    </div>

                    <div className="build param">
                        <h3>Параметры здания</h3>
                        <BuildParam {...obj}/>
                    </div>

                    <div className="description param">
                        <h3>Описание</h3>
                        <Row>
                            <Col span={24} className="summary">
                                <p>
                                    {obj.values['64'].value ? obj.values['64'].value : 'текст'}
                                </p>
                                {/* <span className="readmore">Узнать больше</span> */}
                            </Col>
                        </Row>
                    </div>
                    <div className="additional param">
                            <h3>Объекты на территории жилого комплекса</h3>
                            <Row>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Мебель
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Кондиционер
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Ремонт
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Видеонаблюдение
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Стеклопакеты
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Консьерж
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Лифт
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Бытовая техника
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Балкон
                                </Col>
                            </Row>

                        </div>

                </Space>
                <div className="object-contact">
                    <Button className="btn" onClick={(e) => {handlerLike(e)}}>
                        Подходит
                    </Button>
                    <Button className="btn btn-not" onClick={(e) => {handlerDislike(e)}}>
                        Не подходит
                    </Button>
                </div>
                <Modal title='' open={isOpenModal} onOk={handleOk} onCancel={handleCancel}>
                    <div className="modal-feedback">
                        <p>Ваш комментарий поможет нам подобрать для вас лучший вариант</p>
                        <textarea placeholder="Enter your message..." cols={25} rows={5}></textarea>
                    </div>
                </Modal>
            </Layout>
        )
    } else {
        return (
            <div>Упс, не найдено</div>
        )
    }
    
}

export default Object;