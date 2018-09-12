import React, { Component } from 'react';
import { Calendar, Badge, Modal, Button } from 'antd';
import PropTypes from 'prop-types';

class ConferenceCalendar extends React.Component{

    //组件的构造函数
    constructor(props){
        super(props);
        this.state = {
            visible: props.visible,
            conferContents: props.conferContents
        }
    }

    dateCellRender = (value) => {
        let contents = this.props.conferContents;
       // console.log(contents);
        for(let i in contents){
            let m = contents[i].date.split('-')[1];
            let d = contents[i].date.split('-')[2];
            if((value.month() + 1 ) == m){
                if(value.date() == d){
                    let listData = contents[i].title;
                 //   console.log(listData);
                    let id = 0;
                    return (
                        <ul className="events">
                            {
                                listData.map(item => (
                                    <li key={'li_'+ id++}>
                                        <Badge status='processing' text={item} />
                                    </li>
                                ))
                            }
                        </ul>
                    );
                }
            }
        }
    }


    onSelect = (value) => {
        let date = value.format('YYYY-M-D');
        if(this.props.onSubmit){
            this.props.onSubmit({
                visible : true,
                date : date
            });
        }
    };

    render(){
        return (
            <Calendar
                dateCellRender={this.dateCellRender}
                monthCellRender={this.monthCellRender}
                onSelect={this.onSelect}
            />
        )
    }
}

export default ConferenceCalendar;