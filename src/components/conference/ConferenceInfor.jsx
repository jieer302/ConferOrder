import React, { Component } from 'react';
import {Modal, Collapse } from 'antd';
import PropTypes from 'prop-types';

const Panel = Collapse.Panel;

class ConferenceInfor extends Component {

   constructor(props) {
        super(props);
        this.state = {
            visibleShow: props.visibleShow,
        }
    }

    //组件挂载之前执行
    componentWillMount() {
        console.log(this.props.visibleShow);
    }

    handleCancel = (e) => {
        if(this.props.onShowModalCancel){
            this.props.onShowModalCancel({
                visibleShow : false
            });
        }
    }

    render() {
        let detail = this.props.detailContents;
        let conferMessage;
        if(Object.keys(detail).length == 0){
            conferMessage = '当前日期无预定';
        }else{
            conferMessage = (
                <Collapse accordion>
                    {
                        detail.map(item => (
                            <Panel header={item.title + ' : ' +  item.startTime + ' ~ ' + item.endTime} key={item.id}>
                                <p>{'创建者 : '+ item.creator + ' , 联系方式 : ' + item.telephone}</p>
                            </Panel>
                        ))
                    }
                </Collapse>
            )
        }
        return (
            <Modal
                title = { 'The following is the scheduled for  ' +  this.props.date}
                visible={this.props.visibleShow}
                onCancel={this.handleCancel}
                onOk = {this.handleCancel}
                okText = {'返回'}
            >
                {conferMessage}
            </Modal>
        )
    }
}

export default ConferenceInfor;