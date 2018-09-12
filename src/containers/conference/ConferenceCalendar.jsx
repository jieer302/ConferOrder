import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import ConferenceCalendar from '../../components/conference/ConferenceCalendar.jsx'
import { changeVisible, changeDate } from '../../reducers/conference/modalVisible.jsx'
import { getContent } from '../../axios/content';

class ConferenceCalendarContainer extends React.Component{

    //组件的构造函数
    constructor(){
        super();
        this.state = {
            conferContents: [],
        }
    }

    componentWillMount(){
        console.log(this.props.visible);
    }

    componentDidMount(){
        getContent().then(res => {
            console.log(res.list);
            console.log(typeof res.list);
            this.setState({
                //conferContents: Object.assign({},res)
                conferContents : res.list
            })
            console.log(this.state.conferContents);
        })
    }

    handleSubmitVisible(event){
        console.log(event);
        console.log(event.visible);
        console.log(event.date);
        if(this.props.onSwitchVisible){
            this.props.onSwitchVisible(event.visible);
        }
        if(this.props.onUpdateDate){
            this.props.onUpdateDate(event.date);
        }
    }


    render(){
        return (
            <ConferenceCalendar
                conferContents={this.state.conferContents}
                onSubmit={this.handleSubmitVisible.bind(this)}
            />
        )
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
        },
        onUpdateDate: (date) => {
            dispatch(changeDate(date))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConferenceCalendarContainer)
