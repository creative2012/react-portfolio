import React, { Component, useState } from 'react';
import { motion } from "framer-motion";
import { Button, Modal, Space, Form, Input } from 'antd';
import { DownloadOutlined, ContactsOutlined } from '@ant-design/icons';
import './style.css';
import image from './images/cardLogo.svg';
import CV from './paulMorrisCV.doc';

const { TextArea } = Input;

function Contact() {

    const downloadCV = () => {
        window.open(CV);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [form] = Form.useForm();
    const formLayout = 'horizontal';


    const formItemLayout =
        formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

    const buttonItemLayout =
        formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

    return (
        <motion.div
            initial={{ opacity: 0, bottom: 0 }}
            animate={{ opacity: 1, bottom: 20 + 'px' }}
            exit={{ opacity: 0, bottom: -1000, scale: 0.2, transition: { delay: 0, duration: 0.2 } }}
            transition={{ delay: 0.8, ease: "linear" }}
            key="cc" id="contactPageContainer">
            <div id="contactCard">
                <div id="cardLogo" style={{ backgroundImage: `url("${image}")` }}></div>
                <div id="cardText">

                    <div id="cc-name">Paul Morris<div>Front End Developer</div></div>
                    <div id="cc-contact-btns">
                        <Space wrap>
                            <Button
                                role="button"
                                className="btn"
                                onClick={downloadCV}
                                icon={<DownloadOutlined />}>Download CV</Button>
                            <Button
                                role="button"
                                className="btn"
                                onClick={showModal}
                                icon={<ContactsOutlined />}>Contact Form</Button>
                        </Space>
                    </div>
                    <div id="cc-email"><i className="fa fa-envelope"></i> Creative2012@hotmail.com</div>
                    <div id="cc-number"><i className="fa fa-phone"></i> +44 07857 921 643</div>

                </div>
                <Modal
                    title="SEND MESSAGE"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    centered
                    width={100 + '%'}
                    footer={[
                        
                    ]}>
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{ layout: formLayout }}

                        style={{ maxWidth: 600 }}
                    >
                        <Form.Item label="Name">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Number">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Message">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item {...buttonItemLayout}>
                            <Button type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </motion.div >
    )

}
export default Contact