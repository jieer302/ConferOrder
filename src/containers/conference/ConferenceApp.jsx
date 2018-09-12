import React, { Component } from 'react';
import { Layout , Calendar, Button} from 'antd';
import ConferenceInfor from './ConferenceInfor.jsx';
import ConferenceCalendar from './ConferenceCalendar.jsx';
import Clock from '../../components/clock/Clock.jsx';

const { Header, Footer, Content } = Layout;

class ConferenceApp extends Component{
    render(){
        return(
                <div>
                    <Layout className="wrapper">
                        <Header className="header">
                            <h1>Conference room reservation</h1>
                            <Clock />
                        </Header>
                        <Content className="ConfCalendar">
                            <ConferenceCalendar />
                            <ConferenceInfor />
                        </Content>
                        <Footer className="footer">
                            版权@WL
                        </Footer>
                    </Layout>
                </div>
        );
    }
}

export default ConferenceApp;