import React, { Component } from 'react';
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
import { Login, Settings, Profile, Registration } from './Screens';
import { FullScreenModal, NavigationDrawer, TabIcon, SmallModal } from './Components';
import { Tab1, Tab1_1, Tab2, Tab2_1, Tab3, Tab3_1 } from './Screens/Tabs/';

export default class App extends Component {
    render() {
        return (
            <Router navigationBarStyle={{ elevation: 5 }}>
                <Scene key="modal" component={Modal} >
                    <Scene key="root">

                        {/*AUTH STACK*/}
                        <Scene key="loginStack" hideNavBar>
                            <Scene key="login" component={Login} inital />
                            <Scene key="register" component={Registration} />
                        </Scene>

                        {/*BEGINING OF TABS*/}
                        <Scene key="mainEntryPoint" component={NavigationDrawer} animation="fade" >
                            <Scene key="tabWrapper" tabs tabBarStyle={styles.tabBarStyle} tabBarIconContainerStyle={styles.tabIconStyle} pressOpacity={0.7}>

                                {/*TAB SET 1*/}
                                <Scene key="FirstTab" title="Tab 1" tabID="1" iconType="rowing" icon={TabIcon}>
                                    <Scene key="Tab1" component={Tab1} title="Tab: 1"  onRight={()=>alert("Right button")} rightTitle="Right"/>
                                    <Scene key="Tab1_1" component={Tab1_1} title="Tab: 1.1" />
                                </Scene>

                                {/*TAB SET 2*/}
                                <Scene key="SecondTab" title="Tab 2" tabID="2" icon={TabIcon}>
                                    <Scene key="Tab2" component={Tab2} title="Tab: 2" />
                                    <Scene key="Tab2_1" component={Tab2_1} title="Tab: 2.1" />
                                </Scene>

                                {/*TAB SET 3*/}
                                <Scene key="ThirdTab" title="Tab 3" tabID="3" icon={TabIcon}>
                                    <Scene key="Tab3" component={Tab3} title="Tab: 3" />
                                    <Scene key="Tab3_1" component={Tab3_1} title="Tab: 3.1" />
                                </Scene>

                                {/*SIDE DRAW LINKS*/}
                                <Scene key="settingsScreen" component={Settings} title="Settings" hideTabBar />
                                <Scene key="profileScreen" component={Profile} title="Profile" hideTabBar />

                            </Scene>
                        </Scene>

                        {/*MODAL POP-UP ERROR*/}
                        <Scene key="ModalError" component={FullScreenModal} title="Modal Error" direction="vertical" hideNavBar />
                    </Scene>
                    <Scene key="error" component={SmallModal} />
                </Scene>
            </Router>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

    tabIconStyle: {
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1
    }
}