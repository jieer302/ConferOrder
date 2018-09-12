import React, { Component } from 'react';
import {Modal, Button } from 'antd';
import moment from 'moment';
import { Form, Input, DatePicker, Col, TimePicker, Cascader, InputNumber } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
};

class ConferenceModalAdd extends Component {

   constructor(props) {
        super(props);
        this.state = {
            visibleAdd: props.visibleAdd,
        }
    }

    //组件挂载之前执行
    componentWillMount() {
        console.log(this.props.visibleAdd);
    }

    handleCancel = (e) => {
        if(this.props.onAddModalCancel){
            this.props.onAddModalCancel({
                visibleAdd : false
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            const values = {
                ...fieldsValue,
                'date': fieldsValue['date'].format('YYYY-M-D'),
                'startTime': fieldsValue['startTime'].format('HH:mm'),
                'endTime': fieldsValue['endTime'].format('HH:mm'),
            };

            if(this.props.onAddContent){
                this.props.onAddContent({
                    content : values
                });
            }
            console.log('Received values of form: ', values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log('visibleAdd显示：' + this.props.visibleAdd);
        return (
            <Modal
                title="添加会议"
                visible={this.props.visibleAdd}
                onCancel={this.handleCancel}
                footer={null}
                destroyOnClose = {true}
            >
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="title"
                    >
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input title!' }],
                        })(
                            <Input placeholder="Please input the title of conference" id="error"/>
                        )}
                    </FormItem>
                    <FormItem
                        label="date"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('date',
                            {
                                initialValue: moment(this.props.date)
                            },
                            {
                                rules: [{required: true, message: 'Please select date!'}]
                            })(
                            <DatePicker format="YYYY-M-D" />
                        )}
                    </FormItem>
                    <FormItem
                        label="timeRange"
                        {...formItemLayout}
                    >
                        <Col span={11}>
                            <FormItem>
                                {getFieldDecorator('startTime',
                                    {
                                        rules: [{required: true, message: 'Please select start time!'}]
                                    })(
                                    <TimePicker format="HH:mm" />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={2}>
                              <span> ~ </span>
                        </Col>
                        <Col span={11}>
                            <FormItem>
                                {getFieldDecorator('endTime',
                                    {
                                        rules: [{required: true, message: 'Please select end time!'}]
                                    })(
                                    <TimePicker format="HH:mm" />
                                )}
                            </FormItem>
                        </Col>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="creator"
                    >
                        {getFieldDecorator('creator', {
                            rules: [{ required: true, message: 'Please input creator!' }],
                        })(
                            <Input placeholder="Please input the creator" id="error"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="telephone"
                    >
                        {getFieldDecorator('telephone', {
                            rules: [{ required: true, message: 'Please input telephone!' }],
                        })(
                            <Input placeholder="Please input the telephone of creator" id="error"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="formSubmit">Submit</Button>
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

const ConferenceAdd = Form.create()(ConferenceModalAdd);

export default ConferenceAdd;