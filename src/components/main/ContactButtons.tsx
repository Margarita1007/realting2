import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React, { useState } from 'react';

const ContactButtons: React.FC = () => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [isOpenModal, setIsModalOpen] = useState(false);

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
        <div>
            <div className="object-contact">
                    <div className="btn" onClick={(e) => {handlerLike(e)}}>
                        {like ? <LikeFilled /> :
                        <LikeOutlined />}
                        Подходит
                    </div>
                    <div className="btn btn-not" onClick={(e) => {handlerDislike(e)}}>
                        {dislike ? <DislikeFilled /> :
                        <DislikeOutlined />}
                        Не подходит
                    </div>
                </div>
                <Modal title='' open={isOpenModal} onOk={handleOk} onCancel={handleCancel}>
                    <div className="modal-feedback">
                        <p>Ваш комментарий поможет нам подобрать для вас лучший вариант</p>
                        <textarea placeholder="Enter your message..." cols={25} rows={5}></textarea>
                    </div>
                </Modal>
        </div>
    )
}

export default ContactButtons;