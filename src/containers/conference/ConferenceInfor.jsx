import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Modal, Button } from 'antd';
import ConferenceAdd from '../../components/conference/ConferenceAdd.jsx';
import ConferenceInfor from '../../components/conference/ConferenceInfor.jsx';
import { changeVisible } from '../../reducers/conference/modalVisible.jsx';
import { detailContent, addContent } from '../../axios/content';
import PropTypes from 'prop-types';

class ConferenceAddContainer extends Component {

    static propTypes = {
        content: PropTypes.array,
        onAddContent: PropTypes.func
    }

    /*
       visible : 控制选择模态框可见
       visibleAdd ：控制添加模态框可见
       visibleShow ：控制查看模态框可见
     */

    constructor(){
        super();
        this.state = {
            detailContents : [],
            visibleAdd : false,
            visibleShow : false
        }
    }

    //组件挂载之前执行
    componentWillMount() {
        console.log(this.props.visible);
    }

    //选择模态框响应事件
    handleAddModal = e => {
        this.setState({
            visibleAdd : true
        },() => {});
        this.handleCancel();
    }

    handleShowModal  = e => {
        //查询选中日期的议程数据
        let date = this.props.date;
        console.log('参数date是' + date);
        detailContent(date).then(res => {
            this.setState({
                visibleShow : true,
                detailContents : res
            });
        })
    }

    //关闭选择模态框
    handleCancel = e => {
        if(this.props.onSwitchVisible){
            this.props.onSwitchVisible(false);
        }
    }

   //添加预定的模态框事件
    handleAddModalCancel(visibleAdd){
        let {visibleAdd : flag} = visibleAdd;
        this.setState({
            visibleAdd : flag
        },() => {});
    }

    handleAddContent(content){
       console.log(content);
        addContent(content).then(res => {
            console.log(res);
            if(res == 'success'){
                  alert('添加成功！')
            }
        })
    }

    //查看预定的模态框事件
    handleShowModalCancel(visibleShow){
        let {visibleShow : flag} = visibleShow;
        this.setState({
            visibleShow : flag
        },() => {});
    }

    render() {
        console.log('visibleAdd:' + this.state.visibleAdd);
        return (
            <div>
                <Modal
                    title = { 'The date you choose is :' +  this.props.date}
                    visible={this.props.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div className="chooseModal">
                        <Button type="primary" onClick={this.handleAddModal}>创建新预定</Button>
                        <Button type="primary" onClick={this.handleShowModal}>查看当前预定</Button>
                    </div>
                </Modal>

                <ConferenceAdd
                    visibleAdd={this.state.visibleAdd}
                    date = {this.props.date}
                    onAddModalCancel = {this.handleAddModalCancel.bind(this)}
                    onAddContent = {this.handleAddContent.bind(this)}
                />

                <ConferenceInfor
                    visibleShow = {this.state.visibleShow}
                    detailContents = {this.state.detailContents}
                    date = {this.props.date}
                    onShowModalCancel = {this.handleShowModalCancel.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.visible,
        date : state.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchVisible: (visible) => {
            dispatch(changeVisible(visible))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConferenceAddContainer)
